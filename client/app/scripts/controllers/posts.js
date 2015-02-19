'use strict';

/**
 * @ngdoc function
 * @name githelpApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the githelpApp
 */
angular.module('githelpApp')
  .controller('PostsCtrl', ['$scope', '$http', 'postFactory', function ($scope, $http, postFactory) {
    // instantiate local variables for posts then...
    var posts;
    // add to controllers $scope
    $scope.posts = posts = [];

    // populate $scope.posts and posts using postFactory
    getPosts();

    // request all posts from our Express API
    function getPosts() {
      postFactory.getPosts()
        .success(function (posts) {
          $scope.posts = posts;
          console.log(posts);
        })
        .error(function (data, status, headers, config) {
            $scope.status = 'Unable to load post data: ' + error.message;
        });
    };

    //display the createPostForm
    $scope.showCreatePostForm = function () {
      // allow button to toggle on/off
      this.createPostForm = this.createPostForm === true ? false: true;
    };

    //edit a post, when triggered, the edit form will show
    $scope.editPost = function () {
      // console.log(this.editing);
      this.editing = true;
    };

    /***********************/
     //                    //
     // CRUD               //
     //                    //
    /***********************/

    // handle createPost form
    $scope.createPost = function () {
      var post = $scope.newPost;
      postFactory.createPost(post)
        .success(function (data) {
          $scope.status = 'created Post! Refreshing Post list.';
          // post._id is returned from API
          // to allow on-page editing, we need this _id
          // to 'hook' onto.
          // therefore, we add the key/value to the post
          // before sending to the $scope
          post._id = data;
          $scope.posts.push(post);
          $scope.newPost = {};
          $scope.createPostForm = false;
        }).
        error(function(data, status, headers, config) {
          $scope.formError = true;
          $scope.status = 'Unable to create Post: ' + error.message;
        });
    };

    //update a post
    $scope.updatePost = function (post) {
      var post = this.post;
      var that = this;
      postFactory.updatePost(post._id , { 
                                        title   : post.title,
                                        text    : post.text,
                                        url     : post.url,
                                        snippet : post.snippet })
      .error(function (data, status, headers, config) {
        $scope.formError = true;
        $scope.status = 'Unable to update post: ' + data;
      })
      .success(function (data) {
        $scope.status = 'Updated Post! Refreshing post list.';
        that.editing = false;
        // hack to refresh page after update.
        // allows codemirror to display correct values.
        // Will need to refactor later.
        location.reload();
      });
      
    };

    // handle delete() for this.post
    $scope.deletePost = function (id) {
      postFactory.deletePost(this.post._id)
      .success(function () {
        $scope.status = 'Deleted Post! Refreshing Post list.';
        for (var i = 0; i < $scope.posts.length; i++) {
          var post = $scope.posts[i];
          if (post.id === id) {
            $scope.posts.splice(i, 1);
            break;
          }
        }
      })
      .error(function (data, status, headers, config) {
          $scope.status = 'Unable to delete Post: ' + error.message;
      });
    };


    /***********************/
     //                    //
     // CodeMirror         //
     //                    //
    /***********************/

    // setup codemirror textareas on-load
    $scope.codemirrorLoaded = function(_editor, post){
      // Editor part
      var _doc = _editor.getDoc();
      _editor.focus();
      // Options
      _editor.setOption('theme', 'vibrant-ink');
      _editor.setOption('mode', 'javascript');
      _editor.setOption('lineNumbers', 'true');
      _editor.setOption('lineWrapping', 'true');

      // Events
      // kept for reference and extendability later on
      // _editor.on("beforeChange", function(){ console.log('beforeChange'); });
      // // write new value to database?
      // _editor.on("change", function(){ console.log('onChange');});
    };

  }]);
