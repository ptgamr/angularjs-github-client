'use strict';

/**
 * @ngdoc service
 * @name angularGithubClientApp.GithubIssues
 * @description
 * # GithubIssues
 * Service in the angularGithubClientApp.
 */
angular.module('angularGithubClientApp')
  .factory('GithubIssues', function ($resource) {

    return $resource("https://api.github.com/repos/:owner/:repo/issues/:number/:comments", {
        'callback': 'JSON_CALLBACK',
        'state': 'all',
        'per_page': 20,
        'page': 1
      }, {
        get: {
          method: 'JSONP'
        },
        getOpen: {
          params: {
            state: 'open'
          },
          method: 'JSONP'
        },
        getClosed: {
          params: {
            state: 'closed'
          },
          method: 'JSONP'
        }
      });

  });
