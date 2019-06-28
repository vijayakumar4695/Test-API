var mongoose = require('mongoose');

var Schema = mongoose.Schema

var studentModel = new Schema({
    name:String,
    email:String,
    password:String,
    phone:Number

});

module.exports = mongoose.model('studentDetails', studentModel)