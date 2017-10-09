'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressRoute = require('express-route');

var _expressRoute2 = _interopRequireDefault(_expressRoute);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _tokoRoute = require('./toko/tokoRoute.js');

var _tokoRoute2 = _interopRequireDefault(_tokoRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

// ...
app.use('/api', _tokoRoute2.default);

_mongoose2.default.connect('mongodb://localhost:27017/DBDesaKungfu');
//let db = mongoose.connection;


app.listen(8812);
// class Test {
//     datang (nama){
//         return nama;
//     }
// }
// console.log(Test.datang("Fullann"));