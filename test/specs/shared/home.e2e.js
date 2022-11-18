import Header from '../../page-objects/header.page';
import LoginPage from '../../page-objects/login.page';
import ShoppingCart from '../../page-objects/shopping-cart.page';
import HomeContent from '../../page-objects/home-content.page';
import Footer from '../../page-objects/footer.page';

describe('Testing Home', () => {
  beforeAll('Open browser', async () => {
    await Header.openBrowser();
  });
  describe('Testing Header', () => {
    it('Window tab', async () => {
      await expect(HomeContent.featuredCategories).toHaveTitle('Qira Local');
    });
    it('Qira logo redirection', async () => {
      await expect(HomeContent.featuredCategories).toHaveTitle('Qira Local');
    });
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
      await Header.logoQira.click();
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
        'Por favor, seleccione un artículo para empezar.',
      );
      await ShoppingCart.closeModal.click();
      await expect(ShoppingCart.cartModal).not.toBeDisplayed();
    });
  });
  describe('Testing Home Content', () => {
    it('Cover image', async () => {
      await expect(HomeContent.homeCover).toExist();
      await expect(HomeContent.homeCover).toHaveAttribute('alt');
      const img = await HomeContent.homeCover.getProperty('alt');
      await expect(img).toEqual('photo-cover');
    });
    it('Featured Products elements', async () => {
      await HomeContent.featuredProducts.scrollIntoView();
      await expect(HomeContent.featuredProducts).toExist();
      await expect(HomeContent.featuredProducts).toHaveTextContaining('Productos destacados');
      await expect(HomeContent.productCardContainer).toExist();
      await expect(HomeContent.productCardContainer).toBeDisplayed();
      await expect(HomeContent.newLabel).toExist();
      await expect(HomeContent.newLabel).toBeDisplayed();
    });
    it('Product card data is correct - Info', async () => {
      await expect(HomeContent.productCardImg).toHaveAttr('alt');
      await expect(HomeContent.productCardInfo).toExist();
      await expect(HomeContent.productCardInfo).toBeDisplayed();
      const productInfo = await HomeContent.productCardInfo.getText();
      await expect(HomeContent.productCardInfo).toHaveText(productInfo);
    });
    it('Product card data is correct - Button', async () => {
      await expect(HomeContent.productQuantifier).not.toBeDisplayed();
      await expect(HomeContent.productCardBtn).toExist();
      await expect(HomeContent.productCardBtn).toBeClickable();
      await expect(HomeContent.productCardBtn).toHaveTextContaining('AGREGAR AL CARRITO');
      await HomeContent.productCardBtn.click();
      await expect(HomeContent.productQuantifier).toBeDisplayed();
    });
    it('Featured Categories', async () => {
      await HomeContent.featuredCategories.scrollIntoView();
      await expect(HomeContent.featuredCategoriesTitle).toHaveText('Categorías destacadas');
      await expect(HomeContent.category).toHaveText('Insecticidas');
      const hRef = await HomeContent.category.getProperty('href');
      await expect(HomeContent.category).toHaveHrefContaining('/category/insecticidas');
    });
  });
  describe('Testing footer', () => {
    it('Testing text elements', async () => {
      await Footer.footerInfo.scrollIntoView();
      await expect(Footer.footerInfo).toHaveText('© 2022 QIRA. Todos los derechos reservados.');
    });
    it('Testing social media icons - Facebook', async () => {
      await expect(Footer.socialMedia).toHaveTextContaining('Seguinos en nuestras redes');
      await Footer.socialIconFb.click();
      await browser.switchWindow('Facebook');
      await expect(browser).toHaveUrl('https://www.facebook.com/qira-local');
      await browser.switchWindow('React App');
    });
    it('Testing social media icons - Instagram', async () => {
      await Footer.socialIconIg.click();
      await browser.switchWindow('Instagram');
      await expect(browser).toHaveUrl('https://www.instagram.com/qira-local/');
      await browser.switchWindow('React App');
    });
    it('Testing social media icons - Twitter', async () => {
      await Footer.socialIconTw.click();
      await browser.switchWindow('Twitter');
      await expect(browser).toHaveUrl('https://twitter.com/radiumrocket');
      await browser.switchWindow('React App');
    });
    it('Testing social media icons - Linkedin', async () => {
      await Footer.socialIconIn.click();
      await browser.switchWindow('LinkedIn');
      await expect(browser).toHaveUrl('https://www.linkedin.com/qira-local?_l=en_US');
      await browser.switchWindow('React App');
    });
    it('Testing social media icons - WhatsApp', async () => {
      await Footer.socialIconWpp.click();
      await browser.switchWindow('WhastApp');
      await expect(browser).toHaveUrl('https://api.whatsapp.com/send/');
      await browser.closeWindow();
    });
  });
});
