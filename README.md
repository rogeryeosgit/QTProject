# Local Set Up

Installing new node packages and updating package.json at the same time
npm install -s <packagename>

Start Up MongoDB locally and set to correct path to DB
mongod --dbpath c:\data\db

Start up NodeMon for quick updates to app (it monitors server updates
nodemon app.js

To Check and list Data in MongoDB
mongo
use authProj
db.users.find()

To find help for data in MongoDB
mongo
help


# Referencess

ExpressJS API reference can be found here
https://expressjs.com/en/4x/api.html#express

Markdown Cheatsheet
https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet

Actual login tutorial
https://medium.com/of-all-things-tech-progress/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359

Reference Code Here
https://github.com/Createdd/authenticationIntro

Mongoose Reference Docs
http://mongoosejs.com/docs/#

Connect Mongo Docs
https://www.npmjs.com/package/connect-mongo


# Learning Experience

18/06/2018
- If static path for expressJS is not set, router needs to define
- Seems like you can just define MongoDB db name on the fly via mongoose.connect
- Mongoose provides object data modeling via schemas

20/06/2018
- Mongoose allows object data modelling for MongoDB
- req -> Request Object, res -> Response Object, next -> next function in aplication's request
- Enter Mongo database to view data via "Mongo" on command line
- Still figuring out how to store data in MongoDB having error. At the same time redirecting to "profile"

04/07/2018
- Still figuring out how to store data into MongoDB
- Seems like entering into MongoDB using Mongoose requires an ID. Perhaps I need to implement sessions
- in order to see MongoDB data "use authProj", followed by "db.users.find()" or "db.sessions.find()" where users / sessions are collections within the db.

06/07/2018
- Still need some time to figure out authentication portion

16/07/2018
- The default mongoDB port is TCP 27017
- The way to delete data manually is via db.users.deleteOne({key value pair}) or db.users.deleteMany({key value pair})
- Mongoose gives an automatic versioning "__v", disable via versionKey: false
- Express has an inbuilt mechanism to handle errors
