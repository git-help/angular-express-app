'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PostsCtrl', ['$scope', '$http', 'postFactory', function ($scope, $http, postFactory) {
    
    var posts;
    $scope.posts = posts = {};

    // populate $scope.posts and posts using postFactory
    getPosts();

    function getPosts() {
      postFactory.getPosts()
        .success(function (posts) {
            $scope.posts = posts;
            console.log(posts);
        })
        .error(function (error) {
            $scope.status = 'Unable to load post data: ' + error.message;
        });
    };

    //edit a post
    $scope.edit = function () {
      this.editing = true;
    };
    //update a post
    $scope.updatePost = function (id) {
      console.log(this.post._id);
      var post = this.post;
      var that = this;
      for (var i = 0; i < $scope.posts.length; i++) {
        var currPost = $scope.posts[i];

        if (currPost._id === id) {
          post = currpost;
          break;
        }
      };

      postFactory.updatePost(post)
        .success(function () {
          $scope.status = 'Updated Post! Refreshing post list.';
          that.editing = false;

        })
        .error(function (error) {
          $scope.status = 'Unable to update post: ' + error.message;
        });
    };

    $scope.createPost = function () {

      var post = $scope.newPost;
      console.log(post);
      postFactory.createPost(post)
        .success(function () {
          $scope.status = 'created Post! Refreshing Post list.';
          $scope.posts.push(post);
          $scope.newPost = {};
        }).
        error(function(error) {
          $scope.formError = true;
          $scope.status = 'Unable to create Post: ' + error.message;
        });
    };

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
        .error(function (error) {
            $scope.status = 'Unable to delete Post: ' + error.message;
        });
    };

  }]);
