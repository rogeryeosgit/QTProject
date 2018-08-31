var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport')
var db = require('./db/db-connector')
var enforce = require('heroku-ssl-redirect')

//use sessions for tracking logins
app.use(session({
  secret: 'journal now',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use(passport.initialize());
app.use(passport.session());

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /html
app.use(express.static(__dirname + '/template'));

// Enforcing SSL on website
app.use(enforce());

// include routes
var routes = require('./routes/router');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send('<head><meta http-equiv="refresh" content="3;url=http://qt.navigators.tech"></head><body><h1>Redirecting you back to login in 3 seconds...</h1><br>' + err.message + "</body>");
});

// listen on port 3000
// app.listen(3000, function () {
//   console.log('Express app listening on port 3000');
// });

module.exports = app;