'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aliranKungfuSchema = _mongoose2.default.Schema({
    KodeAliran: {
        type: String,
        unique: true,
        require: true
    },
    DeskripsiAliran: String
});

var AliranKungfu = module.exports = _mongoose2.default.model('AliranKungfu', aliranKungfuSchema, 'AliranKungfu');