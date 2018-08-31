var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../db/User');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: process.env.GClient_Id,
    clientSecret: process.env.GClient_Secret,
    callbackURL: "https://qt.navigators.tech/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {

        var userData = {
            email: profile.emails[0].value,
            username: profile.displayName,
            password: profile.id
        }
        User.findInDB(userData, function (err, user) {
            console.log("Is DONE called?");
            if (err) {
                if (err.message === 'User not found.') {
                    console.log("Was it here?");
                    User.create(userData, function (error, user) {
                        if (error) {
                            console.log("Was there an error creating a new user?")
                            return done(error);
                        }
                        console.log("Did it get here?");
                        return done(error, user);
                    });
                }
            } else {
                console.log("It got here right?");
                return done(err, user);
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

module.exports = passport;