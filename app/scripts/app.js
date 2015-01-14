'use strict';

/**
 * @ngdoc overview
 * @name angularGithubClientApp
 * @description
 * # angularGithubClientApp
 *
 * Main module of the application.
 */
angular
  .module('angularGithubClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/search/:user/:repo', {
        templateUrl: 'app/views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/issue/:user/:repo/:number', {
        templateUrl: 'app/views/issue.html',
        controller: 'IssueCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
