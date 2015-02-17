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
## JavaScript Stack - MEAN
[mongo]() - 
[ExpressJS]() -
[AngularJS]() - front-end framework
[NodeJS]() - 
 
## Build/Scaffolding Tools
[yeoman]()
[yeoman-generator angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack#controller)
[Grunt]() - Build automation

### Angular-specific Tools
[UI router]() - for routing in Angular
[sass]() - CSS pre-compiler
[jade? html?]() - for markup (and templating w/Jade?)


### Front-end Dependencies
[Bower]() - front-end dependency package manager
[Bootstrap Material Design]() - Bootstrap 'theme' based on [Google's Material Design principles]()

> for real-time data
>* [Firebase]()
>* [Firepad]()
>* [AngularFire]()