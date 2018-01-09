'use strict';

var mongoose = require('mongoose'),
WorkRecord = mongoose.model('WorkRecords');

exports.saveWorkRecord = function(req,res){
  var d = new Date();
  d.setDate(d.getDate()-1);
  var new_workrecord = new WorkRecord({'workdate':d,'workstatus':req.header('workstatus')});
  new_workrecord.save(function(err,workrecord){
    if(err)
      res.send(err);
    res.json(workrecord);
  });
};

exports.getWorkRecords = function(req,res){
  WorkRecord.find({},function(err,workrecord){
    if(err)
      res.send(err);
    res.json(workrecord);
  });
};


exports.getCounts = function(req,res){
  var worked,notworked;
  WorkRecord.count({workstatus:true}, function( err, count){
    worked = count;
    WorkRecord.count({workstatus:false}, function( err, count1){
      notworked = count1;
      res.json({"worked":worked.toString(),"notworked":notworked.toString()});
    });
  });
};

exports.clearWorkRecords = funtion(req,res){
  
};
