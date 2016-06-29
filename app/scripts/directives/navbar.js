'use strict';

/**
 * @ngdoc directive
 * @name transaldisFlexBoxApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('transaldisFlexBoxApp')
  .directive('navbar', function($window,$mdSidenav) {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      link: function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset == 0) {
               var e = element[0].querySelector('.navbar');
               angular.element(e).removeClass("navbarTiny");
             } else {
                var e = element[0].querySelector('.navbar');
                 angular.element(e).addClass("navbarTiny");
             }
            scope.$apply();
        });
        scope.toggleSidebar = function () {
          $mdSidenav('right').toggle();
        };
      }
    };
  });
