'use strict';

/**
 * @ngdoc function
 * @name angularGithubClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGithubClientApp
 */
angular.module('angularGithubClientApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.searchAction = function() {
      var user = $scope.user || 'yeoman',
          repo = $scope.repo || 'generator-angular';
      
      $location.path(['', 'search', user, repo, ''].join('/'));
    };

  });
