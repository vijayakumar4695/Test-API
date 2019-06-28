var express=require('express');

var studentController = require('./studentcontroller');


var studentRouting = express.Router();

studentRouting.route('/addStudent').post(studentController.addStudent);
studentRouting.route('/getStudent').get(studentController.getStudent);

module.exports = studentRouting;