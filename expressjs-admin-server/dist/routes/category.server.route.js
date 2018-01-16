"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./expressjs-admin-server/routes/category.server.route.ts
var express = require("express");
var category_server_controller_1 = require("../controllers/category.server.controller");
var setCategoryRoutes = function (app) {
    var router = express.Router();
    var categoryCtrl = new category_server_controller_1.default();
    router.route('/category')
        .post(categoryCtrl.createCategory)
        .put(categoryCtrl.editCategory);
    router.route('/category/:page/:limit')
        .get(categoryCtrl.fetchCategory);
    router.route('/category/:id')
        .get(categoryCtrl.getCategory)
        .delete(categoryCtrl.getCategory);
    app.use('/api/category', router);
};
exports.default = setCategoryRoutes;
//# sourceMappingURL=category.server.route.js.map