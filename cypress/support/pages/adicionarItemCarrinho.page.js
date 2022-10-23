/// <reference types="cypress" />

class Comprar {
  
    get #menuHome() { return cy.get('.breadcrumb > :nth-child(1) > a') }
    get #menuComprar() { return cy.get('#primary-menu > .menu-item-629 > a') }
    get #btnPagina11() { return cy.get(':nth-child(7) > .page-numbers') }
    get #itemCalça() { return cy.get('.post-2913 > .product-block > .caption > .meta > .infor > .name > a') }
    get #btnSelecTamanho32() { return cy.get('.button-variable-item-32') }
    get #btnSelecCorAzul() { return cy.get('.button-variable-item-Blue') }
    get #btnComprar() { return cy.get('.single_add_to_cart_button') }
    get #msgAdicionadoCarrinho() { return cy.get('.woocommerce-message') }
    get #menuRoupas() { return cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a') }
    get #btnPagina10() { return cy.get(':nth-child(7) > .page-numbers') }
    get #itemShort() { return cy.get('.post-3404 > .product-block > .caption > .meta > .infor > .name > a') }
    get #SelecTamanho33() { return cy.get('.button-variable-item-33') }
    get #SelecCorRoxa() { return cy.get('.button-variable-item-Purple') }
    get #itemCamiseta() { return cy.get('.post-3674 > .product-block > .caption > .meta > .infor > .name > a') }
    get #selecTamanhoM() { return cy.get('.button-variable-item-M') }
    get #selecCorAmarelo() { return cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item') }
    get #btnVerCarinho() { return cy.get('.woocommerce-message > .button') }
    get #nomeItem01() { return cy.get('tbody > :nth-child(1) > .product-name') }
    get #nomeItem02() { return cy.get('tbody > :nth-child(2) > .product-name') }
    get #nomeItem03() { return cy.get(':nth-child(3) > .product-name') }

      

    adicionarItensCarinho() {

        for (let i = 0; i < 3; i++) {



            if (i == 0) {

                this.#menuHome.click()
                this.#menuComprar.click()
                this.#btnPagina11.click()
                this.#itemCalça.click()
                this.#btnSelecTamanho32.click()
                this.#btnSelecCorAzul.click()


            } else if (i == 1) {

                this.#btnPagina10.click()
                this.#itemShort.click()
                this.#SelecTamanho33.click()
                this.#SelecCorRoxa.click()


            } else if (i == 2) {

                this.#btnPagina10.click()
                this.#itemCamiseta.click()
                this.#selecTamanhoM.click()
                this.#selecCorAmarelo.click()
                this.#btnComprar.should('be.enabled')
                this.#btnComprar.click()
                this.#msgAdicionadoCarrinho.should('contain', 'foi adicionado no seu carrinho')
                this.#btnVerCarinho.click()
                cy.url().should('be.equal', 'http://lojaebac.ebaconline.art.br/carrinho/')
                this.#nomeItem01.should('contain', 'Viktor LumaTech™ Pant - 32, Blue')
                this.#nomeItem02.should('contain', 'Torque Power Short - 33, Purple')
                this.#nomeItem03.should('contain', 'Tiberius Gym Tank - M, Yellow')

                break
            }

            this.#btnComprar.should('be.enabled')
            this.#btnComprar.click()
            this.#msgAdicionadoCarrinho.should('contain', 'foi adicionado no seu carrinho')
            this.#menuRoupas.click()


        }


    }



}

module.exports = new Comprar()

