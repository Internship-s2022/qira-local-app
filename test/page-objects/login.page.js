class LoginPage {
  // Getters
    get loginButton () {
      return $('#login-button');
    }
    get inputEmail () {
      return $('#login-email');
    }
    get inputPassword () {
      return $('#login-password');
    }
    get btnSubmit () {
      return $('#login-submit');
    }
    get crossModal () {
      return $('#cross-modal');
    }

  // Methods
    async login (email, password) {
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
      await this.btnSubmit.click();
    }

    async openBrowser () {
      browser.url('https://test.qira-local.server.radiumrocket.com/');
    }
}

export default new LoginPage();
