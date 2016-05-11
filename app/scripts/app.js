'use strict';

/**
 * @ngdoc overview
 * @name fundlistApp
 * @description
 * # fundlistApp
 *
 * Main module of the application.
 */
angular
  .module('fundlistApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/funds.html',
        controller: 'FundsCtrl',
        controllerAs: 'funds'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
