////////////////////////////////////////////////////////////////////////////////
 /*               *
 ** Express API  **
 *                */
////////////////////////////////////////////////////////////////////////////////

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/***********************/
 //                    //
 // Route Imports      //
 //                    //
/***********************/

// Always relative paths in Express
var routes = require('./router/index');
var users = require('./router/routes/users');
var posts = require('./router/routes/posts');


var app = express();


// view engine setup


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/***********************/
 //                    //
 // Development Setup  //
 //                    //
/***********************/

if (app.get('env') === 'development') {

    // run seed file
    require('./database/seed');

    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


/***********************/
 //                    //
 // Production Setup   //
 //                    //
/***********************/

if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


/***************************/
 //                        //
 // Router Instantiation   //
 //                        //
/**************************/

// Pulling in router/index.js, passing it
// an instance of our Express application
var router = require('./router')(app);


// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});



module.exports = app;


