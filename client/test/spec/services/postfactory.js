'use strict';

describe('Service: postFactory', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var postFactory;
  beforeEach(inject(function (_postFactory_) {
    postFactory = _postFactory_;
  }));

  it('should do something', function () {
    expect(!!postFactory).toBe(true);
  });

});
