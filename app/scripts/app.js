'use strict';

/**
 * @ngdoc overview
 * @name transaldisFlexBoxApp
 * @description
 * # transaldisFlexBoxApp
 *
 * Main module of the application.
 */
angular
  .module('transaldisFlexBoxApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
