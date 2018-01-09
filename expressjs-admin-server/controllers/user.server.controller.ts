// ./expressjs-admin-server/controllers/user.server.controller.ts
import * as jwt from 'jsonwebtoken';

import User from '../models/user.server.model';

export default class userController{
  model:any = User;
  jwt:any = jwt;

  generateToken = (user) => {
     let u = {
       id:user._id,
       email:user.email
     }
     let token = this.jwt.sign(u, process.env.SECRET_TOKEN, { algorithm:'HS384' },{
       expiresIn:60 * 60 * 1 // expires in 1 hours
     },(err,token) => token);

     return token;
  }

  login = (req,res,next) => {
    console.log('login: '+JSON.stringify(req.body));
    let email = req.body.email;
    let password = req.body.password;
    if(email && password){
      this.model.findOne({email:email}, (err,user) => {
        if(err){
          return res.json({success:false,message:'Something going wrong'});
        }
        if(!user){
           return res.json({success:false, message:'Invalid Email'});
        }
        else{
          user.comparePassword(password, (error,isMatch) => {
            if(!err && isMatch){
              var token = this.generateToken(user);
              return res.json({success:true, message:'Authenticated Successfully', user, token});
            }
            else{
              return res.json({success:false, message:'Invalid Password'});
            }
          })
        }
      })
    }else{
      return res.json({ success: false, message: 'Please enter username and password'});
    }
  }

  register = (req,res) => {
    console.log('register: '+JSON.stringify(req.body));
    if(req.body){
      var newUser = new this.model({
        email:req.body.email,
        password:req.body.password,
        username:req.body.username
      });
      newUser.save((err,user) => {
        if(err){console.log('error: '+ JSON.stringify(err) )
          if(err.name === 'validationError'){
            return res.json({success:false,message:'Email already taken',err});
          }
          else{
            return res.json({success:false,message:'Something going wrong',err});
          }
        }
        var token = this.generateToken(user);
        return res.json({
          success:true,
          message:'Registered Successfully',
          token
        });
      })
   }
    }

  validateToken = (req,res,next) => {
    console.log('validateToken: '+JSON.stringify(req.headers['authorization']));
    let token = req.headers['authorization'];
    if(!token){
      return false;
    }
    this.jwt.verify(token, process.env.SECRET_TOKEN, (err,user) => {
      if(err){
        console.log(err);
        return res.send(false);
      } else {
        console.log('Authenticated Successfully')
        return res.send(true);
      }
    })
  }


}
