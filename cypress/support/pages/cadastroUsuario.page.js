/// <reference types="cypress" />

class ContaUsuarioPage {
    get #btnMinhaConta() { return cy.get('.icon-user-unfollow') }
    get #cmpEmail() { return cy.get('#reg_email') }
    get #cmpSenha() { return cy.get('#reg_password') }
    get #btnRegistrar() { return cy.get('[name="register"]')}
    get #cmpUsuario() { return cy.get('#username')}
    get #cmpSenhaUsuario() { return cy.get('#password')}
    get #btnLogin() { return cy.get('[name="login"]')}
    

    criarConta(email, senha) {
        
        this.#cmpEmail.type(email)
        this.#cmpSenha.type(senha)
        this.#btnRegistrar.click()       
    }

    acessarConta(usuario, senha) {

        this.#cmpUsuario.type(usuario)
        this.#cmpSenhaUsuario.type(senha)
        this.#btnLogin.click()
    }
    Visitar() {

        cy.visit('minha-conta')
    }

}

module.exports = new ContaUsuarioPage()

