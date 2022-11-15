class HomeContent {
  get homeCover () {
    return $('[data-testid=home-cover] img');
  }

  // Featured Products

  get featuredProducts () {
    return $('[data-testid=featuredProducts]');
  }
  get productCardContainer () {
    return $('[data-testid=featuredProducts] div');
  }
  get productCard () {
    return $('[data-testid=product-card]');
  }
  get productCardImgContainer () {
    return $('[data-testid=product-card] div:nth-child(1)');
  }
  get productCardImg () {
    return $('[data-testid=product-card] div:nth-child(1) img');
  }
  get productCardInfo () {
    return $('[data-testid=product-card] div:nth-child(2)');
  }
  get newLabel () {
    return $('[data-testid=new-label]');
  }
  get productCardBtn () {
    return $('[data-testid=productCard-btn]');
  }
  get productQuantifier () {
    return $$('[data-testid=icon-btn]');
  }

  // Featured Categories

  get featuredCategories () {
    return $('[data-testid=featuredCategories]');
  }
  get featuredCategoriesTitle () {
    return $('[data-testid=featuredCategories] h2');
  }
  get category () {
    return $('[data-testid="0-category"]');
  }
}
export default new HomeContent();