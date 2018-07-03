// ./expressjs-admin-server/controllers/category.server.controller.ts
import Category from '../models/category.server.model';
import * as multer from 'multer';

//set multer storage
var storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null, './public/images/category');
  },
  filename:(req,file,cb) => {
    let date = Date.now();
    var newImageName = file.originalname.split('.')[file.originalname.split('.').length - 2];
    newImageName = newImageName.replace(/ /g, '_');
    newImageName = date + newImageName + "." + file.originalname.split('.')[file.originalname.split('.').length - 1];
    cb(null, newImageName);
  }
})

const Upload = multer({
  storage:storage
}).single('image');

export default class categoryController{
  createCategory = (req,res) => {
    console.log('createCategory: '+ JSON.stringify(req.body));
    if(req.body){
      var newCategory = new Category(req.body);
      if(req.file){
        newCategory.image = req.file.path;
      }
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

  uploadCtgrImage = (req,res,next) => {
    console.log('uploadCtgrImage: '+ JSON.stringify(req.file));
    Upload(req,res,err => {
      if(err){
           console.log('ERROR:'+err);
           return res.json({'success':false,'message':err});;
         }
         else{
           next();
         }
    });
  }

  fetchCategories = (req,res) => {
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
      let id = req.body.id;
      if(req.file){
        req.body.image = req.file.path;
      }
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

  searchCategory = (req,res) => {
    console.log('searchCategory: '+ JSON.stringify(req.params));
    if(req.params.q){
      let searchKey = '/.*'+req.params.q+'.*/i';
      let regex = {$regex: eval(searchKey)};
      Category.find({$or:[{name:regex},{desciption:regex}]}).exec((err,catgr) => {
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

  deleteMultiple = (req,res) => {
    console.log('deleteMultipleCategory: '+ JSON.stringify(req.params));
     if(req.params.ids){
       let ids = req.params.ids;
       Category.remove({ _id:{ $in:ids }}, (err,resp) => {
         if(err){
           return res.json({success:false,message:'Something going wrong',err});
         }
         else{
           return res.json({success:true,message:'Category Deleted Successfully',resp});
         }
       })
     }
  }

}
