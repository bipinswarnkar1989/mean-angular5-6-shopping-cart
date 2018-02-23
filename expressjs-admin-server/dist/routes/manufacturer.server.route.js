"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./expressjs-admin-server/routes/manufacturer.server.route.ts
var express = require("express");
var manufacturer_server_controller_1 = require("../controllers/manufacturer.server.controller");
var setmanufacturerRoutes = function (app) {
    var router = express.Router();
    var mftrCtrl = new manufacturer_server_controller_1.default();
    router.route('/manufacturer')
        .post(mftrCtrl.uploadMftrImage, mftrCtrl.createManufacturer);
    app.use('/api/manufacturer', router);
};
//# sourceMappingURL=manufacturer.server.route.js.map