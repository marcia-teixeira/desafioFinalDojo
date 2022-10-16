/// <reference types="cypress" />
import ContaUsuarioPage from "../../support/pages/ContaUsuario.page"
const fake = require('faker-br')



describe('Funcionalidade: Carrinho de Compras', () => {

    beforeEach(() => {

        ContaUsuarioPage.LoginPage()
        cy.fixture("usuarioValido").then((usuarioValido) => {
            cy.AcessarContaUsuario(usuarioValido.email, usuarioValido.senha)                  
        })
    });

    it('Funcionalidade: Carinho de Compra', () => {        
       
       ContaUsuarioPage. adicionarItensCarinho()
              


    });
    

});