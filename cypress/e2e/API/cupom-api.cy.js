/// <reference types="cypress" />

describe('Funcionalidade: Cupons via API', () => {


    it('GET - Deve listar os cupons cadastrados com sucesso', () => {

        cy.ListarCupons()


    });
    it('POST - Deve criar um cupom de desconto com sucesso', () => {

        cy.CriarCupons()
    });

});