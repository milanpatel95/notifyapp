var express = require('express');
var app = express();
var port = 8080;
var mongoose = require('mongoose');

var bodyParser = require('body-parser');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/WorkRecordDb');
var WorkRecords = require('./api/model/model');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);
console.log('Server started on port:'+port);

app.use(function(req,res){
  res.status(404).send({url:req.originalUrl + ' not found'});
});
