'use strict';

/**
 * @ngdoc function
 * @name angularGithubClientApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the angularGithubClientApp
 */
angular.module('angularGithubClientApp')
  .controller('IssueCtrl', function ($scope, $location, $routeParams, GithubIssues) {
    
    $scope.apiMessage = '';

    //get the info from URL
    $scope.user = $routeParams.user;
    $scope.repo = $routeParams.repo;
    $scope.number = $routeParams.number;
    $scope.loading = true;

    //load issue
    GithubIssues.get(
      {owner: $scope.user, repo: $scope.repo, number: $scope.number},

      function(res) {
        
        $scope.loading = false;

        if (res.data.message) {
          $scope.apiMessage = res.data.message;
          return;
        }

        $scope.issue = res.data;
      }
    );

    //load comments
    GithubIssues.get(
      {owner: $scope.user, repo: $scope.repo, number: $scope.number, comments: 'comments'},
      function(res){

        if (res.data.message) {
          $scope.apiMessage = res.data.message;
          return;
        }

        $scope.comments = res.data;

      });

    $scope.backToList = function() {
      $location.path(['', 'search', $scope.user, $scope.repo, ''].join('/'));
    };
  });
