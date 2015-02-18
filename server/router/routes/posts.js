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

var bodyParser = require('body-parser');



////////////////////////////////////////////////////////////////////////////////
 /*               *
 ** Database      **
 *                */
////////////////////////////////////////////////////////////////////////////////

// path to database
var db = require('../../database');

// Database schemas (models)
var Post = db.posts;


/***************/
 //            //
 // Routes     //
 //            //
/***************/

// on routes that end in /posts
// - - - - - - - - - - - - - - - 
router.route('/')

  /* GET all posts */
  .get(function(req, res, next) {
    // Query db for all Posts
    Post.find({}, function (err, posts) {
      // If there's an error, log it and return to user
      if (err) {
          // Nice log message to see what happened
          console.log('Couldn\'t get all posts because of ' + err);
          // send the error
          res.status(500).json({
              'message': 'Internal server error.'
          });
      }
      // send posts as JSON object
      res.status(201).json(posts);
    });

  })

  /* POST to create a new post */
  .post(function (req, res, next) {

    // set req params to local variables
    var title = req.body.title,
        text  = req.body.text,
        url   = req.body.url;

    // create a new instance of the Post model
    var newPost = new Post({
                          'title': title,
                          'url'  : url,
                          'text' : text
    });

    // save instance to db
    newPost.save(function (err, newPost) {

      // If there's an error, log it and return to user
      if (err) {

        console.log('Couldn\'t get all posts because of ' + err);

        // send the error
        res.status(500).json({
            'message': 'Internal server error.'
        });
      }
      // on successful save, respond with msg
      res.status(201).json({message: 'Post Created!'});
    });

});



// on routes that end in /posts/:post_id
// - - - - - - - - - - - - - - - - - - -
// first, create a new router.route() for reqs w/:post_id
// remember! in Express 4 /posts is assumed, so we use /:post_id

router.route('/:post_id')
  /* GET posts by id */
  .get(function (req, res) {
    post_id = req.params.post_id;

    Post.findById(post_id, function (err, post) {
      // If there's an error, log it and return to user
      if (err) {

        console.log('Couldn\'t get all posts because of ' + err);

        // send the error
        res.status(500).json({
            'message': 'Internal server error.'
        });
      }
      // on successful save, respond with msg
      res.status(201).json(post);
    });

  })

  /* PUT posts by id */
  .put(function (req, res) {
    // first set req params to local variables
    var title = req.body.title,
        text  = req.body.text,
        url   = req.body.url,
        post_id = req.params.post_id;

    // then, use Model to find the post we want
    Post.findById(req.params.post_id, function (err, post) {
        // If there's an error, log it...
        if (err) {
          console.log('Couldn\'t get all posts because of ' + err);
          // and send the error to the user
          res.status(500).json({
              'message': 'Internal server error.'
          });
        }

        // if no error, update the post and...
        post.title = title;
        post.text  = text;
        post.url   = url;

        // save the post
        post.save(function (err) {
          if (err){ res.send(err);}
          // on successful update, respond with post object
          res.status(201).json(post);
        })
    });
  });


/* GET single post */

/* PUT update a post */

/* DELETE delete a post */



// /* GET single post. */
// router.get('/:id', function(req, res, next) {

//   // Query db for all Posts
//   Posts.findById({id: req.params.id}, function (err, post) {

//     // If there's an error, log it and return to user
//     if (err) {

//         // Nice log message on your end, so that you can see what happened
//         console.log('Couldn\'t get all posts because of ' + err);

//         // send the error
//         res.status(500).json({
//             'message': 'Internal server error.'
//         });
//     }
//     if(!post) { return res.send(404); }

//     // send posts as JSON object
//     res.status(201).json(post);
//   });

// });


// // Get a single thing
// exports.show = function(req, res) {
//   Thing.findById(req.params.id, function (err, thing) {
//     if(err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     return res.json(thing);
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