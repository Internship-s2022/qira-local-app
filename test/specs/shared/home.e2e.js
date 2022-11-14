import Header from '../../page-objects/header.page';
import LoginPage from '../../page-objects/login.page';
import ShoppingCart from '../../page-objects/shopping-cart.page';

describe('Testing Home', () => {
  beforeAll('Open browser', async () => {
    await Header.openBrowser();
  });
  describe('Testing Header', () => {
    it('Qira logo redirection', async () => {
      await expect(Header.logoQira).toExist();
      await expect(Header.logoQira).toBeClickable();
      await Header.logoQira.click();
      await expect(browser).toHaveUrl('http://localhost:3000/');
    });
    it('Exchange information', async () => {
      await expect(Header.exchangeInfo).toExist();
      await expect(Header.exchangeInfo).toHaveTextContaining('Tipo de cambio');
    });
    it('Categories dropdown', async () => {
      await expect(Header.btnCategories).toExist();
      await Header.btnCategories.moveTo();
      await expect(Header.categoryOpt).toExist();
      await expect(Header.categoryOpt).toBeClickable();
      await Header.categoryOpt.click();
      const category = await Header.categoryOpt.getText();
      const categoryUrl = category.toLowerCase();
      await expect(browser).toHaveUrl(`http://localhost:3000/category/${categoryUrl}`);
    });
    it('Search bar functionality - Partial searching', async () => {
      await expect(Header.searchInput).toExist();
      await Header.search('fungi');
      const searchResult = await Header.searchInput.getValue();
      await expect(browser).toHaveUrl(`http://localhost:3000/search-results/${searchResult}`);
    });
    it('Search bar functionality - Complete searching', async () => {
      await Header.search('daconil');
      const searchResult = await Header.searchInput.getValue();
      await expect(browser).toHaveUrl(`http://localhost:3000/search-results/${searchResult}`);
    });
    it('Login button functionality', async () => {
      await expect(Header.loginButton).toExist();
      await expect(Header.loginButton).toHaveText('Iniciar Sesión');
      await expect(Header.loginButton).toBeClickable();
      await Header.loginButton.click();
      await expect(LoginPage.formContainer).toBeDisplayed();
      await LoginPage.crossModal.click();
      await expect(LoginPage.formContainer).not.toBeDisplayed();
    });
    it('Shopping cart functionality - Button opens modal', async () => {
      await expect(Header.shoppingCart).toExist();
      await expect(Header.shoppingCart).toBeClickable();
      await Header.shoppingCart.click();
      await expect(ShoppingCart.cartModal).toBeDisplayed();
      await expect(ShoppingCart.cartModal).toHaveTextContaining(
        'Su carrito se encuentra vacío.',
        'Por favor, seleccione un artículo para empezar.'
        );
      await ShoppingCart.closeModal.click();
      await expect(ShoppingCart.cartModal).not.toBeDisplayed();
    });
  });
});