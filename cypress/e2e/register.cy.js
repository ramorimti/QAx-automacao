
import firstRegister from '../support/pages/register'
import acesspage from '../support/pages/acesspage'
import data from '../fixtures/register-user.json'

describe('cadastro', () => {

    context('quando acesso a pagina shave pela primeira vez', () => {
        it('deve cadastrar novo usuario com sucesso', () => {
            acesspage.enterPage()

            const user = data.success
            cy.createUser(user)


            firstRegister.submit(user.email, user.name, user.password)

            const message = 'Boas vindas, faça login para solicitar serviços!'
            firstRegister.shouldBeWelcome(message)
            cy.screenshot('cadastrosucessso')

        })
        it('não deve cadastrar usuario já cadastrado', () => {
            acesspage.enterPage()

            const user = data.invregister

            firstRegister.submit(user.email, user.name, user.password)

            const message = 'Oops! E-mail já cadastrado.'
            firstRegister.shouldBeError(message)
            cy.screenshot('cadastroinv')

        })
    })
})