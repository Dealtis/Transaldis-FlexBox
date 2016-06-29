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
    'ngRoute',
    'ngMaterial',
    'ngVidBg',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
