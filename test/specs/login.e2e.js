import LoginPage from  '../page-objects/login.page';

describe('Login page testing', () => {
  beforeAll('Open browser', () => {
    LoginPage.openBrowser();
  });
  beforeEach('Refresh the page', () => {
    browser.refresh();
  });

});