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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/search/:user/:repo', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/issue/:user/:repo/:number', {
        templateUrl: 'views/issue.html',
        controller: 'IssueCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
