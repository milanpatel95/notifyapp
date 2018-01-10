'use strict';

var mongoose = require('mongoose'),
WorkRecord = mongoose.model('WorkRecords');

exports.saveWorkRecord = function(req,res){
  var date = new Date();
  date.setTime(date.getTime() + (date.getTimezoneOffset()+330)*60*1000);
  date.setDate(date.getDate()-1);
  var yesterday = date;
  var dd = yesterday.getDate();
  var mm = yesterday.getMonth()+1;
  var yyyy = yesterday.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
  if(mm<10){
    mm='0'+mm;
  }
  yesterday = dd+'/'+mm+'/'+yyyy;
  var new_workrecord = new WorkRecord({'workdate':yesterday,'workstatus':req.header('workstatus')});
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
