'use strict';

/**
 * @ngdoc function
 * @name githelpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githelpApp
 */
angular.module('githelpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.greeting = 'hello angelo';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
