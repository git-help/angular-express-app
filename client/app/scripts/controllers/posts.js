'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PostsCtrl', ['$scope', '$http', function ($scope, $http) {
    
    var posts;
    $scope.posts = posts = {};

    // GET all posts
    $http.get('/posts')
     .success(function (posts) {
        console.log(posts);
        $scope.posts = posts;
      }
    );

  }]);
