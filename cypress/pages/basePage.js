class basePage {

    elements = {
        title: () => cy.get('.title'),
        shoppingBag: () => cy.get('.shopping_cart_badge'),
        continueShoppingButton: () => cy.get('#continue-shopping')
    }
}

module.exports = new basePage();