'use strict';

/**
 * @ngdoc function
 * @name angularGithubClientApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the angularGithubClientApp
 */
angular.module('angularGithubClientApp')
  .controller('HeaderCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

  });
