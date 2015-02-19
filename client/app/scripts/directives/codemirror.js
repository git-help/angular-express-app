'use strict';

/**
 * @ngdoc directive
 * @name githelpApp.directive:codemirror
 * @description
 * # codemirror
 */
angular.module('githelpApp')
  .directive('codemirror', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the codemirror directive');
      }
    };
  });
