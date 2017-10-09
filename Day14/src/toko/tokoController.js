
import AliranKungfu from  './tokoModel.js';



let getAliranKungfu = function (callback,limit) {
    AliranKungfu.find(callback).limit(limit);
}

let addAliranKungfu = function (mhs,callback) {
    AliranKungfu.create(mhs,callback);
}

module.exports = {getAliranKungfu,addAliranKungfu}

