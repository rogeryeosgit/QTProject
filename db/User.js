var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
});

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

// Implicitely using id from google as password
UserSchema.statics.findOrCreate = function (gData, callback) {
  console.log("Here : " + gData.email);
  User.findOne({ email: gData.email })
    .exec(function (err, user) {
      if (err) {
        console.log("Error 1");
        return callback(err)
      } else if (!user) {
        console.log("Error 2");
        User.create(gData, function (error, user) {
          console.log("Error 2.5");
          if (error) {
            console.log("Error 3");
            return callback(error);
          } else {
            console.log("Error 4");
            return callback(null, user);
          }
        });
      }
      return callback(null,user); // Found the user in the database
    });
}

var User = mongoose.model('User', UserSchema);

module.exports = User;