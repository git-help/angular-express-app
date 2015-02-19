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
var Post = db.posts;


/******************************************************************/
 //                                                               //
 // ROUTES                                                        //
 //                                                               //
 // Using Rails-like standard naming convention for endpoints.    //
 // GET     /posts              ->  index                         //
 // POST    /posts              ->  create                        //
 // GET     /posts/:id          ->  show                          //
 // PUT     /posts/:id          ->  update                        //
 // DELETE  /posts/:id          ->  destroy                       //
 //                                                               //
/******************************************************************/

// on routes that end in /posts
router.route('/')
  /* GET to read all posts */ 
  // accessed at (/posts)
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
  // accessed at (/posts)
  .post(function (req, res, next) {

    // set req params to local variables
    var title   = req.body.title,
        text    = req.body.text,
        url     = req.body.url,
        snippet = req.body.snippet;

    // create a new instance of the Post model
    var newPost = new Post({
                          'title'  : title,
                          'url'    : url,
                          'text'   : text,
                          'snippet': snippet
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
      // on successful save, respond with id
      // so that we can provide front-end a 'hook'
      // without refreshing the page
      console.log(newPost);
      res.status(201).json(newPost._id);
    });

});



// on routes that end in /posts/:post_id
// first, create a new router.route() for reqs w/:post_id
// remember! in Express 4 /posts is assumed, so we use /:post_id
router.route('/:post_id')
  /* GET posts by id */
  // find the post with this id 
  // accessed at (/posts/:post_id)
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
  // update the post with this id 
  // accessed at (/posts/:post_id)
  .put(function (req, res) {
    // first set req params to local variables
    var title   = req.body.title,
        text    = req.body.text,
        url     = req.body.url,
        snippet = req.body.snippet,
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
        post.text = text;
        post.url = url;
        post.snippet = snippet;

        // save the post
        post.save(function (err) {
          if (err){ res.send(err);}
          // on successful update, respond with post object
          res.status(201).json(post);
        })
    });
  })

  .delete(function (req, res) {
    /* DELETE posts by id */
    // delete the post with this id 
    // accessed at (/posts/:post_id)
    Post.remove({ _id: req.params.post_id }, function (err, post) {
      // If there's an error...
      if (err) {
        // log it and...
        console.log('Couldn\'t get all posts because of ' + err);
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