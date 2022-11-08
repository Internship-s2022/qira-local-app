import LoginPage from  '../page-objects/login.page';
import Header from '../page-objects/header.page';

describe('Login page testing', () => {
  beforeAll('Open browser', () => {
    LoginPage.openBrowser();
  });
  beforeEach('Refresh the page', () => {
    Header.loginButton.click();
    browser.refresh();
    LoginPage.loginButton.click();
  });
  it('Try to login with no data should display inputs error messages', async () => {
    await LoginPage.login('', '');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Campo requerido.');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Campo requerido.');
  });
  it('Try to login filling only email with valid data', async () => {
    await LoginPage.login('ariana@qira.com', '');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Campo requerido.');
  });
  it('Try to login filling only password with valid data', async () => {
    await LoginPage.login('', 'test1234');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Campo requerido.');
  });
  it('Try to login with invalid email but valid pw', async () => {
    await LoginPage.login('ariana.com', 'test1234');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Formato de email inválido.');
  });
  it('Try to login with an email too short but valid pw', async () => {
    await LoginPage.login('q@q.c', 'test1234');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Debe contener al menos 7 caracteres.');
  });
  it('Try to login with valid email but pw with less than 8 characters', async () => {
    await LoginPage.login('qira@local.com', 't2');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener al menos 8 caracteres.');
  });
  it('Try to login with valid email but pw with only letters', async () => {
    await LoginPage.login('qira@local.com', 'testingg');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with only numbers', async () => {
    await LoginPage.login('qira@local.com', '12345678');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with only symbols ', async () => {
    await LoginPage.login('qira@local.com', '??##!!??');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with numbers and symbols ', async () => {
    await LoginPage.login('qira@local.com', '1234????');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with letters and symbols ', async () => {
    await LoginPage.login('qira@local.com', 'test????');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with numbers, letters and symbols ', async () => {
    await LoginPage.login('qira@local.com', 'test123?');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid but not registered data and click on the cross.', async () => {
    await LoginPage.login('qira@local.com', 'test1234');
    await expect(LoginPage.errorModal).toBeDisplayed();
    await LoginPage.crossModal.click();
    await expect(LoginPage.errorModal).not.toBeDisplayed();
  });
  it('Try to login with valid data but not registered and click con "ACEPTAR" button.', async () => {
    await LoginPage.login('qira@local.com', 'test1234');
    await expect(LoginPage.errorModal).toBeDisplayed();
    await expect(LoginPage.errorModal).toHaveTextContaining('Ha ocurrido un error', 'Usuario o contraseña incorrecta.');
    await LoginPage.errorModalBtn.click();
    await expect(LoginPage.errorModal).not.toBeDisplayed();
  });
  it('Try to login with valid and regitered data', async () => {
    await LoginPage.login('admin@qira.com', 'test1234');
    await expect(LoginPage.modalContainer).not.toBeDisplayed();
  });
  it('Try to login with no data should display inputs error messages', async () => {
    await LoginPage.login('', '');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Campo requerido.');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Campo requerido.');
  });
  it('Try to login filling only email with valid data', async () => {
    await LoginPage.login('ariana@qira.com', '');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Campo requerido.');
  });
  it('Try to login filling only password with valid data', async () => {
    await LoginPage.login('', 'test1234');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Campo requerido.');
  });
  it('Try to login with invalid email but valid pw', async () => {
    await LoginPage.login('ariana.com', 'test1234');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Formato de email inválido.');
  });
  it('Try to login with an email too short but valid pw', async () => {
    await LoginPage.login('q@q.c', 'test1234');
    await expect(LoginPage.emailError).toBeDisplayed();
    await expect(LoginPage.emailError).toHaveText('Debe contener al menos 7 caracteres.');
  });
  it('Try to login with valid email but pw with less than 8 characters', async () => {
    await LoginPage.login('qira@local.com', 't2');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener al menos 8 caracteres.');
  });
  it('Try to login with valid email but pw with only letters', async () => {
    await LoginPage.login('qira@local.com', 'testingg');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with only numbers', async () => {
    await LoginPage.login('qira@local.com', '12345678');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with only symbols ', async () => {
    await LoginPage.login('qira@local.com', '??##!!??');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with numbers and symbols ', async () => {
    await LoginPage.login('qira@local.com', '1234????');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with letters and symbols ', async () => {
    await LoginPage.login('qira@local.com', 'test????');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid email but pw with numbers, letters and symbols ', async () => {
    await LoginPage.login('qira@local.com', 'test123?');
    await expect(LoginPage.passwordError).toBeDisplayed();
    await expect(LoginPage.passwordError).toHaveText('Debe contener números y letras.');
  });
  it('Try to login with valid but not registered data and click on the cross.', async () => {
    await LoginPage.login('qira@local.com', 'test1234');
    await expect(LoginPage.infoModalMessage).toBeDisplayed();
    await expect(LoginPage.infoModalMessage).toHaveTextContaining('Usuario o contraseña incorrecta.')
    await LoginPage.crossModal.click();
    await expect(LoginPage.infoModalMessage).not.toBeDisplayed();
  });
  it('Try to login with valid data but not registered and click con "ACEPTAR" button.', async () => {
    await LoginPage.login('qira@local.com', 'test1234');
    await expect(LoginPage.infoModalMessage).toBeDisplayed();
    await expect(LoginPage.infoModalMessage).toHaveTextContaining('Usuario o contraseña incorrecta.');
    await LoginPage.infoModalBtn.click();
    await expect(LoginPage.infoModalMessage).not.toBeDisplayed();
  });
  it('Try to login with valid and registered data', async () => {
    await LoginPage.login('admin@qira.com', 'test1234');
    await expect(LoginPage.infoModalMessage).not.toBeDisplayed();
    await expect(LoginPage.infoModalMessage).toBeDisplayed();
    await expect(LoginPage.infoModalMessage).toHaveText('Sesión iniciada exitosamente.');
    await LoginPage.infoModalBtn.click();
  });
});
