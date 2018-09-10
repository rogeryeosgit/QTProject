var mongoose = require('mongoose')

// connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/authProj', {useNewUrlParser: true}); // For local access
mongoose.connect(process.env.MongoDb_Connection, {useNewUrlParser: true});
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(" *--- Connected to MongoDB ---* ")
});

module.exports = db;