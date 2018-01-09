"use strict";
exports.__esModule = true;
/*
  Main file of the server
  ./expressjs-admin-server/app.ts
*/
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var user_server_route_1 = require("./routes/user.server.route");
var app = express();
exports.app = app;
dotenv.load({ path: '.env' });
//allow cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
//configure App
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 3001));
var mongodbURI;
if (process.env.NODE_ENV === 'dev') {
    mongodbURI = process.env.MONGODB_DEV_URI;
}
else {
    mongodbURI = process.env.MONGODB_URI;
}
mongoose.Promise = global.Promise;
var mongodb = mongoose.connect(mongodbURI);
mongodb
    .then(function (db) {
    console.log("Connected to MongoDb on " + db.host + ":" + db.port);
    user_server_route_1["default"](app);
    app.get('/', function (req, res) {
        return res.end('Api working');
    });
    // catch 404
    app.use(function (req, res, next) {
        res.status(404).send('<h2 align=center>Page Not Found!</h2>');
    });
    app.listen(app.get('port'), function () {
        console.log("Mern Shopping Cart Admin server Listening on " + app.get('port'));
    });
})["catch"](function (err) {
    console.log(err);
});
