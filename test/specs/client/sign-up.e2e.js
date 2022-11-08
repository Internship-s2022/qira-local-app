import LoginPage from '../../page-objects/login.page';
import Header from '../../page-objects/header.page';
import SignUpPage from '../../page-objects/sign-up.page';

describe('Sign up page testing', () => {
  beforeEach('Open browser', async() => {
    await LoginPage.openBrowser();
    await Header.loginButton.click();
    await LoginPage.signUpBtn.click();
  });
  it('Check titles', async() => {
    expect(SignUpPage.modalContainer).toHaveTextContaining('Crear cuenta');
  });
  it('Try to sign up with no valid data', async () => {
    await SignUpPage.signUpBtn.click();
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('Campo requerido.');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Campo requerido.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Campo requerido.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Campo requerido.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('Campo requerido.');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('Campo requerido.');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Campo requerido.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Campo requerido.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Campo requerido.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Campo requerido.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Campo requerido.');
    await browser.pause(2000);
  });
  it('Try to sign up filling only email', async () => {
    await SignUpPage.signUp('arianamaldoando@gmail.com');
    await expect(SignUpPage.emailError).not.toBeDisplayed();
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Campo requerido.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Campo requerido.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Campo requerido.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('Campo requerido.');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('Campo requerido.');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Campo requerido.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Campo requerido.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Campo requerido.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Campo requerido.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Campo requerido.');
  });
});

// ¿El mensaje de error se despliega siempre que se hace submit?