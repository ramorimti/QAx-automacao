

class FirstRegister {

    submit(email, name, password) {

        cy.get('input[placeholder*="Nome"]').type(name)
        cy.get('input[placeholder*="email"]').type(email)
        cy.get('input[placeholder*="senha"]').type(password)

        cy.get('button[type="submit"]').click()
    }

    shouldBeWelcome(message) {

        cy.get('div[class="notice success"]')
            .find('p')
            .should('have.text', message)
    }

    shouldBeError(message) {

        cy.get('div[class="notice error"]')
            .find('p')
            .should('have.text', message)


    }
}

export default new FirstRegister()