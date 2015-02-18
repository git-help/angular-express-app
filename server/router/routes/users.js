////////////////////////////////////////////////////////////////////////////////
 /*                    *
 ** Users Routes      **
 *                    */
////////////////////////////////////////////////////////////////////////////////

// include Express
var express = require('express');

// Initialize the Router
var router = express.Router();

// require moment, _.js, color for error logging
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');


////////////////////////////////////////////////////////////////////////////////
 /*               *
 ** Database      **
 *                */
////////////////////////////////////////////////////////////////////////////////

// path to database
var db = require('../../database');

// Database schemas (models)
var User = db.users;


/******************************************************************/
 //                                                               //
 // ROUTES                                                        //
 //                                                               //
 // Using Rails-like standard naming convention for endpoints.    //
 // GET     /Users              ->  index                         //
 // POST    /Users              ->  create                        //
 // GET     /Users/:id          ->  show                          //
 // PUT     /Users/:id          ->  update                        //
 // DELETE  /Users/:id          ->  destroy                       //
 //                                                               //
/******************************************************************/

// on routes that end in /Users
router.route('/')
  /* GET to read all Users */ 
  // accessed at (/Users)
  .get(function(req, res, next) {
    // Query db for all Users
    User.find({}, function (err, users) {
      // If there's an error, log it and return to user
      if (err) {
          // Nice log message to see what happened
          console.log('Couldn\'t get all Users because of ' + err);
          // send the error
          res.status(500).json({
              'message': 'Internal server error.'
          });
      }
      // send Users as JSON object
      res.status(201).json(users);
    });

  })

  /* User to create a new User */ 
  // accessed at (/Users)
  .post(function (req, res, next) {

    // set req params to local variables
    var firstname = req.body.firstname,
        lastname  = req.body.lastname,
        email   = req.body.email;

    // create a new instance of the User model
    var newUser = new User({
                          'firstname': firstname,
                          'email'  : email,
                          'lastname' : lastname
    });

    // save instance to db
    newUser.save(function (err, newUser) {

      // If there's an error, log it and return to user
      if (err) {

        console.log('Couldn\'t get all Users because of ' + err);

        // send the error
        res.status(500).json({
            'message': 'Internal server error.'
        });
      }
      // on successful save, respond with msg
      res.status(201).json(newUser.id);
    });

});



// on routes that end in /users/:user_id
// first, create a new router.route() for reqs w/:user_id
// remember! in Express 4 /Users is assumed, so we use /:user_id
router.route('/:user_id')
  /* GET Users by id */
  // find the User with this id 
  // accessed at (/Users/:User_id)
  .get(function (req, res) {
    console.log(req.params.user_id);
    user_id = req.params.user_id;

    User.findById(user_id, function (err, user) {
      // If there's an error, log it and return to user
      if (err) {

        console.log('Couldn\'t get all Users because of ' + err);

        // send the error
        res.status(500).json({
            'message': 'Internal server error.'
        });
      }
      // on successful save, respond with msg
      res.status(201).json(user);
    });

  })

  /* PUT Users by id */
  // update the User with this id 
  // accessed at (/Users/:user_id)
  .put(function (req, res) {
    // first set req params to local variables
    var firstname = req.body.firstname,
        lastname  = req.body.lastname,
        email   = req.body.email,
        user_id = req.params.user_id;

    // then, use Model to find the User we want
    User.findById(req.params.user_id, function (err, user) {
        // If there's an error, log it...
        if (err) {
          console.log('Couldn\'t get all Users because of ' + err);
          // and send the error to the user
          res.status(500).json({
              'message': 'Internal server error.'
          });
        }

        // if no error, update the User and...
        user.firstname = firstname;
        user.lastname  = lastname;
        user.email   = email;

        // save the user
        user.save(function (err) {
          if (err){ res.send(err);}
          // on successful update, respond with User object
          res.status(201).json(user);
        })
    });
  })

  .delete(function (req, res) {
    /* DELETE Users by id */
    // delete the User with this id 
    // accessed at (/Users/:user_id)
    User.remove({ _id: req.params.user_id }, function (err, user) {
      // If there's an error...
      if (err) {
        // log it and...
        console.log('Couldn\'t get all users because of ' + err);
        // send the error to user
        res.status(500).json({
            'message': 'Internal server error.'
        });
      }
      // on successful delete, respond with msg
      res.status(201).json({ message: 'Successfully deleted!'});
    });
  });

// potential refactor for DRY errors... pull it out into a single fn
// exports.index = function(req, res) {
//   Thing.find(function (err, things) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, things);
//   });
// };

// function handleError(res, err) {
// //   return res.send(500, err);
// // }


// Expose the module
// export the router for usage in our server/router/index.js
module.exports = router;