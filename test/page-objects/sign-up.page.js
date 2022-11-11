class SignUpPage {
//Getters
  get emailInput () {
    return $('[data-testid=email-field] input');
  }
  get emailError () {
    return $('[data-testid=email-field] p');
  }
  get passwordInput () {
    return $('[data-testid=password-field] input');
  }
  get passwordError () {
    return $('[data-testid=password-field] p');
  }
  get repeatPwInput () {
    return $('[data-testid=repeatPassword-field] input');
  }
  get repeatPwError () {
    return $('[data-testid=repeatPassword-field] p');
  }
  get codeAreaInput () {
    return $('[data-testid=codeArea-field] input');
  }
  get codeAreaError () {
    return $('[data-testid=codeArea-field] p');
  }
  get phoneNumberInput () {
    return $('[data-testid=phoneNumber-field] input');
  }
  get phoneNumberError () {
    return $('[data-testid=phoneNumber-field] p');
  }
  get businessNameInput () {
    return $('[data-testid=businessName-field] input');
  }
  get businessNameError () {
    return $('[data-testid=businessName-field] p');
  }
  get ivaConditionInput () {
    return $('[data-testid=ivaCondition-select]');
  }
  get ivaConditionOpt () {
    return $('[data-testid="3-item"]')
  }
  get ivaConditionError () {
    return $('[data-testid=ivaCondition-select] p');
  }
  get cuitInput () {
    return $('[data-testid=cuit-field] input');
  }
  get cuitError () {
    return $('[data-testid=cuit-field] p');
  }
  get streetInput () {
    return $('[data-testid=street-field] input');
  }
  get streetError () {
    return $('[data-testid=street-field] p');
  }
  get zipCodeInput () {
    return $('[data-testid=zipCode-field] input');
  }
  get zipCodeError () {
    return $('[data-testid=zipCode-field] p');
  }
  get cityInput () {
    return $('[data-testid=city-field] input');
  }
  get cityError () {
    return $('[data-testid=city-field] p');
  }
  get provinceInput () {
    return $('[data-testid=province-field] input');
  }
  get provinceError () {
    return $('[data-testid=province-field] p');
  }
  get signUpBtn () {
    return $('[data-testid="signup-btn"]');
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
  get crossModal () {
    return $('[data-testid=cross-modal]');
  }
  get backLogin () {
    return $('[data-testid=back-login] p')
  }

  //Methods

  async signUp(
    email,
    password,
    repeatPassword,
    codeArea,
    phoneNumber,
    businessName,
    cuit,
    street,
    zipCode,
    city,
    province
  ) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.repeatPwInput.setValue(repeatPassword);
    await this.codeAreaInput.setValue(codeArea);
    await this.phoneNumberInput.setValue(phoneNumber);
    await this.businessNameInput.setValue(businessName);
    await this.cuitInput.setValue(cuit);
    await this.streetInput.setValue(street);
    await this.zipCodeInput.setValue(zipCode);
    await this.cityInput.setValue(city);
    await this.provinceInput.setValue(province);
    await this.signUpBtn.click();
  };

  async signUpComplete(
    email,
    password,
    repeatPassword,
    codeArea,
    phoneNumber,
    businessName,
    cuit,
    street,
    zipCode,
    city,
    province
  ) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.repeatPwInput.setValue(repeatPassword);
    await this.codeAreaInput.setValue(codeArea);
    await this.phoneNumberInput.setValue(phoneNumber);
    await this.businessNameInput.setValue(businessName);
    await this.ivaConditionInput.click();
    await this.ivaConditionOpt.click();
    await this.cuitInput.setValue(cuit);
    await this.streetInput.setValue(street);
    await this.zipCodeInput.setValue(zipCode);
    await this.cityInput.setValue(city);
    await this.provinceInput.setValue(province);
    await this.signUpBtn.click();
  };

  generateRandomWord(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.random() * length);
    };
    return result;
  };
};

export default new SignUpPage();