'use strict';

describe('Service: GithubRepositories', function () {

  // load the service's module
  beforeEach(module('angularGithubClientApp'));

  // instantiate service
  var GithubRepositories;
  beforeEach(inject(function (_GithubRepositories_) {
    GithubRepositories = _GithubRepositories_;
  }));

  it('should do something', function () {
    expect(!!GithubRepositories).toBe(true);
  });

});
