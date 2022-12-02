import homeContentPage from "./home-content.page";
import headerPage from "./header.page";
class ShoppingCart {
  //Modal

  get cartModal () {
  return $('[data-testid=cart-modal]')
  };
  get closeModal () {
    return $('[data-testid=CloseIcon]')
  };

  //Product Box

  get box () {
    return $('[data-testid=box]');
  };
  get boxCross () {
    return $('[data-testid=cross-prod-box]');
  };
  get productOne () {
    return $('[data-testid=box-Herbicida-cesped]');
  };
  get productTwo () {
    return $('[data-testid=box-Grobo-1923]');
  };
  get productThree () {
    return $('[data-testid=box-Bonide]');
  };
  get finishBtn () {
    return $('[data-testid=finish-btn]');
  };

  //Methods

  async initiatePurchase() {
    await homeContentPage.productCardBtn.click();
    await headerPage.shoppingCart.click();
    await this.finishBtn.click();
  };
};
export default new ShoppingCart();