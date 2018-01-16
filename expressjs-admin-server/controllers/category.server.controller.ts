// ./expressjs-admin-server/controllers/category.server.controller.ts
import Category from '../models/category.server.model';

export default class categoryController{
  createCategory = (req,res) => {
    console.log('createCategory: '+ JSON.stringify(req.body));
    if(req.body){
      var newCategory = new Category(req.body);
      newCategory.save((err,catgr) => {
        if(err){
          return res.json({success:false,message:'Something going wrong',err});
        }
        else{
          return res.json({success:true,message:'Category Added Successfully',catgr});
        }
      })
    }
  }
}
