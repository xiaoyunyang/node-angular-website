var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
//var StormpathStrategy = require('passport-stormpath');
//var session = require('express-session');
var flash = require('connect-flash');

var index_routes = require('./routes/index');
//var auth_routes = require('./routes/auth');
//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();
/*
var strategy = new StormpathStrategy();

//adding secure login
passport.use(strategy);
passport.serializeUser(strategy.serializeUser);
passport.deserializeUser(strategy.deserializeUser);*/

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//secure login configuration
/*
app.use(session({
  secret: process.env.EXPRESS_SECRET,
  key: 'sid',
  cookie: {secure: false},
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());*/


//app.use('/', routes);
//app.use('/users', users);
app.use('/', index_routes);
//app.use('/', auth_routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

/* NEED THIS FOR HEROKU */
var http = require('http');
app.set('port', process.env.PORT || 5000);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server running at localhost:" + app.get('port'));
});
