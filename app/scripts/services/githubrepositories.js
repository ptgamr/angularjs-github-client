'use strict';

/**
 * @ngdoc service
 * @name angularGithubClientApp.GithubRepositories
 * @description
 * # GithubRepositories
 * Service in the angularGithubClientApp.
 */
angular.module('angularGithubClientApp')
  .factory('GithubRepositories', function ($resource) {
    return $resource("https://api.github.com/users/:username/repos", {
      'callback': 'JSON_CALLBACK',
      'per_page': 20,
      'page': 1
    }, {
      get: {
        method: 'JSONP'
      }
    });
  });
