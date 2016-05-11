'use strict';

/**
 * @ngdoc function
 * @name fundlistApp.controller:FundsCtrl
 * @description
 * # FundsCtrl
 * Controller of the fundlistApp
 */
angular.module('fundlistApp')
  .controller('FundsCtrl', function ($scope, fundsService) {
    fundsService.then(function(result){
      console.log(result);
      $scope.funds = result;
    });
  });
