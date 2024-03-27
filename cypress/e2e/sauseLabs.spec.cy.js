import loginPage from "../pages/loginPage.js"
import basePage from "../pages/basePage.js"
import productsPage from "../pages/productsPage.js"

describe('Swag Labs', () => {

  beforeEach(() => {
    loginPage.goTo();
    loginPage.login("standard_user", "secret_sauce");
  })

  it('products page should contain products', () => {
    basePage.elements.title().should('have.text', "Products");
    productsPage.elements.inventoryItem().should('have.length', 9);
    productsPage.elements.productSort().should('be.visible');
    productsPage.elements.shoppingCart().should('be.visible');
  })

  it('product description should be displayed', () => {
    productsPage.elements.productImage().should('be.visible');
    productsPage.elements.productName().should('have.text', 'Sauce Labs Backpack');
    productsPage.elements.productPrice().should('have.text', '$29.99');
    productsPage.elements.addToCartButton().should('be.visible');
  })

  it('should add product to cart', () => {
    basePage.elements.title().should('have.text', "Products");
    productsPage.elements.addToCartButton().click();
    productsPage.elements.addToCartButton().should('not.be.visible');
    productsPage.elements.removeButton().should('be.visible');
    basePage.elements.shoppingBag().should('have.text', '1');
  })

  it('shopping cart should show correct product information', () => {
    basePage.elements.shoppingBag().click();
    basePage.elements.title().should('have.text', "Your Cart");
    productsPage.elements.productName().should('have.text', 'Sauce Labs Backpack');
    productsPage.elements.productPrice().should('have.text', '$29.99');
    productsPage.elements.addToCartButton().should('not.be.visible');
    productsPage.elements.removeButton().should('be.visible');
    basePage.elements.continueShoppingButton().should('be.visible');
  })

  it('product should be removed from cart', () => {
    basePage.elements.shoppingBag().click();
    basePage.elements.title().should('have.text', "Your Cart");
    productsPage.elements.productName().should('have.text', 'Sauce Labs Backpack');
    productsPage.elements.removeButton().click();
    productsPage.elements.removeButton().should('not.be.visible');
    productsPage.elements.productName().should('not.be.visible');
    basePage.elements.continueShoppingButton().should('be.visible');
  })
})