
## JavaScript "MEAN" Stack
  >* [Mongo](http://docs.mongodb.org/manual/) - no-SQL database, the "M"
  >* [ExpressJS](http://expressjs.com/starter/installing.html) - web server framework for Node.js. Used to build back-end API, the "E"
  >* [AngularJS](https://angularjs.org/) - front-end javascript framework, the "A"
  >* [NodeJS](http://nodejs.org/) - server-side javascript based on V8 runtime, the "N" 
 
## Build/Scaffolding Tools
  >* [Yeoman Generator - angular](https://github.com/yeoman/generator-angular) - basic angular app scaffold
  >* [Yeoman Generator - express](https://github.com/petecoop/generator-express) - basic express app scaffold
  >* [Yeoman Generator - angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) - additional app scaffolding tool w/a folder structure that is a bit more modularized and would be preferable in a real-world scenario. However, its complexity is just outside our grasp. Therefore, we went with a two-folder project structure as described in J Cole Morrison's tutorial referenced below.
  >* [Grunt](http://gruntjs.com/) - Build automation

### Angular-specific Tools
  >* [UI CodeMirror](https://github.com/angular-ui/ui-codemirror)
  >* [UI router](https://github.com/angular-ui/ui-router) - for routing in Angular

### Front-end Dependencies
  >* [CodeMirror](http://codemirror.net/doc/manual.html) - javascript code rendering utility
  >* [Bower](http://bower.io/) - front-end dependency package manager
  >* [Bootstrap Material Design](http://fezvrasta.github.io/bootstrap-material-design/) - Bootstrap 'theme' based on [Google's Material Design principles](http://www.google.com/design/spec/material-design/introduction.html)
  >* [sass](http://sass-lang.com/) - CSS pre-compiler

### Real-time data Tools
  >* [Firebase](https://www.firebase.com/) - a powerful API to store and sync data in realtime.
  >* [AngularFire](https://www.firebase.com/docs/web/libraries/angular/) - AngularFire is the officially supported AngularJS binding for Firebase
  >* [Firepad](http://www.firepad.io/#1) - firebase and CodeMirror open-source project

#### Key Resources/References
  >* [Building an Angular and Express App (parts 1-3) by J Cole Morrison](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/) - detailed tutorial on setting up a simple "MEAN" app.
  >* [Using an AngularJS Factory to Interact with a RESTful Service](http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service) - great article on how to consume a RESTful API using an Angular Factory.
  >* [Learning JavaScript Design Patterns by Addy Osmani](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvcmvp)

-----------------------------------------

## Getting started
  > This project is an Angular Express app w/ a two directory setup: server &amp; client.  Serves Angular app by default and allows it to handle routing. 

### Working with app in development:
>1. You need to have two command line tabs open. 
  >- A tab open in the client directory, & a tab in the server directory
>2. In the client folder on command line 
  >- `$ grunt serve `
  >- it will fire up on localhost:9000. 
  >-**Close that web browser tab**
>3. In the server folder on command line 
  >- `$ npm test`
  >- Express server will run on localhost:3000  **Open it in the browser**. Express us acting as the back-end API.

### Getting ready for production deployment:
>1. **shut down both servers**
>2. in client tab run:
  >- `$ grunt --force:`
  >- Yeoman will optimize the client-side code and put it in your server/dist directory. 
>3. in the server tab run:
  >- `$ npm start`
  >- Production ready application will be served on localhost:3000
>4. Now, your server folder is ready to be deployed

