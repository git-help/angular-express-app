////////////////////////////////////////////////////////////////////////////////
 /*                    *
 ** Posts Routes      **
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
var Posts = db.posts;


/***************/
 //            //
 // Routes     //
 //            //
/***************/

/* GET posts listing. */
router.get('/', function(req, res, next) {

  // Query db for all Posts
  Posts.find({}, function (err, posts) {

    // If there's an error, log it and return to user
    if (err) {

        // Nice log message on your end, so that you can see what happened
        console.log('Couldn\'t get all posts because of ' + err);

        // send the error
        res.status(500).json({
            'message': 'Internal server error.'
        });
    }

    // send posts as JSON object
    res.status(201).json(posts);
  });

});

// Expose the module
// export the router for usage in our server/router/index.js
module.exports = router;


/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

// router.get('/', controller.index);
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

// exports.index = function(req, res) {
//   Thing.find(function (err, things) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, things);
//   });
// };

// // Get a single thing
// exports.show = function(req, res) {
//   Thing.findById(req.params.id, function (err, thing) {
//     if(err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     return res.json(thing);
//   });
// };

// // Creates a new thing in the DB.
// exports.create = function(req, res) {
//   Thing.create(req.body, function(err, thing) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, thing);
//   });
// };

// // Updates an existing thing in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Thing.findById(req.params.id, function (err, thing) {
//     if (err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     var updated = _.merge(thing, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, thing);
//     });
//   });
// };

// // Deletes a thing from the DB.
// exports.destroy = function(req, res) {
//   Thing.findById(req.params.id, function (err, thing) {
//     if(err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     thing.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

// function handleError(res, err) {
//   return res.send(500, err);
// }