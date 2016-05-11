'use strict';

describe('Service: funds', function () {

  // load the service's module
  beforeEach(module('fundlistApp'));

  // instantiate service
  var funds;
  beforeEach(inject(function (_funds_) {
    funds = _funds_;
  }));

  it('should do something', function () {
    expect(!!funds).toBe(true);
  });

});
