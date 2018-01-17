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
        this.fetchCategory = function (req, res) {
            console.log('fetchCategory: ' + JSON.stringify(req.params));
            if (req.params.page && req.params.limit) {
                var page = parseInt(req.params.page);
                var limit = parseInt(req.params.limit) < 30 ? parseInt(req.params.limit) : 30;
                var skip_value = (page * limit) - limit;
                category_server_model_1.default.find()
                    .skip(skip_value)
                    .limit(limit)
                    .exec(function (err, catgr) {
                    if (err) {
                        return res.json({ success: false, message: 'Something going wrong', err: err });
                    }
                    else {
                        return res.json({ success: true, message: 'Categories Fetched Successfully', catgr: catgr });
                    }
                });
            }
        };
        this.deleteCategory = function (req, res) {
            console.log('deleteCategory: ' + JSON.stringify(req.params));
            if (req.params.id) {
                var id = req.params.id;
                category_server_model_1.default.findByIdAndRemove(id, function (err, catgr) {
                    if (err) {
                        return res.json({ success: false, message: 'Something going wrong', err: err });
                    }
                    else if (!catgr) {
                        return res.json({ success: false, message: 'Category Not Found!' });
                    }
                    else {
                        return res.json({ success: true, message: 'Category Deleted Successfully', catgr: catgr });
                    }
                });
            }
        };
        this.editCategory = function (req, res) {
            console.log('editCategory: ' + JSON.stringify(req.body));
            if (req.body) {
                var id = req.body._id;
                category_server_model_1.default.findByIdAndUpdate(id, { $set: req.body }, { 'new': true })
                    .exec(function (err, catgr) {
                    if (err) {
                        return res.json({ success: false, message: 'Something going wrong', err: err });
                    }
                    else if (!catgr) {
                        return res.json({ success: false, message: 'Category Not Found!' });
                    }
                    else {
                        return res.json({ success: true, message: 'Category Updated Successfully', catgr: catgr });
                    }
                });
            }
        };
        this.getCategory = function (req, res) {
            console.log('getCategory: ' + JSON.stringify(req.params));
            if (req.params.id) {
                var id = req.params.id;
                category_server_model_1.default.findOne({ _id: id }, function (err, catgr) {
                    if (err) {
                        return res.json({ success: false, message: 'Something going wrong', err: err });
                    }
                    else if (!catgr) {
                        return res.json({ success: false, message: 'Category Not Found!' });
                    }
                    else {
                        return res.json({ success: true, message: 'Category Fetched Successfully', catgr: catgr });
                    }
                });
            }
        };
        this.searchCategory = function (req, res) {
            console.log('searchCategory: ' + JSON.stringify(req.params));
            if (req.params.q) {
                var searchKey = '/.*' + req.params.q + '.*/i';
                var regex = { $regex: eval(searchKey) };
                category_server_model_1.default.find({ $or: [{ name: regex }, { desciption: regex }] }).exec(function (err, catgr) {
                    if (err) {
                        return res.json({ success: false, message: 'Something going wrong', err: err });
                    }
                    else if (!catgr) {
                        return res.json({ success: false, message: 'Category Not Found!' });
                    }
                    else {
                        return res.json({ success: true, message: 'Category Fetched Successfully', catgr: catgr });
                    }
                });
            }
        };
    }
    return categoryController;
}());
exports.default = categoryController;
//# sourceMappingURL=category.server.controller.js.map