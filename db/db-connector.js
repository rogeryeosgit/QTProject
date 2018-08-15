var mongoose = require('mongoose')

// connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/authProj', {useNewUrlParser: true}); // For local access
mongoose.connect('mongodb+srv://devoappaccess:vGWhWWtRPR0bgqP0@firstcluster-xno0w.mongodb.net/authProj', {useNewUrlParser: true});
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(" *--- Connected to MongoDB ---* ")
});

module.exports = db;