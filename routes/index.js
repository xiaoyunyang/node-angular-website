//index.js

app = require('../app');
var path = require('path');
var html_dir = path.join(__dirname, '../public');

/* 
 * GET home page.
 */
app.get('/', function(req, res, next){
  //res.send('heres some text');
  //res.render('index', {title: 'My Awesome App'});
  res.sendfile(html_dir + '/index.html');
});
app.get('/api', function(req, res, next){
  //res.send('heres some text');
  res.send({name: 'Will', age: 33});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//require('./user');
