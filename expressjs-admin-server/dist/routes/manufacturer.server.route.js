"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./expressjs-admin-server/routes/manufacturer.server.route.ts
var express = require("express");
var manufacturer_server_controller_1 = require("../controllers/manufacturer.server.controller");
var setmanufacturerRoutes = function (app) {
    var router = express.Router();
    var mftrCtrl = new manufacturer_server_controller_1.default();
    router.route('/search/:q')
        .get(mftrCtrl.searchManufacturer);
    router.route('/')
        .post(mftrCtrl.uploadMftrImage, mftrCtrl.createManufacturer);
    router.route('/:page/:limit')
        .get(mftrCtrl.fetchManufacturer);
    app.use('/api/manufacturer', router);
};
exports.default = setmanufacturerRoutes;
//# sourceMappingURL=manufacturer.server.route.js.map