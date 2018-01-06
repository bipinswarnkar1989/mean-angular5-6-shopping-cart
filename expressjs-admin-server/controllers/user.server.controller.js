"use strict";
exports.__esModule = true;
// ./expressjs-admin-server/controllers/user.server.controller.ts
var jwt = require("jsonwebtoken");
var user_server_model_1 = require("../models/user.server.model");
var userController = /** @class */ (function () {
    function userController() {
        var _this = this;
        this.model = user_server_model_1["default"];
        this.jwt = jwt;
        this.generateToken = function (user) {
            var u = {
                id: user._id,
                email: user.email
            };
            var token = _this.jwt.sign(u, process.env.SECRET_TOKEN, { algorithm: 'HS384' }, {
                expiresIn: 60 * 60 * 1 // expires in 1 hours
            }, function (err, token) { return token; });
            return token;
        };
        this.login = function (req, res, next) {
            console.log('login: ' + JSON.stringify(req.body));
            var email = req.body.email;
            var password = req.body.password;
            if (email && password) {
                _this.model.findOne({ email: email }, function (err, user) {
                    if (err) {
                        return res.json({ success: false, message: 'Something going wrong' });
                    }
                    if (!user) {
                        return res.json({ success: false, message: 'Invalid Email' });
                    }
                    else {
                        user.comparePassword(password, function (error, isMatch) {
                            if (!err && isMatch) {
                                var token = _this.generateToken(user);
                                return res.json({ success: true, message: 'Authenticated Successfully', user: user, token: token });
                            }
                            else {
                                return res.json({ success: false, message: 'Invalid Password' });
                            }
                        });
                    }
                });
            }
            else {
                return res.json({ success: false, message: 'Please enter username and password' });
            }
        };
        this.register = function (req, res) {
            console.log('register: ' + JSON.stringify(req.body));
            if (req.body) {
                var newUser = new _this.model({
                    email: req.body.email,
                    password: req.body.password,
                    username: req.body.username
                });
                newUser.save(function (err, user) {
                    if (err) {
                        console.log('error: ' + JSON.stringify(err));
                        if (err.name === 'validationError') {
                            return res.json({ success: false, message: 'Email already taken', err: err });
                        }
                        else {
                            return res.json({ success: false, message: 'Something going wrong', err: err });
                        }
                    }
                    var token = _this.generateToken(user);
                    return res.json({
                        success: true,
                        message: 'Registered Successfully',
                        token: token
                    });
                });
            }
        };
    }
    return userController;
}());
exports["default"] = userController;
