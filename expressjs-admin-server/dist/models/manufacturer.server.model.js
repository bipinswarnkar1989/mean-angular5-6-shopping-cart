"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./expressjs-admin-server/models/manufacturer.server.model.ts
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var manufacturerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    image: String,
    sort_order: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
var Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);
exports.default = Manufacturer;
//# sourceMappingURL=manufacturer.server.model.js.map