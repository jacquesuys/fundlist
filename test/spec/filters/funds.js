'use strict';

describe('Filter: funds', function () {

  // load the filter's module
  beforeEach(module('fundlistApp'));

  // initialize a new instance of the filter before each test
  var funds;
  beforeEach(inject(function ($filter) {
    funds = $filter('funds');
  }));

  it('should return the input prefixed with "funds filter:"', function () {
    var text = 'angularjs';
    expect(funds(text)).toBe('funds filter: ' + text);
  });

});
