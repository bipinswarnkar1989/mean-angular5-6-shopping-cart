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

  fetchCategory = (req,res) => {
    console.log('fetchCategory: '+ JSON.stringify(req.params));
    if(req.params.page && req.params.limit){
      let page = parseInt(req.params.page);
      let limit = parseInt(req.params.limit) < 30 ? parseInt(req.params.limit) : 30;
      let skip_value = (page * limit) - limit;
      Category.find()
              .skip(skip_value)
              .limit(limit)
              .exec((err,catgr) => {
                if(err){
                  return res.json({success:false,message:'Something going wrong',err});
                }
                else{
                  return res.json({success:true,message:'Categories Fetched Successfully',catgr});
                }
              })
    }
  }

  deleteCategory = (req,res) => {
    console.log('deleteCategory: '+ JSON.stringify(req.params));
     if(req.params.id){
       let id = req.params.id;
       Category.findByIdAndRemove(id, (err,catgr) => {
         if(err){
           return res.json({success:false,message:'Something going wrong',err});
         }
         else if(!catgr){
           return res.json({success:false,message:'Category Not Found!'});
         }
         else{
           return res.json({success:true,message:'Category Deleted Successfully',catgr});
         }
       })
     }
  }

  editCategory = (req,res) => {
    console.log('editCategory: '+ JSON.stringify(req.body));
    if(req.body){
      let id = req.body._id;
      Category.findByIdAndUpdate(id, { $set: req.body }, { 'new':true })
              .exec((err,catgr) => {
                if(err){
                  return res.json({success:false,message:'Something going wrong',err});
                }
                else if(!catgr){
                  return res.json({success:false,message:'Category Not Found!'});
                }
                else{
                  return res.json({success:true,message:'Category Updated Successfully',catgr});
                }
              })
    }
  }

  getCategory = (req,res) => {
    console.log('getCategory: '+ JSON.stringify(req.params));
    if(req.params.id){
      let id = req.params.id;
      Category.findOne({_id:id}, (err,catgr) => {
        if(err){
          return res.json({success:false,message:'Something going wrong',err});
        }
        else if(!catgr){
          return res.json({success:false,message:'Category Not Found!'});
        }
        else{
          return res.json({success:true,message:'Category Fetched Successfully',catgr});
        }
      })
    }
  }
}
