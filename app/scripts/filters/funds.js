'use strict';

/**
 * @ngdoc filter
 * @name fundlistApp.filter:funds
 * @function
 * @description
 * # funds
 * Filter in the fundlistApp.
 */
angular.module('fundlistApp')
  .filter('convertUSDate', function () {
    return function (input) {
      var arr = input.slice(0, 10).split('-').reverse();
      var temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
      return arr.join('/');
    };
  })
   .filter('convertDate', function () {
    return function (input) {
      return input.slice(0, 10).split('-').reverse().join('/');
    };
  });;
