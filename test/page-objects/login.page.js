class LoginPage {
  // Getters
    get loginButton () {
      return $('[data-testid=login-button]');
    }
    get inputEmail () {
      return $('[data-testid=email-field] input');
    }
    get inputPassword () {
      return $('[data-testid=password-field] input');
    }
    get btnSubmit () {
      return $('[data-testid=login-submit]');
    }
    get crossModal () {
      return $('[data-testid=cross-modal]');
    }
    get emailError () {
      return $('[data-testid=email-field] p');
    }
    get passwordError () {
      return $('[data-testid=password-field] p');
    }
    get errorModal () {
      return $('[data-testid=error-modal]');
    }
    get errorModalBtn () {
      return $('[data-testid=error-modal-btn]');
    }
    get modalContainer () {
      return $('[data-testid=modal-container]')
    }
  // Methods
    async login (email, password) {
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
      await this.btnSubmit.click();
    }

    async openBrowser () {
      browser.url('http://localhost:3000');
    }
}

export default new LoginPage();
