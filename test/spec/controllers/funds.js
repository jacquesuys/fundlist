'use strict';

describe('Controller: FundsCtrl', function () {

  // load the controller's module
  beforeEach(module('fundlistApp'));

  var FundsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FundsCtrl = $controller('FundsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FundsCtrl.awesomeThings.length).toBe(3);
  });
});
