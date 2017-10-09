'use strict';

var _tokoModel = require('./tokoModel.js');

var _tokoModel2 = _interopRequireDefault(_tokoModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAliranKungfu = function getAliranKungfu(callback, limit) {
    _tokoModel2.default.find(callback).limit(limit);
};

var addAliranKungfu = function addAliranKungfu(mhs, callback) {
    _tokoModel2.default.create(mhs, callback);
};

module.exports = { getAliranKungfu: getAliranKungfu, addAliranKungfu: addAliranKungfu

    /////

};