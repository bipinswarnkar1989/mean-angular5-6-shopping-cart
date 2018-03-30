"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var productImageSchema = new Schema({
    product: {
        type: Schema.ObjectId,
        ref: 'Product'
    },
    image: {
        type: String,
        required: true
    },
    sort_order: {
        type: Number
    }
});
//# sourceMappingURL=productimage.server.model.js.map