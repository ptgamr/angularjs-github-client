'use strict';

/**
 * @ngdoc function
 * @name angularGithubClientApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the angularGithubClientApp
 */
angular.module('angularGithubClientApp')
  .controller('SearchCtrl', function ($scope, $routeParams, GithubIssues) {

    function getURLParameter(url, name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url)||[,""])[1].replace(/\+/g, '%20'))||null;
    }

    //get the info from URL
    $scope.user = $routeParams.user;
    $scope.repo = $routeParams.repo;

    //define scope variables
    $scope.avlPages = [10, 20, 30, 40, 50, 100];
    $scope.perPage = 30;
    $scope.currentPage = 1;


    //when user change the perPage options
    $scope.changePerPage = function(p) {
      $scope.perPage = p;
      $scope.currentPage = 1;

      $scope.fetch();

    };

    //when the user change the page
    $scope.changePage = function(p) {
      $scope.currentPage = p;
      $scope.fetch();
    };

    $scope.fetch = function() {
      
      $scope.loading = true;

      GithubIssues.get(
        {owner: $scope.user, repo: $scope.repo, per_page: $scope.perPage, page: $scope.currentPage},
        function(res) {
          
          $scope.loading = false;

          var links = res.meta.Link,
              lastLink, prevLink, pageCount;

          if (res.data.message) {
            $scope.message = res.data.message;
            return;
          }

          $scope.message = '';

          //get the last & prev link to calculate pageCount
          for(var i = 0 ; i < links.length; i++) {
            var link = links[i];
            if(link[1].rel === 'last') {
              lastLink = link[0];
            } else if (link[1].rel === 'prev') {
              prevLink = link[0];
            }
          }

          //calculate pageCount
          if (lastLink)    
            pageCount = parseInt(getURLParameter(lastLink, 'page'));
          else
            pageCount = parseInt(getURLParameter(prevLink, 'page')) + 1;

          $scope.issues = res.data;
          $scope.totalPages = pageCount;
        }
      );
    }

    $scope.fetch();

  });
