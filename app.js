var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/authProj', {useNewUrlParser: true}); // For local access
mongoose.connect('mongodb+srv://devoappaccess:vGWhWWtRPR0bgqP0@firstcluster-xno0w.mongodb.net/authProj', {useNewUrlParser: true});
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});
 
//use sessions for tracking logins
app.use(session({
  secret: 'journal now',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: '211325641937-lv80h7unjk3v2efi7i16rpgch9985ji5.apps.googleusercontent.com',
  clientSecret: 'EzLN_YyAiBX8uGg2fz27tiKb',
  callbackURL: "http://www.example.com/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
     User.findOrCreate({ googleId: profile.id }, function (err, user) {
       return done(err, user);
     });
}
));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /html
app.use(express.static(__dirname + '/template'));

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
  res.send('<head><meta http-equiv="refresh" content="3"></head><body><h1>Redirecting in 3 seconds...</h1><br>' + err.message + "</body>");
});

// listen on port 3000
// app.listen(3000, function () {
//   console.log('Express app listening on port 3000');
// });

module.exports = app;