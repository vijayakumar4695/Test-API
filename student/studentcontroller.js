var studentModel = require('./studentModel');

var addStudent = function(req,res){
    var student1 = new studentModel(req.body);
    console.log(req.body)
    student1.save(function(err,result){
      if(err){
          res.send({'message':'cannot add'})
      }else{
          res.send(result)
      }
    })
}
 
var studenUpdate =function(req,res){
    var id = new studentModel(req.body._id);
    var data = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    }
    studentModel.findByIdAndUpdate({_id},{data},function(err,result){
        if(err){
            res.send({'message':'cannot update'})
        }else{
            res.send({'message':'Update Successfully',result})
        }
    })
}

var getStudent = function(req,res){
    studentModel.find(function(err,result){
        if(err){
            res.send({'message':'cannot get'})
        }else{
            res.send(result)
        }
    })
}


module.exports = {
    addStudent:addStudent,
    getStudent:getStudent
}