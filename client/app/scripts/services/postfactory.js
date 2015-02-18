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
    //READ - All posts
    postFactory.getPosts = function () {
      return $http.get(urlBase);
    };
    //READ - Single post
    postFactory.getPost = function (id) {
      if (id) {
        return $http.get(urlBase + '/' + id);
      } else {
        console.error('No id given', data);
      }
    };
    //UPDATE
    postFactory.updatePost = function (id, data) {
      if (id){
        return $http.put(urlBase + '/' + id, data);
      } else {
        console.error('No id given', data);
      }
    };
    //DELETE
    postFactory.deletePost = function (id) {
      if (id) {
        return $http.delete(urlBase + '/' + id);
      } else {
        console.error('No id given', data);
      }
    };

    // return Factory to caller
    return postFactory;
}]);