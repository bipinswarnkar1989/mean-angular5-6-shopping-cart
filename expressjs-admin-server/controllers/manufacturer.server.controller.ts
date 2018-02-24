// ./expressjs-admin-server/controllers/manufacturer.server.controller.ts
import Manufacturer from '../models/manufacturer.server.model';
import * as multer from 'multer';

//set multer storage
var storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./public/images/manufacturer');
    },
    filename:(req,file,cb) => {
        let date = Date.now();
        var newImageName = file.originalname.split('.')[file.originalname.split('.').length - 2];
        newImageName = newImageName.replace(/ /g, '_');
        newImageName = date + newImageName + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
        cb(null,newImageName);
    }
});

const Upload = multer({
    storage:storage
}).single('image');

export default class manufacturerController{
    createManufacturer = (req,res,next) => {
        console.log('createManufacturer: '+req.body);
        if (req.body) {
            let newManuftr = new Manufacturer(req.body);
            if (req.file) {
                newManuftr.image = req.file.path;
            }
            newManuftr.save((err,mftr) => {
               if (err) {
                   console.log(err);
                   return res.json({
                       success:false,
                       message:'Some Error',
                       err
                   });
               }else{
                   return res.json({
                       success:true,
                       message:'Manufacturer Added Successfully',
                       mftr
                   })
               }
            });
        }
    }

    uploadMftrImage = (req,res,next) => {
        console.log('uploadMftrImage: '+ req.file);
       if(req.file){
        Upload(req,res,err => {
            if(err){
                console.log('ERROR:'+err);
                return res.json({success:false,message:'Image Error',err});
              }
              else{
                next();
              }
        })
       }else{
        next();
       }
    }

    fetchManufacturer = (req,res) => {
        console.log('fetchManufacturer: '+req.params);
        let limit = parseInt(req.params.limit);
        let limit_value:number = limit < 30 ? limit : 30;
        let page:number = parseInt(req.params.page);
        let skip_value:number = (page * limit_value) - limit_value;
        Manufacturer.find()
                    .limit(limit_value)
                    .skip(skip_value)
                    .exec((err,mftrs) => {
                       if (err) {
                        console.log(err);
                        return res.json({
                            success:false,
                            message:'Some Error',
                            err
                        });
                       }else{
                        return res.json({
                            success:true,
                            message:'Manufacturer Fetched Successfully',
                            mftrs
                        })
                    }
                    })
    }
}