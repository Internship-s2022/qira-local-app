import Header from '../../page-objects/header.page';
import LoginPage from '../../page-objects/login.page';
import Index from '../../helpers/index.page';
import HomeContent from '../../page-objects/home-content.page';
import ShoppingCart from '../../page-objects/shopping-cart.page';
<<<<<<< Updated upstream
import Order from '../../page-objects/order.page';
=======
>>>>>>> Stashed changes

describe('Testing the whole purchase order process', () => {
  beforeAll('Open browser', () => {
    Index.openBrowser();
  });
  it('Add some products to the shopping cart', async () => {
    await HomeContent.productCardBtn.click();
    await Header.shoppingCart.click();
<<<<<<< Updated upstream
    await expect (ShoppingCart.box).toBeDisplayed();
  });
  it('Login to proceed with the purchase process', async () => {
    await ShoppingCart.finishBtn.click();
    await expect(LoginPage.formContainer).toBeDisplayed();
=======
    expect (ShoppingCart.box).toBeDisplayed();
  });
  it('Login to proceed with the purchase process', async () => {
    await ShoppingCart.finishBtn.click();
    await expect(LoginPage.modalContainer).toBeDisplayed();
>>>>>>> Stashed changes
    await LoginPage.login('client@qira.com', 'test1234');
    await LoginPage.infoModalBtn.click();
  });
  it('Proceed with the purchase process having logged in', async () => {
    await Header.shoppingCart.click();
    await ShoppingCart.finishBtn.click();
    await expect(browser).toHaveUrl('http://localhost:3000/order/summary');
  });
});