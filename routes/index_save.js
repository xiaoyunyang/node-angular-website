var express = require('express');
var router = express.Router();
var passport = require('passport');
//var stormpath = require('stormpath');

/* GET home page. */
var path = require('path');
var html_dir = path.join(__dirname, '../public');

router.get('/', function(req, res){
  //res.sendfile(html_dir + 'test.html');
  res.sendfile(html_dir + '/index.html');
});

/* GET private page once logged in */
/*
router.get('/dashboard', function (req, res) {
  if (!req.user || req.user.status !== 'ENABLED') {
    return res.redirect('/login');
  }
  return res.sendfile(html_dir, '/dashboard.html');
  res.render('dashboard', {title: 'Dashboard', error: req.flash('error')[0]});
  //res.render('dashboard', {title: 'Dashboard', user: req.user});
});*/

/*
 * GET registration page 
 */
// Render the registration page.
router.get('/register', function(req, res) {
  return res.redirect('/login');
  //return res.send('this is the registration page');
  res.render('register', {title: 'Register', error: req.flash('error')[0]});
});

// Register a new user to Stormpath.
/*
router.post('/register', function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  // Grab user fields.
  if (!username || !password) {
    return res.send('incomplete registration form submitted!');
    //return res.render('register', {title: 'Register', error: 'Email and password required.'});
  }

  // Initialize our Stormpath client.
  var apiKey = new stormpath.ApiKey(
    process.env['STORMPATH_API_KEY_ID'],
    process.env['STORMPATH_API_KEY_SECRET']
  );
  var spClient = new stormpath.Client({ apiKey: apiKey });

  // Grab our app, then attempt to create this user's account.
  var app = spClient.getApplication(process.env['STORMPATH_APP_HREF'], function(err, app) {
    if (err) throw err;

    app.createAccount({
      givenName: 'John',
      surname: 'Smith',
      username: username,
      email: username,
      password: password,
    }, function (err, createdAccount) {
      if (err) {
        res.send('something is wrong with your registration!');
        //return res.render('register', {title: 'Register', error: err.userMessage});
      } else {
        passport.authenticate('stormpath')(req, res, function () {
          return res.redirect('/dashboard');
        });
      }
    });
  });
});*/
/*
 * GET login page 
 */
// Render the login page.
router.get('/login', function(req, res) {
  res.redirect('/#/login');
  //res.send('you need to login to access dashboard. this is the login page!');
  res.render('login', {title: 'Login', error: req.flash('error')[0]});
});

// Authenticate a user.
/*
router.post(
  '/login',
  passport.authenticate(
    'stormpath',
    {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: 'Invalid email or password.',
    }
  )
);*/
/*
 * the logout route 
 */
// Logout the user, then redirect to the home page.
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
