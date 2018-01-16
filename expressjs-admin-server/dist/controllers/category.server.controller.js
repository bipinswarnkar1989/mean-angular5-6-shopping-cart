"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./expressjs-admin-server/controllers/category.server.controller.ts
var category_server_model_1 = require("../models/category.server.model");
var categoryController = /** @class */ (function () {
    function categoryController() {
        this.createCategory = function (req, res) {
            console.log('createCategory: ' + JSON.stringify(req.body));
            if (req.body) {
                var newCategory = new category_server_model_1.default(req.body);
                newCategory.save(function (err, catgr) {
                    if (err) {
                        return res.json({ success: false, message: 'Something going wrong', err: err });
                    }
                    else {
                        return res.json({ success: true, message: 'Category Added Successfully', catgr: catgr });
                    }
                });
            }
        };
    }
    return categoryController;
}());
exports.default = categoryController;
//# sourceMappingURL=category.server.controller.js.map