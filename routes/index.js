// var D3controller = require('../controller/d3.d3.controller.js')
//
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('Hello world');
  });
  app.get('/customer', function(req, res){
    res.render("index", { "message": "Hello World" });
  });
  app.get('/admin', function(req, res){
    res.send('admin page');
  });
};
