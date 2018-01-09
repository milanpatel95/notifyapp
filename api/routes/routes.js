'use strict'

module.exports = function(app){
  var controller = require('../controller/controller.js');

  app.route('/store')
    .post(controller.saveWorkRecord)

  app.route('/database')
    .get(controller.getWorkRecords)

  app.route('/counts')
    .get(controller.getCounts)
};
