'use strict';

/**
 * @ngdoc function
 * @name transaldisFlexBoxApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the transaldisFlexBoxApp
 */
angular.module('transaldisFlexBoxApp')
  .controller('HomeCtrl', function($scope) {
    $scope.resources = [
      'video/10149872.webm',
      '*.mp4'
    ];
    $scope.poster = 'images/backgr.jpg';
    $scope.fullScreen = true;
    $scope.muted = true;
    $scope.zIndex = '1';
    $scope.playInfo = {};
    $scope.pausePlay = true;
  });
