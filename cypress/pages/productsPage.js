class productsPage {

    elements = {
        inventoryItem: () => cy.get('.inventory_item'),
        productSort: () => cy.get('.product_sort_container'),
        shoppingCart: () => cy.get('.shopping_cart_link'),
        productImage: () => cy.get('#item_4_img_link .inventory_item_img'),
        productName: () => cy.get('#item_4_img_link .inventory_item_name'),
        productPrice: () => cy.get('#item_4_img_link .inventory_item_price'),
        addToCartButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        removeButton: () => cy.get('remove-sauce-labs-backpack')
    }
}

module.exports = new productsPage();