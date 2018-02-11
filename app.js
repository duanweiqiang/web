var express = require('express');
var routes = require('./routes');
var http = require("http");
var swig = require('swig');
var app = express();


// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Swig 将会默认为你缓存模板文件，但是你能够禁用它，并使用Express来缓存并代替它
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);

// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// 注意：你应该确保在生产环境中始终使用模板缓存
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

app.use(express.static(__dirname + '/public'));

// 中间件
app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello D3.js!");
  } else {
    next();
  }
});

routes(app);

var server = app.listen(3030, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
