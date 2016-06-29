'use strict';

/**
 * @ngdoc function
 * @name transaldisFlexBoxApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the transaldisFlexBoxApp
 */
angular.module('transaldisFlexBoxApp')
  .controller('HomeCtrl', function($scope,actualite) {
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

    actualite.loadActualite()
      .success(function(data) {
        $scope.actus = data.actualite;
      });

      $scope.map = {
        center: {
          latitude: 48.9746142,
          longitude: 2.6632728
        },
        zoom: 9,
        options: {
          styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e9e9e9"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 29
            }, {
              "weight": 0.2
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 18
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 21
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dedede"
            }, {
              "lightness": 21
            }]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [{
              "saturation": 36
            }, {
              "color": "#333333"
            }, {
              "lightness": 40
            }]
          }, {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f2f2f2"
            }, {
              "lightness": 19
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 17
            }, {
              "weight": 1.2
            }]
          }]
        },
        markerHome: {
          id: Date.now(),
          coords: {
            latitude: 48.9746142,
            longitude: 2.6632728
          },
          options: {
            icon: {
              url: 'images/ico/ico_home.svg'
            }
          }
        }
      };

  });
