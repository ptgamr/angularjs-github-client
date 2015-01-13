'use strict';

/**
 * @ngdoc function
 * @name angularGithubClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularGithubClientApp
 */
angular.module('angularGithubClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
