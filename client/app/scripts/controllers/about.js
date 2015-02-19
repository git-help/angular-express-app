'use strict';

/**
 * @ngdoc function
 * @name githelpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githelpApp
 */
angular.module('githelpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
