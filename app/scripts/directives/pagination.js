'use strict';

/**
 * @ngdoc directive
 * @name angularGithubClientApp.directive:pagination
 * @description
 * # pagination
 */
angular.module('angularGithubClientApp')
  .directive('pagination', function () {
    return {
      templateUrl: 'scripts/directives/pagination.tpl.html',
      restrict: 'E',
      scope: {
        totalPages: '=',
        currentPage: '=',
        changePage: '&'
      },
      controller: function($scope){

        /**
         * 
         * @param  {[type]} totalPages  [description]
         * @param  {[type]} currentPage [description]
         * @return {[type]}             [description]
         */
        $scope.makePages = function(current, total) {
          var pages = [];

          if (!total) {
            return pages;
          }

          if (total == 1) {
            pages.push(1);
            return pages;
          }

          if (current > 1) {
            pages.push('Previous');
          }

          pages.push(1);

          if (current > 2) {
            pages.push('...');
            if (current == total && total > 3) {
              pages.push(current - 2);
            }
            pages.push(current - 1);
          }

          if (current != 1 && current != total) {
            pages.push(current);
          }

          if (current < total - 1) {
            pages.push(current + 1);

            if (current == 1 && total > 3) {
              pages.push(current + 2);
            }

            pages.push('...');
          }

          pages.push(total);

          if (current < total) {
            pages.push('Next');
          }

          $scope.pages = pages;
        }

        $scope.gotoPage = function(p) {
          if (p === 'Previous') {
            $scope.changePage($scope.currentPage - 1);   
          }

          if (p === 'Next') {
            $scope.changePage($scope.currentPage + 1);   
          }

          $scope.changePage()(p);
        }
      },
      link: function postLink(scope, element, attrs) {

        scope.$watch('totalPages', function() {
          scope.makePages(scope.currentPage, scope.totalPages);
        });

        scope.$watch('currentPage', function() {
          scope.makePages(scope.currentPage, scope.totalPages);
        });

      }
    };
  });
