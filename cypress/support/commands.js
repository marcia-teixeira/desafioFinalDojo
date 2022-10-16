
Cypress.Commands.add('AcessarContaUsuario', (email, senha) => {

    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('[name="login"]').click()
    cy.get('.page-title').should('have.text', 'Minha conta')  
})

Cypress.Commands.add('AdicionarItensCarinho', () => {

    cy.get('.breadcrumb > :nth-child(1) > a').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(8) > .page-numbers').click()
    cy.get('.post-2913 > .product-block > .caption > .meta > .infor > .name > a').click()    //Item
    cy.get('.button-variable-item-32').click()
    cy.get('.button-variable-item-Blue').click()     
    cy.get('.single_add_to_cart_button').should('be.enabled')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
    
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.get('.post-3404 > .product-block > .caption > .meta > .infor > .name > a').click()       //Item
    cy.get('.button-variable-item-33').click()
    cy.get('.button-variable-item-Purple').click()
    cy.get('.single_add_to_cart_button').should('be.enabled')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')

    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.get('.post-3674 > .product-block > .caption > .meta > .infor > .name > a').click()       //Item
    cy.get('.button-variable-item-M').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').should('be.enabled')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
    cy.get('.woocommerce-message > .button').click()
    cy.url().should('be.equal', 'http://lojaebac.ebaconline.art.br/carrinho/')
    cy.get('tbody > :nth-child(1) > .product-name').should('contain', 'Viktor LumaTech™ Pant - 32, Blue')
    cy.get('tbody > :nth-child(2) > .product-name').should('contain', 'Torque Power Short - 33, Purple')
    cy.get(':nth-child(3) > .product-name').should('contain', 'Tiberius Gym Tank - M, Yellow')


})
