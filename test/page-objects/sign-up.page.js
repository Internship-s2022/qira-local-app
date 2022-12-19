class SignUpPage {
  //Getters
  get emailInput() {
    return $('[data-testid=email-field] input');
  }
  get emailError() {
    return $('[data-testid=email-field] p');
  }
  get passwordInput() {
    return $('[data-testid=password-field] input');
  }
  get passwordError() {
    return $('[data-testid=password-field] p');
  }
  get repeatPwInput() {
    return $('[data-testid=repeatPassword-field] input');
  }
  get repeatPwError() {
    return $('[data-testid=repeatPassword-field] p');
  }
  get codeAreaInput() {
    return $('[data-testid=codeArea-field] input');
  }
  get codeAreaError() {
    return $('[data-testid=codeArea-field] p');
  }
  get phoneNumberInput() {
    return $('[data-testid=phoneNumber-field] input');
  }
  get phoneNumberError() {
    return $('[data-testid=phoneNumber-field] p');
  }
  get businessNameInput() {
    return $('[data-testid=businessName-field] input');
  }
  get businessNameError() {
    return $('[data-testid=businessName-field] p');
  }
  get ivaConditionInput() {
    return $('[data-testid=ivaCondition-select]');
  }
  get ivaConditionOpt() {
    return $('[data-testid="3-item"]');
  }
  get ivaConditionError() {
    return $('[data-testid=ivaCondition-select] p');
  }
  get cuitInput() {
    return $('[data-testid=cuit-field] input');
  }
  get cuitError() {
    return $('[data-testid=cuit-field] p');
  }
  get streetInput() {
    return $('[data-testid=street-field] input');
  }
  get streetError() {
    return $('[data-testid=street-field] p');
  }
  get zipCodeInput() {
    return $('[data-testid=zipCode-field] input');
  }
  get zipCodeError() {
    return $('[data-testid=zipCode-field] p');
  }
  get cityInput() {
    return $('[data-testid=city-field] input');
  }
  get cityError() {
    return $('[data-testid=city-field] p');
  }
  get provinceInput() {
    return $('[data-testid=province-field] input');
  }
  get provinceError() {
    return $('[data-testid=province-field] p');
  }
  get signUpBtn() {
    return $('[data-testid="signup-btn"]');
  }
  get errorModal() {
    return $('[data-testid=error-modal]');
  }
  get errorModalBtn() {
    return $('[data-testid=error-modal-btn]');
  }
  get modalContainer() {
    return $('[data-testid=modal-container]');
  }
  get crossModal() {
    return $('[data-testid=cross-modal]');
  }
  get backLogin() {
    return $('[data-testid=back-login] p');
  }
  get infoModal() {
    return $('[data-testid=info-modal]');
  }
  get infoModalMessage() {
    return $('[data-testid="info-message"]');
  }
  get infoModalBtn() {
    return $('[data-testid=info-modal-btn]');
  }

  //Methods

  async signUp(values) {
    if (values.email) {
      await this.emailInput.setValue(values.email);
    }
    if (values.password) {
      await this.passwordInput.setValue(values.password);
    }
    if (values.repeatPassword) {
      await this.repeatPwInput.setValue(values.repeatPassword);
    }
    if (values.codeArea) {
      await this.codeAreaInput.setValue(values.codeArea);
    }
    if (values.phoneNumber) {
      await this.phoneNumberInput.setValue(values.phoneNumber);
    }
    if (values.businessName) {
      await this.businessNameInput.setValue(values.businessName);
    }
    if (values.ivaCondition) {
      await this.ivaConditionInput.click();
      await this.ivaConditionOpt.click();
    }
    if (values.cuit) {
      await this.cuitInput.setValue(values.cuit);
    }
    if (values.street) {
      await this.streetInput.setValue(values.street);
    }
    if (values.zipCode) {
      await this.zipCodeInput.setValue(values.zipCode);
    }
    if (values.city) {
      await this.cityInput.setValue(values.city);
    }
    if (values.province) {
      await this.provinceInput.setValue(values.province);
    }
    await this.signUpBtn.click();
  }
}

export default new SignUpPage();
