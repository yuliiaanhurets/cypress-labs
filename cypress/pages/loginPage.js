class loginPage {

    elements = {
        username: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button')
    }

    goTo() {
        cy.visit("https://www.saucedemo.com/")
    }

    login(username, password) {
        this.elements.username().type(username)
        this.elements.password().type(password)
        this.elements.loginButton().click()
    }
}

module.exports = new loginPage();