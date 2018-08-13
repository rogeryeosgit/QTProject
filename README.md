**__To Be Exported to Learning Journey journal__**

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

Learning Vue via some videos here
https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/


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
- Starting to try out Vue and integrating it into project. (MEVN)
- Script of Vue needs to come after html code to dynamically change it
- learnt about v-bind. can just be replaced with ":xxxx". Having some problems adding in CSS while still using vue

18/07/2018
- v-if, v-else-if and v-else. v-if shows when its boolean true in the data object
- v-show toggles. Reactive if combined with a few other directives.
- v-for directive loops through array to make a list with <li> tag
- v-on for events, listen for clicks -> "click", can use "@" and "mouseover"
- style bindings using v-bind can change styles on the fly
- computed property is cached. Uses dependancies to compute 'return' value. Wheras methods can be called frequently, compute just stays calculated on the fly
- Creating Vue components includes Props, Templates and Data methods (returning data objects) --> this causes it to create new data rather then tapping one a single data object
- For templates in Components use "`" instead of "'"
- Props in components allow people to access components from beyond the component
- this.$emit produces an event from the component that the actual HTML code can pick up via v-on directive.
- v-model does 2 way data binding, changes the data in the Vue instance

20/07/2018
- Had much frustration trying to deploy onto AWS. 
- Tried AWS CodePipeline for a "quick" deployment and I had to set up AWS CodeDeploy, AWS CodeBuild
- Grappled with YAML files, no success. Needed that for CodeDeploy and CodePipeline
- Tried to be smart to work on deploying app on Serverless with AWS Lambda and API Gateway, no success.
- Decided to fall back on plain ole EC2. Tried to be smart again and grappled with figuring out EBS. Then tried to auto deploy with CodeDeploy again. 
- Spun up EC2 instances for load balancing. Stuck on YAML AGAIN!!!
- All these while putting together key pairs. AWS CLI. Roles. IAM. Found stuff automagically uploaded onto S3.
- Killed myself (Reminder to check bill)
- Decided to go with plain old heroku. Set it up in 20 mins. What a waste of my day.
- Only consideration with using Heroku is that, free regions are only in US/EU. Preferred Singapore region. Perhaps not an issue now.

30/07/2018
- Familarizing myself with MongoDB Atlas. local db increases in size. Asked for understanding.
- Mongoose uses a pool of connections to manage connection to Mongodb
- Figuring out how to get a static ip

01/08/2018
- Set up a static ip and learnt to connect to db from it but to no avail. Turns out Mongoose does not seem to allow modifications of http protocols out of the box.

09/08/2018
- Learning Passport.js

13/08/2018
- Realized I could export more then one module in a single js file
- callbacks from google APIs need to be identical to call back properties in app file
- Don't mess up which console you are printing to. It can be time wasting.
- After authentication with google OAuth2, to save copy of profile into MongoDB db to track what data is entered by user. 
- Somehow my app.js is not loading up MongoDB related stuff when I login via google. Gets stuck. Need to figure out what triggers certain things in app.js
- How to make 2 different kinds of logins work together
