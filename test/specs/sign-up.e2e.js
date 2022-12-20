import LoginPage from '../page-objects/login.page';
import SignUpPage from '../page-objects/sign-up.page';

describe('Sign up page testing', () => {
  beforeAll('Open browser', () => {
    LoginPage.openBrowser();
  });
  beforeEach('Refresh page', () => {
    browser.refresh();
  });
});
