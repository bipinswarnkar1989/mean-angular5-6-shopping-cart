"use strict";
exports.__esModule = true;
// ./expressjs-admin-server/routes/user.server.route.js
var express = require("express");
var user_server_controller_1 = require("../controllers/user.server.controller");
var setUserRoutes = function (app) {
    var router = express.Router();
    var userCtrl = new user_server_controller_1["default"]();
    router.route('/login').post(userCtrl.login);
    router.route('/user')
        .post(userCtrl.register);
    router.route('/validateToken')
        .get(userCtrl.validateToken);
    app.use('/api/user', router);
};
exports["default"] = setUserRoutes;
