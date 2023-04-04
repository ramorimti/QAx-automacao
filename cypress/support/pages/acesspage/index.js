
class AcessPage {

    enterPage() {
        cy.visit('/')
        cy.get('.signup').click()

    }
}

export default new AcessPage()