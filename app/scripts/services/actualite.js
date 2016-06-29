'use strict';

/**
 * @ngdoc service
 * @name transaldisFlexBoxApp.actualite
 * @description
 * # actualite
 * Service in the transaldisFlexBoxApp.
 */
angular.module('transaldisFlexBoxApp')
  .service('actualite', function ($http) {
    var url = 'http://51.254.101.196/transaldis/api/api.php';
    this.loadActualite = function (idsoc) {
      return $http.get(url+'/actualite?transform=1');
    };
  });
