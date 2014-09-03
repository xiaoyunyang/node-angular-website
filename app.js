/**
 * Module dependencies
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = module.exports = express();

//all environments
app.set('port', (process.env.PORT || 3000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'))); 

//development only
if ('development'==app.get('env')) {
  app.use(express.errorHandler());
  app.use(express.logger('dev'));
}

//exports
require('./routes');
//require('./users');

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server running at localhost:" + app.get('port'));
});