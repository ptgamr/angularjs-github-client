'use strict';

describe('Service: GithubIssues', function () {

  // load the service's module
  beforeEach(module('angularGithubClientApp'));

  // instantiate service
  var GithubIssues;
  beforeEach(inject(function (_GithubIssues_) {
    GithubIssues = _GithubIssues_;
  }));

  it('should do something', function () {
    expect(!!GithubIssues).toBe(true);
  });

});
