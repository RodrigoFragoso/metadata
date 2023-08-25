describe('test4 - metadata.io', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Home').should('be.visible')
    cy.intercept('GET', '**/entries').as('logIn')
  })

  it('Validate that main category level page contains all items from subcategories', () => {
    cy.logIn(Cypress.env('userName'), Cypress.env('password'))
    cy.wait('@logIn').its('response.statusCode').should('eq', 200)
    cy.checkAllProducts('Phones')
    cy.checkAllProducts('Laptops')
    cy.checkAllProducts('Monitors')
  })
})
