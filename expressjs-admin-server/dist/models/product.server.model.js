"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        unique: true
    },
    desciption: {
        type: String
    },
    meta_title: {
        type: String
    },
    meta_description: {
        type: String
    },
    meta_keywords: {
        type: String
    },
    tags: {
        type: String
    },
    image: {
        type: String
    },
    additional_images: {
        type: Schema.ObjectId,
        ref: 'ProductImage'
    },
    model: {
        type: String
    },
    sku: {
        type: String
    },
    upc: {
        type: String
    },
    ean: {
        type: String
    },
    jan: {
        type: String
    },
    isbn: {
        type: String
    },
    mpn: {
        type: String
    },
    location: {
        type: String
    },
    quantity: {
        type: String,
        required: true
    },
    stock_status: {
        type: String,
        required: true
    },
    manufacturer: {
        type: Schema.ObjectId,
        ref: 'Manufacturer'
    },
    category: {
        type: Schema.ObjectId,
        ref: 'Category'
    },
    shipping: {
        type: Boolean
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: String
    },
    length: {
        type: String
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    minimum_order_unit: {
        type: Number
    },
    maximum_order_unit: {
        type: Number
    },
    sort_order: {
        type: Number
    },
    status: {
        type: Boolean
    },
    viewed: {
        type: Number
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
var Product = mongoose.model('Product', productSchema);
exports.default = Product;
//# sourceMappingURL=product.server.model.js.map