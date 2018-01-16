"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./expressjs-admin-server/models/category.server.model.ts
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category Name is required']
    },
    desciption: {
        type: String
    },
    meta_title: {
        typ: String
    },
    meta_description: {
        type: String
    },
    meta_keyword: {
        type: String
    },
    image: String,
    parent_id: {
        type: Schema.ObjectId,
        ref: 'Category',
    },
    top: Number,
    column: Number,
    sort_order: Number,
    status: Number,
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
var Category = mongoose.model('Category', categorySchema);
exports.default = Category;
//# sourceMappingURL=category.server.model.js.map