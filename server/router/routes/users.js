// include Express
var express = require('express');

// Initialize the Router
var router = express.Router();

// require moment, _.js, color for error logging
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Expose the module
// export the router for usage in our server/router/index.js
module.exports = router;
