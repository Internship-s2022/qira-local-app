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
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
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
  it('Try to sign up filling only password', async () => {
    await SignUpPage.signUp('', 'test1234');
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('Campo requerido.');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
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
  it('Try to sign up filling only repeat password', async () => {
    await SignUpPage.signUp('', '', 'test1234');
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('Campo requerido.');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Campo requerido.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
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
  it('Try to sign up filling only code area', async () => {
    await SignUpPage.signUp('', '', '', '341');
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('Campo requerido.');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Campo requerido.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
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
  it('Try to sign up filling only phone number', async () => {
    await SignUpPage.signUp('', '', '', '', '3693000');
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('Campo requerido.');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Campo requerido.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Campo requerido.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
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
  it('Try to sign up filling only business name', async () => {
    await SignUpPage.signUp('', '', '', '', '', 'Radium Rocket');
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
    await expect(SignUpPage.businessNameError).toHaveText('');
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
  it('Try to sign up filling only IVA condition', async () => {
    await SignUpPage.signUpComplete('', '', '', '', '', '',);
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
    await expect(SignUpPage.ivaConditionError).toHaveText('');
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
  it('Try to sign up filling only CUIT', async () => {
    await SignUpPage.signUp('', '', '', '', '', '', '27407809519');
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
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Campo requerido.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Campo requerido.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Campo requerido.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Campo requerido.');
  });
  it('Try to sign up filling only street', async () => {
    await SignUpPage.signUp('', '', '', '', '', '', '', 'Cordoba 3701');
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
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Campo requerido.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Campo requerido.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Campo requerido.');
  });
  it('Try to sign up filling only zip code', async () => {
    await SignUpPage.signUp('', '', '', '', '', '', '', '', '2000');
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
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Campo requerido.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Campo requerido.');
  });
  it('Try to sign up filling only city', async () => {
    await SignUpPage.signUp('', '', '', '', '', '', '', '', '', 'Rosario');
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
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Campo requerido.');
  });
  it('Try to sign up filling only province', async () => {
    await SignUpPage.signUp('', '', '', '', '', '', '', '', '', '', 'Santa Fe');
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
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but email with invalid format', async () => {
    await SignUpPage.signUpComplete(
      'ariana.com',
      'test1234',
      'test1234',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('Debe tener formato válido de email.');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but pw with less than 8 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test123',
      'test1234',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener al menos 8 characters.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but pw with only letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'testingg',
      'test1234',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but pw with only numbers', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      '12345678',
      'test1234',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but pw with letters and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test####',
      'test1234',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but pw with numbers and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      '1234####',
      'test1234',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but pw with only symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      '????####',
      'test1234',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but repeat pw with a different but valid pw', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test2345',
      '341',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but code area with less than 2 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '1',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but code area with more than 4 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '12345',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but code area with letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      'code',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but code area with symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '####',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but code area with numbers and letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '12as',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but code area with numbers and letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '12##',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but phone number with less than 6 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '36930',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but phone number with more than 7 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '36930000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but phone number with letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      'telefono',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but phone number with symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '###???',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but phone number with letters and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      'tel???',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but phone number with numbers and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '123???',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but phone number with numbers and letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      'tel123',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but business name with less than 3 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'RA',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('Debe contener al menos 3 caracteres.');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });

  // Falta validar que sea alfanuméricos;
  // Como en la dirección no puede tener sólo números;
  // Puede contener sólo letras o letras y números.

  it('Try to sign up filling all inputs with valid data but business name with more than than 50 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket Radium Rocket Radium Rocket Radium Ro',
      '27407809519',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('No debe contener mas de 50 caracteres.');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with less than 11 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '1',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with more than 11 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '123456789010',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      'invalidcuit',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '######?????',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with letters and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      'invalid(=)?',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with numbers and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '40780951???',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with numbers and letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      'invalid1234',
      'Cordoba 3701',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but street with only letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but street with only numbers', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      '1294',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but street with letters and numbers with no space between', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Catamarca1234',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but street with letters and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Catamarca ###',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but street with numbers and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      '### 123',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but street with only symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      '##### ???',
      '2000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but zip code with less than 4 digits', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '200',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Debe contener solo 4 números.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but zip code with more than 4 digits', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '20000',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Debe contener solo 4 números.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but zip code with letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      'eeee',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but zip code with symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '****',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but zip code with letters and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      'zi$*',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but zip code with numbers and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '200*',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but zip code with numbers and letters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2ooo',
      'Rosario',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but city with less than 3 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      'Ro',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Debe contener al menos 3 caracteres.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but city with letters and numbers mixed', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      'R0s4r10',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Sólo ciudades válidas.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but city with letters and numbers with no space', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      'Rosario1234',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Sólo ciudades válidas.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but city with only numbers', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '123456',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Sólo ciudades válidas.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but city with symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '*****',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Puede contener letras y números.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but city with letters and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      'Rosario ***',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Puede contener letras y números.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but city with numbers and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      'Rosario ***',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Puede contener letras y números.');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but province with less than 3 characters', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      'Sa'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener al menos 3 caracteres.');
  });
  it('Try to sign up filling all inputs with valid data but province with only numbers', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      '12456'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with only symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      '#####'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with numbers and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      '123###'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with letters and symbols', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      'Province ***'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with letters and numbers', async () => {
    await SignUpPage.signUpComplete(
      'client@qira.com',
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      'Ros 123'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });

  const randomWord = SignUpPage.generateRandomWord(7);
  const randomEmail = `${randomWord}@qira.com`

  it('Sign up successfully', async () => {
    await SignUpPage.signUpComplete(
      randomEmail,
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      'Santa Fe'
    );
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('');
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Sign up successfully', async () => {
    await SignUpPage.signUpComplete(
      randomEmail,
      'test1234',
      'test1234',
      '11',
      '3693000',
      'Radium Rocket',
      '27407809519',
      'Cordoba 3000',
      '2000',
      '9 de julio',
      'Santa Fe'
    );
    await expect(LoginPage.infoModal).toBeDisplayed();
    await expect(LoginPage.infoModalMessage).toHaveText('Ha ocurrido un error');
    await LoginPage.infoModalBtn.click();
    await expect(LoginPage.infoModal).not.toBeDisplayed();
  });
  it('Login with the created account', async () => {
    await SignUpPage.backLogin.click();
    await LoginPage.login(randomEmail, 'test1234');
    await expect(LoginPage.infoModal).toBeDisplayed();
    await expect(LoginPage.infoModal).toHaveTextContaining('Sesión iniciada exitosamente.');
    await LoginPage.infoModalBtn.click();
  });
});