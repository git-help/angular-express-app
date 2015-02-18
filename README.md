# angular-express-app

> ng-express app w/ two directory setup: server &amp; client.  Serves Angular app by default and allow it to handle routing. 

## Need to have two command line tabs open. 
  >A tab open in the client directory, & a tab in the server directory

## In the client folder on command line 
  >- $ grunt serve 
  
  > it will fire up on localhost:9000. 
    >**Close that web browser tab**

## In the server folder on command line 
  > $ npm test 
  >* express server will run on localhost:3000  **Open it in the browser 
    >Express server is serving this

## Production Ready:
  **shut down both servers**
  
## in client tab run
  > $ grunt --force:
  
  > Yeoman will optimize the client-side code and put it in your server/dist directory. 

## In server tab run:

  > $ npm start
  
    >Production ready application will be served on localhost:3000
  
  Now, your server folder is what you'd deploy

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