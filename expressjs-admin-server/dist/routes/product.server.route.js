"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_server_controller_1 = require("../controllers/product.server.controller");
var setProductRoutes = function (app) {
    var router = express.Router();
    var productCtrl = new product_server_controller_1.default();
    router.route('/')
        .post(productCtrl.addProduct);
    router.route('/:page/:limit')
        .get(productCtrl.getProducts);
    app.use('/api/product', router);
};
exports.default = setProductRoutes;
//# sourceMappingURL=product.server.route.js.map