import mongoose from 'mongoose';

let aliranKungfuSchema = mongoose.Schema({
    KodeAliran:{
        type: String,
        unique: true,
        require: true
    },
    DeskripsiAliran: String
});

let AliranKungfu = module.exports = mongoose.model('AliranKungfu',aliranKungfuSchema,'AliranKungfu');
