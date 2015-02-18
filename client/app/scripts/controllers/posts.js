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
        .error(function (data, status, headers, config) {
            $scope.status = 'Unable to load post data: ' + error.message;
        });
    };

    //edit a post, when triggered, the edit form will show
    $scope.editPost = function () {
      // console.log(this.editing);
      this.editing = true;
    };
    // //update a post
    $scope.updatePost = function (post) {
      var post = this.post;
      var that = this;
      postFactory.updatePost(post._id , { 
                                        title: post.title,
                                        text: post.text,
                                        url: post.url })
      .error(function (data, status, headers, config) {
        $scope.formError = true;
        $scope.status = 'Unable to update post: ' + data;
      })
      .success(function (data) {
        $scope.status = 'Updated Post! Refreshing post list.';
        that.editing = false;
      });
      
    };
    //update a post w/o postFactory method.
    // $scope.updatePost = function (post) {
    //   var post = this.post;
    //   console.log(this.post._id);
    //   console.log(this.post.title);
    //   var that = this;
    //   $http.put('/posts/'+ post._id , { 
    //                                     title: this.post.title,
    //                                     text: this.post.text,
    //                                     url: this.post.url })
    //        .error(function () {
    //          $scope.formError = true;
    //        })
    //        .success(function (data) {
    //          that.editing = false;
    //        })
    //        ;
    // };

    $scope.createPost = function () {
      var post = $scope.newPost;
      console.log(post);
      postFactory.createPost(post)
        .success(function () {
          $scope.status = 'created Post! Refreshing Post list.';
          $scope.posts.push(post);
          $scope.newPost = {};
        }).
        error(function(data, status, headers, config) {
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
      .error(function (data, status, headers, config) {
          $scope.status = 'Unable to delete Post: ' + error.message;
      });
    };

  }]);
