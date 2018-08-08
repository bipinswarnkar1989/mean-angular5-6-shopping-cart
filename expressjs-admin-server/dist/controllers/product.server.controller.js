"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_server_model_1 = require("../models/product.server.model");
var productController = /** @class */ (function () {
    function productController() {
        this.addProduct = function (req, res, next) {
            console.log('addProduct: ' + JSON.stringify(req.body));
            if (req.body) {
                var newProduct = new product_server_model_1.default(req.body);
                newProduct.save(function (err, p) {
                    if (err) {
                        console.log('Error: ' + JSON.stringify(err));
                        return res.json({
                            success: false,
                            message: 'Some Error',
                            err: err
                        });
                    }
                    else {
                        if (p) {
                            console.log('Product Added: ' + JSON.stringify(p));
                            return res.json({
                                success: true,
                                message: 'Product Added Successfully',
                                product: p
                            });
                        }
                    }
                });
            }
        };
        this.getProducts = function (req, res, next) {
            console.log('getProduct: ' + JSON.stringify(req.params));
            var page = parseInt(req.params.page);
            var limit = parseInt(req.params.limit);
            if (page && limit) {
                var limit_value = limit < 30 ? limit : 30;
                var skip_value = (page * limit_value) - limit_value;
                product_server_model_1.default.find()
                    .limit(limit_value)
                    .skip(skip_value)
                    .exec(function (err, products) {
                    if (err) {
                        console.log('Error: ' + JSON.stringify(err));
                        return res.json({
                            success: false,
                            message: 'Some Error',
                            err: err
                        });
                    }
                    else {
                        if (products) {
                            console.log('getProducts: ' + JSON.stringify(products));
                            return res.json({
                                success: true,
                                message: 'Products Fetched Successfully',
                                products: products
                            });
                        }
                    }
                });
            }
        };
        this.updateProduct = function (req, res, next) {
            console.log('updateProduct: ' + JSON.stringify(req.body));
            var id = req.body._id;
            if (req.body && id) {
                product_server_model_1.default.findByIdAndUpdate(id, req.body, { new: true }, function (err, product) {
                    if (err) {
                        console.log('Error: ' + JSON.stringify(err));
                        return res.json({
                            success: false,
                            message: 'Some Error',
                            err: err
                        });
                    }
                    else {
                        if (product) {
                            console.log('ProductUpdated: ' + JSON.stringify(product));
                            return res.json({
                                success: true,
                                message: 'Products Updated Successfully',
                                product: product
                            });
                        }
                    }
                });
            }
        };
        this.deleteProduct = function (req, res, next) {
            console.log('deleteProduct: ' + JSON.stringify(req.params));
            var id = req.params.id;
            if (id) {
                product_server_model_1.default.findByIdAndRemove(id, function (err, product) {
                    if (err) {
                        console.log('Error: ' + JSON.stringify(err));
                        return res.json({
                            success: false,
                            message: 'Some Error',
                            err: err
                        });
                    }
                    else {
                        if (product) {
                            console.log('ProductRemoved: ' + JSON.stringify(product));
                            return res.json({
                                success: true,
                                message: 'Products Deleted Successfully',
                                product: product
                            });
                        }
                    }
                });
            }
        };
    }
    return productController;
}());
exports.default = productController;
;
//# sourceMappingURL=product.server.controller.js.map