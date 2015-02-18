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
    postFactory.updatePost = function (id, post) {
      console.log(post._id);
      var post_id = post._id;
      return $http.put(urlBase + '/' + post._id);
    };
    //DELETE
    postFactory.deletePost = function (id) {
      return $http.delete(urlBase + '/' + id);
    };

    // return Factory to caller
    return postFactory;
}]);

// Using an AngularJS Factory to Interact with a RESTful Service - http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service

// angular.module('customersApp')
//     .factory('dataFactory', ['$http', function($http) {

//     var urlBase = '/api/customers';
//     var dataFactory = {};

//     dataFactory.getCustomers = function () {
//         return $http.get(urlBase);
//     };

//     dataFactory.getCustomer = function (id) {
//         return $http.get(urlBase + '/' + id);
//     };

//     dataFactory.insertCustomer = function (cust) {
//         return $http.post(urlBase, cust);
//     };

//     dataFactory.updateCustomer = function (cust) {
//         return $http.put(urlBase + '/' + cust.ID, cust)
//     };

//     dataFactory.deleteCustomer = function (id) {
//         return $http.delete(urlBase + '/' + id);
//     };

//     dataFactory.getOrders = function (id) {
//         return $http.get(urlBase + '/' + id + '/orders');
//     };

//     return dataFactory;
// }]);