class Header {

  //Getters
  get logoQira () {
    return $('[data-testid=logo-qira]');
  }
  get btnCategories () {
    return $('[data-testid=btn-categories]');
  }
  get categoryOpt () {
    return $('[data-testid=category-0]');
  }
  get searchInput () {
    return $('[data-testid=search-input]');
  }
  get searchIcon () {
    return $('[data-testid=search-icon]');
  }
  get loginButton () {
    return $('[data-testid=login-btn]');
  }
  get shoppingCart () {
    return $('[data-testid=shopping-cart]');
  }

  //Methods

  async search (product) {
    await this.searchInput.setValue(product);
    await this.searchIcon.click();
  }
}

export default new Header();