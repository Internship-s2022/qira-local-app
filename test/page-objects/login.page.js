class LoginPage {
  // Getters
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
    get formContainer () {
      return $('[data-testid=form-container]');
    }
    get infoModal () {
      return $('[data-testid=info-modal]')
    }
    get infoModalBtn () {
      return $('[data-testid=info-modal-btn]')
    }
    get infoModalMessage () {
      return $('[data-testid="info-message"]')
    }
    get signUpBtn () {
      return $('[data-testid=sign-up-btn]');
    }
  // Methods
    async login (email, password) {
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
      await this.btnSubmit.click();
    }

    async clearForm () {
      await this.inputEmail.clearValue();
      await this.inputPassword.clearValue();
    }

    async openBrowser () {
      await browser.url('http://localhost:3000');
    }
  }
export default new LoginPage();
