describe('test2 - metadata.io', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Home').should('be.visible')
    cy.intercept('GET', '**/entries').as('logIn')
    cy.intercept('GET', '**/prod.html**').as('addCart')
    cy.intercept('POST', '**/deleteitem').as('removeProductCart')
  })

  it('place an order', () => {
    const productOne = 'Nexus 6'
    const productTwo = 'Samsung galaxy s6'
    cy.logIn(Cypress.env('userName'), Cypress.env('password'))
    cy.wait('@logIn').its('response.statusCode').should('eq', 200)
    cy.addProductInCart(productOne)
    cy.addProductInCart(productTwo)
    cy.accessCart()
    cy.deleteProduct()
    cy.makePurchase()
  })
})
