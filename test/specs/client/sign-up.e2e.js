import LoginPage from '../../page-objects/login.page';
import Header from '../../page-objects/header.page';
import SignUpPage from '../../page-objects/sign-up.page';

describe('Sign up page testing', () => {
  const values = {
    email: 'qira@local.com',
    password: 'test1234',
    repeatPassword: 'test1234',
    codeArea: '341',
    phoneNumber: '3693000',
    businessName: 'Radium Rocket',
    ivaCondition: true,
    cuit: '27407809519',
    street: 'Cordoba 3701',
    zipCode: '2000',
    city: 'Rosario',
    province: 'Santa Fe'
  };
  beforeEach('Open browser', async() => {
    await LoginPage.openBrowser();
    await Header.loginButton.click();
    await LoginPage.signUpBtn.click();
  });
  it('Check titles', async() => {
    expect(SignUpPage.modalContainer).toHaveTextContaining('Crear cuenta');
  });
  it('Try to sign up without enter data', async () => {
    await SignUpPage.signUp({ });
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
  });
  it('Try to sign up filling only email', async () => {
    await SignUpPage.signUp({ email: 'ariana@rr.com' });
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('');
  });
  it('Try to sign up filling only password', async () => {
    await SignUpPage.signUp({ password: 'test1234' });
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling only repeat password', async () => {
    await SignUpPage.signUp({ repeatPassword: 'test12340' });
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling only code area', async () => {
    await SignUpPage.signUp({ codeArea: '341' });
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('');
  });
  it('Try to sign up filling only phone number', async () => {
    await SignUpPage.signUp({ phoneNumber: '3693000' });
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('');
  });
  it('Try to sign up filling only business name', async () => {
    await SignUpPage.signUp({ businessName: 'Radium Rocket' });
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('');
  });
  it('Try to sign up filling only IVA condition', async () => {
    await SignUpPage.signUp({ ivaCondition: true });
    await expect(SignUpPage.ivaConditionError).toBeDisplayed();
    await expect(SignUpPage.ivaConditionError).toHaveText('');
  });
  it('Try to sign up filling only CUIT', async () => {
    await SignUpPage.signUp({ cuit: '27407809519' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('');
  });
  it('Try to sign up filling only street', async () => {
    await SignUpPage.signUp({ street: 'Cordoba 3701' });
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('');
  });
  it('Try to sign up filling only zip code', async () => {
    await SignUpPage.signUp({ zipCode: '2000' });
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('');
  });
  it('Try to sign up filling only city', async () => {
    await SignUpPage.signUp({ city: 'Rosario' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('');
  });
  it('Try to sign up filling only province', async () => {
    await SignUpPage.signUp({ province: 'Santa Fe'});
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('');
  });
  it('Try to sign up filling all inputs with valid data but email with invalid format', async () => {
    await SignUpPage.signUp({ ...values, email: 'ariana.com'});
    await expect(SignUpPage.emailError).toBeDisplayed();
    await expect(SignUpPage.emailError).toHaveText('Debe tener formato válido de email.');
  });
  it('Try to sign up filling all inputs with valid data but pw with less than 8 characters', async () => {
    await SignUpPage.signUp({ ...values, password: 'test123' });
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener al menos 8 characters.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling all inputs with valid data but pw with only letters', async () => {
    await SignUpPage.signUp({ ...values, password: 'testingg' });
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling all inputs with valid data but pw with only numbers', async () => {
    await SignUpPage.signUp({ ...values, password: '12345678' });
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling all inputs with valid data but pw with letters and symbols', async () => {
    await SignUpPage.signUp({ ...values, password: 'test####' });
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling all inputs with valid data but pw with numbers and symbols', async () => {
    await SignUpPage.signUp({ ...values, password: '1234####' });
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling all inputs with valid data but pw with only symbols', async () => {
    await SignUpPage.signUp({ ...values, password: '????####' });
    await expect(SignUpPage.passwordError).toBeDisplayed();
    await expect(SignUpPage.passwordError).toHaveText('Debe contener letras y números.');
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling all inputs with valid data but repeat pw with a different but valid pw', async () => {
    await SignUpPage.signUp({ ...values, repeatPassword: 'test2345' });
    await expect(SignUpPage.repeatPwError).toBeDisplayed();
    await expect(SignUpPage.repeatPwError).toHaveText('Las contraseñas no coinciden.');
  });
  it('Try to sign up filling all inputs with valid data but code area with less than 2 characters', async () => {
    await SignUpPage.signUp({ ...values, codeAre: '1' });
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but code area with more than 4 characters', async () => {
    await SignUpPage.signUp({ ...values, codeArea: '12345' });
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but code area with letters', async () => {
    await SignUpPage.signUp({ ...values, codeArea: 'code' });
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but code area with symbols', async () => {
    await SignUpPage.signUp({ ...values, codeArea: '####' });
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but code area with numbers and letters', async () => {
    await SignUpPage.signUp({ ...values, codeArea: '12as' });
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but code area with numbers and letters', async () => {
    await SignUpPage.signUp({ ...values, codeArea: '12##' });
    await expect(SignUpPage.codeAreaError).toBeDisplayed();
    await expect(SignUpPage.codeAreaError).toHaveText('Debe contener 2-4 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but phone number with less than 6 characters', async () => {
    await SignUpPage.signUp({ ...values, phoneNumber: '36930' });
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but phone number with more than 7 characters', async () => {
    await SignUpPage.signUp({ ...values, phoneNumber: '36930000' });
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but phone number with letters', async () => {
    await SignUpPage.signUp({ ...values, phoneNumber: 'telefono' });
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but phone number with symbols', async () => {
    await SignUpPage.signUp({ ...values, phoneNumber: '###???' });
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but phone number with letters and symbols', async () => {
    await SignUpPage.signUp({ ...values, phoneNumber: 'tel???' });
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but phone number with numbers and symbols', async () => {
    await SignUpPage.signUp({ ...values, phoneNumber: '123???' });
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but phone number with numbers and letters', async () => {
    await SignUpPage.signUp({ ...values, phoneNumber: '123tel'});
    await expect(SignUpPage.phoneNumberError).toBeDisplayed();
    await expect(SignUpPage.phoneNumberError).toHaveText('Debe contener 6-7 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but business name with less than 3 characters', async () => {
    await SignUpPage.signUp({ ...values, businessName: 'RA' });
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('Debe contener al menos 3 caracteres.');
  });
  it('Try to sign up filling all inputs with valid data but business name with more than than 50 characters', async () => {
    await SignUpPage.signUp({ ...values, businessName: 'Radium Rocket Radium Rocket Radium Rocket Radium Ro' });
    await expect(SignUpPage.businessNameError).toBeDisplayed();
    await expect(SignUpPage.businessNameError).toHaveText('No debe contener mas de 50 caracteres.');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with less than 11 characters', async () => {
    await SignUpPage.signUp({ ...values, cuit: '1' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with more than 11 characters', async () => {
    await SignUpPage.signUp({ ...values, cuit: '123456789010' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with letters', async () => {
    await SignUpPage.signUp({ ...values, cuit: 'invalidcuit' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with symbols', async () => {
    await SignUpPage.signUp({ ...values, cuit: '######?????' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with letters and symbols', async () => {
    await SignUpPage.signUp({ ...values, cuit: 'invalid(=)?' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with numbers and symbols', async () => {
    await SignUpPage.signUp({ ...values, cuit: '40780951???' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but CUIT with numbers and letters', async () => {
    await SignUpPage.signUp({ ...values, cuit: 'invalid1234' });
    await expect(SignUpPage.cuitError).toBeDisplayed();
    await expect(SignUpPage.cuitError).toHaveText('Debe contener solo 11 caracteres numéricos.');
  });
  it('Try to sign up filling all inputs with valid data but street with only letters', async () => {
    await SignUpPage.signUp({ ...values, street: 'Cordoba' });
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
  });
  it('Try to sign up filling all inputs with valid data but street with only numbers', async () => {
    await SignUpPage.signUp({ ...values, street: '1294' });
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
  });
  it('Try to sign up filling all inputs with valid data but street with letters and numbers with no space between', async () => {
    await SignUpPage.signUp({ ...values, street: 'Catamarca1234' });
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
  });
  it('Try to sign up filling all inputs with valid data but street with letters and symbols', async () => {
    await SignUpPage.signUp({ ...values, street: 'Catamarca ###' });
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
  });
  it('Try to sign up filling all inputs with valid data but street with numbers and symbols', async () => {
    await SignUpPage.signUp({ ...values, street: '### 123' });
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
  });
  it('Try to sign up filling all inputs with valid data but street with only symbols', async () => {
    await SignUpPage.signUp({ ...values, street: '##### ???' });
    await expect(SignUpPage.streetError).toBeDisplayed();
    await expect(SignUpPage.streetError).toHaveText('Debe contener letras y números separados por un espacio.');
  });
  it('Try to sign up filling all inputs with valid data but zip code with less than 4 digits', async () => {
    await SignUpPage.signUp({ ...values, zipCode: '200' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Debe contener solo 4 números.');
  });
  it('Try to sign up filling all inputs with valid data but zip code with more than 4 digits', async () => {
    await SignUpPage.signUp({ ...values, zipCode: '20000' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Debe contener solo 4 números.');
  });
  it('Try to sign up filling all inputs with valid data but zip code with letters', async () => {
    await SignUpPage.signUp({ ...values, zipCode: 'eeee' });
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
  });
  it('Try to sign up filling all inputs with valid data but zip code with symbols', async () => {
    await SignUpPage.signUp({ ...values, zipCode: '****' });
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
  });
  it('Try to sign up filling all inputs with valid data but zip code with letters and symbols', async () => {
    await SignUpPage.signUp({ ...values, zipCode: 'zi$*' });
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
  });
  it('Try to sign up filling all inputs with valid data but zip code with numbers and symbols', async () => {
    await SignUpPage.signUp({ ...values, zipCode: '200*' });
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
  });
  it('Try to sign up filling all inputs with valid data but zip code with numbers and letters', async () => {
    await SignUpPage.signUp({ ...values, zipCode: '2ooo' });
    await expect(SignUpPage.zipCodeError).toBeDisplayed();
    await expect(SignUpPage.zipCodeError).toHaveText('Debe contener solo 4 números.');
  });
  it('Try to sign up filling all inputs with valid data but city with less than 3 characters', async () => {
    await SignUpPage.signUp({ ...values, city: 'Ro' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Debe contener al menos 3 caracteres.');
  });
  it('Try to sign up filling all inputs with valid data but city with letters and numbers mixed', async () => {
    await SignUpPage.signUp({ ...values, city: 'R0s4r10' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Sólo ciudades válidas.');
  });
  it('Try to sign up filling all inputs with valid data but city with letters and numbers with no space', async () => {
    await SignUpPage.signUp({ ...values, city: 'Rosario1234' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Sólo ciudades válidas.');
  });
  it('Try to sign up filling all inputs with valid data but city with only numbers', async () => {
    await SignUpPage.signUp({ ...values, city: '123456' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Sólo ciudades válidas.');
  });
  it('Try to sign up filling all inputs with valid data but city with symbols', async () => {
    await SignUpPage.signUp({ ...values, city: '*****' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Puede contener letras y números.');
  });
  it('Try to sign up filling all inputs with valid data but city with letters and symbols', async () => {
    await SignUpPage.signUp({ ...values, city: 'Rosario ***' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Puede contener letras y números.');
  });
  it('Try to sign up filling all inputs with valid data but city with numbers and symbols', async () => {
    await SignUpPage.signUp({ ...values, city: 'Rosario ***' });
    await expect(SignUpPage.cityError).toBeDisplayed();
    await expect(SignUpPage.cityError).toHaveText('Puede contener letras y números.');
  });
  it('Try to sign up filling all inputs with valid data but province with less than 3 characters', async () => {
    await SignUpPage.signUp({ ...values, province: 'Sa' });
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener al menos 3 caracteres.');
  });
  it('Try to sign up filling all inputs with valid data but province with only numbers', async () => {
    await SignUpPage.signUp({ ...values, province: '12456' });
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with only symbols', async () => {
    await SignUpPage.signUp({ ...values, province: '#####' });
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with numbers and symbols', async () => {
    await SignUpPage.signUp({ ...values, province: '123###' });
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with letters and symbols', async () => {
    await SignUpPage.signUp({ ...values, province: 'Province ***' });
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });
  it('Try to sign up filling all inputs with valid data but province with letters and numbers', async () => {
    await SignUpPage.signUp({ ...values, province: 'Ros 123' });
    await expect(SignUpPage.provinceError).toBeDisplayed();
    await expect(SignUpPage.provinceError).toHaveText('Debe contener solo letras.');
  });

  const randomWord = SignUpPage.generateRandomWord(7);
  const randomEmail = `${randomWord}@qira.com`

  it('Sign up successfully', async () => {
    await SignUpPage.signUp({ ...values, email: randomEmail });
    await expect(SignUpPage.infoModal).toBeDisplayed();
    await expect(SignUpPage.infoModal).toHaveTextContaining('Cuenta creada exitosamente.');
    await SignUpPage.infoModalBtn.click();
    await expect(SignUpPage.infoModal).not.toBeDisplayed();
  });
  it('Sign up error - We try to register the same account', async () => {
    await SignUpPage.signUp({ ...values, email:randomEmail });
    await expect(SignUpPage.infoModal).toBeDisplayed();
    await expect(SignUpPage.infoModalMessage).toHaveText('Ha ocurrido un error');
    await SignUpPage.infoModalBtn.click();
    await expect(SignUpPage.infoModal).not.toBeDisplayed();
  });
  it('Login with the created account', async () => {
    await SignUpPage.backLogin.click();
    await LoginPage.login(randomEmail, 'test1234');
    await expect(LoginPage.infoModal).toBeDisplayed();
    await expect(LoginPage.infoModal).toHaveTextContaining('Sesión iniciada exitosamente.');
    await LoginPage.infoModalBtn.click();
  });
});