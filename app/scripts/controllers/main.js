'use strict';

/**
 * @ngdoc function
 * @name angularGithubClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGithubClientApp
 */
angular.module('angularGithubClientApp')
  .controller('MainCtrl', function ($scope, $location, GithubRepositories, $timeout) {

    $scope.displaySuggestion = false;
    $scope.suggestionLoading = false;
    $scope.suggestionMessage = '';
    $scope.repo = '';

    $scope.searchAction = function() {
      var user = $scope.user || 'yeoman',
          repo = $scope.repo || 'generator-angular';
      
      $location.path(['', 'search', user, repo, ''].join('/'));
    };

    $scope.showRepo = function(repo) {
      $location.path(['', 'search', $scope.user, repo, ''].join('/'));
    };

    /**
     * Load the suggestion from Github
     * @return {[type]} [description]
     */
    $scope.loadSuggestion = function() {

      if (!$scope.user) return;

      $scope.suggestionDisplay = true;
      $scope.suggestionLoading = true;
      $scope.suggestionMessage = '';

      GithubRepositories.get({
        username: $scope.user
      }, function(res) {
        $scope.suggestionLoading = false;

        if (res.data.message) {
          $scope.suggestionMessage = res.data.message;
          return;
        }

        if (!res.data || !res.data.length) {
          $scope.suggestionMessage = 'No repo found.';
        }

        $scope.suggestions = res.data;
      })
    };

    /**
     * Have to apply the timer, otherwise, we can't click to a suggestion item because it's already hidden
     * @return {[type]} [description]
     */
    $scope.timeoutHideSuggestion = function() {
      $timeout( function(){ $scope.suggestionDisplay = false; }, 100);
    }

    /**
     * Display the suggestion
     * @return {[type]} [description]
     */
    $scope.displaySuggestion = function() {
      if ($scope.user && $scope.suggestions && $scope.suggestions.length) {
        $scope.suggestionDisplay = true;
      }
    }

  });
