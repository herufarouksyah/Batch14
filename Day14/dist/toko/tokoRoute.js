'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tokoController = require('./tokoController.js');

var _tokoController2 = _interopRequireDefault(_tokoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

route.get('/alirankungfu', function (req, res) {
    _tokoController2.default.getAliranKungfu(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
    ///
});

route.post('/alirankungfu', function (req, res) {
    var alirankungfu = req.body;
    _tokoController2.default.addAliranKungfu(alirankungfu, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;