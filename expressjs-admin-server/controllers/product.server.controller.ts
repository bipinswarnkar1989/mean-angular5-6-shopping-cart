import Product from '../models/product.server.model';

export default class productController {
    addProduct = (req,res,next) => {
        console.log('addProduct: '+ JSON.stringify(req.body));
        if (req.body) {
            let newProduct = new Product(req.body);
            newProduct.save((err,p) => {
                if (err) {
                    console.log('Error: '+ JSON.stringify(err));
                    return res.json({
                        success:false,
                        message:'Some Error',
                        err
                    });
                }
                else{
                    if (p) {
                        console.log('Product Added: '+ JSON.stringify(p));
                        return res.json({
                            success:true,
                            message:'Product Added Successfully',
                            product:p
                        })
                    }
                }
            })
        }
    }

    getProducts = (req,res,next) => {
        console.log('getProduct: '+ JSON.stringify(req.params));
        let page = parseInt(req.params.page);
        let limit = parseInt(req.params.limit);
        if (page && limit) {
            let limit_value = limit < 30 ? limit : 30;
            let skip_value = (page * limit_value) - limit_value;
            Product.find()
                   .limit(limit_value)
                   .skip(skip_value)
                   .exec((err,products) => {
                       if (err) {
                           console.log('Error: '+ JSON.stringify(err));
                           return res.json({
                               success:false,
                               message:'Some Error',
                               err
                           })
                       }else{
                           if (products) {
                               console.log('getProducts: '+ JSON.stringify(products));
                               return res.json({
                                   success:true,
                                   message:'Products Fetched Successfully',
                                   products
                               })
                           }
                       }
                   })
        }
    }
};
