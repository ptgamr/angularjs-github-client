// spec.js
describe('HOMEPAGE', function() {

  var userInput = element(by.model('user'));
  var repoInput = element(by.model('repo'));
  var goButton = element(by.id('search-btn'));
  var suggestionList = element(by.css('.suggestion-list'));

  beforeEach(function() {
    browser.get('');
  });

  it('should load the home page with hidden suggestion', function() {
    var ele = by.id('search-btn');
    expect(browser.isElementPresent(ele)).toBe(true);
    expect(suggestionList.isDisplayed()).toBe(false);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('angularGithubClient');
  });


  it('should show message when either user name or repo is empty', function() {
    userInput.sendKeys('ptgamr');
    goButton.click();
    var error = element(by.css('.alert-danger'));
    expect(error.isDisplayed()).toBe(true);
  });

  it('should navigate to correct url when there are enough information', function() {
    userInput.sendKeys('ptgamr');
    //there should be a tab, otherwiser, the button is not clickable
    repoInput.sendKeys('google-play-game-service\t');
    goButton.click();
    expect(browser.getCurrentUrl()).toContain('#/search/ptgamr/google-play-game-service');
  });

  it('should show suggestion when usernam input is blur', function() {
    userInput.sendKeys('ptgamr\t');
    expect(suggestionList.isDisplayed()).toBe(true);
  });

});


describe('PAGE NAVIGATION', function() {
  var link;

  beforeEach(function() {
    link = element(by.css('.header ul li:nth-child(2)'));
    link.click();
  });

  it('should navigate to the /about page when clicking', function() {
    expect(browser.getCurrentUrl()).toMatch(/\/about/);
  });

  it('should add the active class when at /about', function() {
    expect(link.getAttribute('class')).toMatch(/active/);
  });
});


describe('SEARCH RESULT PAGE', function() {

  beforeEach(function() {
    browser.get('#/search/ptgamr/cordova-google-play-game');
  });

  it('should load search result page', function() {
    var ele = element(by.css('.page-title'));
    expect(ele.getText()).toEqual('Issues List');
  });

  it('should have ability to choose number of items per page', function() {
    var options = element.all(by.repeater('p in avlPages track by $index'));
    expect(options.count()).toEqual(6);
  });

  it('should be able to select per_page', function() {
    
    var toggler = element(by.id('per-page-toggler'));
    var option = element(by.css('#per-page-options > li:nth-child(1) > a'));

    toggler.click();
    option.click();

    var perPage = element(by.binding('perPage')).getText();

    expect(perPage).toEqual('10');
  });

  it('should display pagination', function() {
    browser.get('#/search/yeoman/angular-generator');
    var pagination = element(by.css('.pagination'));
    expect(pagination.isDisplayed()).toBe(true);
  });

  it('should display Github API message when error', function() {
    browser.get('#/search/sdasdasd/some-thing-that-can-not-be-found');
    var alert = element(by.css('.alert-info'));
    expect(alert.isDisplayed()).toBe(true);
  });

});