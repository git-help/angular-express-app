# angular-express-app

> ng-express app w/ two directory setup: server &amp; client.  Serves Angular app by default and allow it to handle routing. 

## Need to have two command line tabs open. 
  > A tab open in the client directory, & a tab in the server directory

## In the client folder on command line 
>- $ grunt serve 
  
> it will fire up on localhost:9000. 
  >**Close that web browser tab**

## In the server folder on command line 
> $ npm test 
>* express server will run on localhost:3000  **Open it in the browser 
  >Express server is serving this

## Production Ready:
**shut down both servers**
  
## in client tab run
> $ grunt --force:
  
> Yeoman will optimize the client-side code and put it in your server/dist directory. 

## In server tab run:

> $ npm start
  
>Production ready application will be served on localhost:3000
  
>* Now, your server folder is what you'd deploy

# Project 3 readme draft...
## JavaScript Stack - "MEAN Stack"
  >* [Mongo](http://docs.mongodb.org/manual/) - 
  >* [ExpressJS](http://expressjs.com/starter/installing.html) - web server framework for Node.js. Used to build back-end API
  >* [AngularJS](https://angularjs.org/) - front-end framework
  >* [NodeJS](http://nodejs.org/) - server-side javascript
 
## Build/Scaffolding Tools
  >* [yeoman](http://yeoman.io/)
  >* [Yeoman Generator - angular](https://github.com/yeoman/generator-angular) - basic angular scaffold
  >* [Yeoman Generator - express](https://github.com/petecoop/generator-express) - basic express app scaffold
  >* [yeoman-generator angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack#controller)
  >* [Grunt](http://gruntjs.com/) - Build automation

### Angular-specific Tools
  >* [UI router](https://github.com/angular-ui/ui-router) - for routing in Angular

### Front-end Dependencies
  >* [Bower](http://bower.io/) - front-end dependency package manager
  >* [Bootstrap Material Design](http://fezvrasta.github.io/bootstrap-material-design/) - Bootstrap 'theme' based on [Google's Material Design principles](http://www.google.com/design/spec/material-design/introduction.html)
  >* [sass](http://sass-lang.com/) - CSS pre-compiler

### Real-time data Tools
  > for real-time data
  >* [Firebase]()
  >* [Firepad]()
  >* [AngularFire]()

#### Key Resources/References
  >* [Building an Angular and Express App (parts 1-3) by J Cole Morrison](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/) - detailed tutorial on setting up a simple "MEAN" app.
  >* [Using an AngularJS Factory to Interact with a RESTful Service](http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service) - great article on how to consume a RESTful API using an Angular Factory.

  Getting started

  Make sure you have yo installed: npm install -g yo
  Install the generator globally: npm install -g generator-express
  Run: yo express and select Basic. Add --coffee if you require CoffeeScript.
  Run: grunt or gulp to run the local server at localhost:3000, the grunt/gulp tasks include live reloading for views, css in public/css and restarting the server for changes to app.js or js in routes/

TO DO 
write about our feeling of "not coding enough"
decision to go the "hard way" knowing that focusing on a particular set of tools for a month will make us actually "know it" and we didnt want to wait a week and just do a project that showcased rails.

about pair-programming only being effective if one or both have a decent amout of experience with the stack.
