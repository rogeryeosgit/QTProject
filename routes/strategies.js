var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '211325641937-lv80h7unjk3v2efi7i16rpgch9985ji5.apps.googleusercontent.com',
    clientSecret: 'EzLN_YyAiBX8uGg2fz27tiKb',
    callbackURL: "http://qt.navigators.tech/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
  ));

  module.exports = passport;