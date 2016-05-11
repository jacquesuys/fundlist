'use strict';

/**
 * @ngdoc service
 * @name fundlistApp.funds
 * @description
 * # funds
 * Service in the fundlistApp.
 */
angular.module('fundlistApp')
  .service('fundsService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $http.get('../../data/funds.json');
  });
