'use strict';

describe('Service: actualite', function () {

  // load the service's module
  beforeEach(module('transaldisFlexBoxApp'));

  // instantiate service
  var actualite;
  beforeEach(inject(function (_actualite_) {
    actualite = _actualite_;
  }));

  it('should do something', function () {
    expect(!!actualite).toBe(true);
  });

});
