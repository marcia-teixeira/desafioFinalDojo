/// <reference types="cypress" />
import CadastrarUsuario from "../../support/pages/ContaUsuario.page"
import Comprar from "../../support/pages/adicionarItemCarrinho.page"


describe('Funcionalidade: Carrinho de Compras', () => {

    beforeEach(() => {

        CadastrarUsuario.LoginPage()
        cy.fixture("usuarioValido").then((usuarioValido) => {
            cy.AcessarContaUsuario(usuarioValido.email, usuarioValido.senha)                  
        })
    });

    it('Funcionalidade: Carinho de Compra', () => {        
       
       Comprar.adicionarItensCarinho()              


    });
    

});