var mongoose = require('mongoose');
var RecordData = mongoose.Schema;

var RecordDataSchema = new RecordData({
  workdate:{
    type:Date
  },
  workstatus:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model('WorkRecords',RecordDataSchema);
