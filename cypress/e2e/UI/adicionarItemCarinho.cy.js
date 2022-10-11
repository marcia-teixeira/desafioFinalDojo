/// <reference types="cypress" />
import ContaUsuarioPage from "../../support/pages/cadastroUsuario.page"

describe('Funcionalidade: Carrinho de Compras', () => {

    beforeEach(() => {

        ContaUsuarioPage.Visitar()

        /*cy.visit('/')*/
    });

    it.only('Adiciona itens ao carinho de compras', () => {

        ContaUsuarioPage.criarConta('testandopage@gmail.com.br', 'testandopage10')
        
    });
    it('Valida se os itens foram adicionados ao carinho de compras', () => {
        
    });
    
});