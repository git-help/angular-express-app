'use strict';

/**
 * @ngdoc service
 * @name clientApp.postFactory
 * @description
 * # postFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('postFactory', ['$http', function ($http) {
    // Service logic
    var urlBase = '/posts';
    var postFactory= {};

    // Public API here
    // CREATE
    postFactory.createPost = function (post) {
      console.log("it hit the factory...");
      return $http.post(urlBase, post);
    };
    //READ
    postFactory.getPosts = function () {
      return $http.get(urlBase);
    };
    postFactory.getPost = function (id) {
      return $http.get(urlBase + '/' + id);
    };
    //UPDATE
    postFactory.updatePost = function (id, data) {
      return $http.put(urlBase + '/' + id, data);
    };
    //DELETE
    postFactory.deletePost = function (id) {
      return $http.delete(urlBase + '/' + id);
    };

    // return Factory to caller
    return postFactory;
}]);