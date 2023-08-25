import { faker } from '@faker-js/faker'
import EL from './elements/elements'

Cypress.Commands.add('checkAlert', (message) => {
  cy.on('window:alert', (alert) => {
    expect(alert).to.contains(message)
  })
})

Cypress.Commands.add('signUp', (userName, password) => {
  cy.get(EL.HOME.SIGN_UP).should('be.visible').click()
  cy.contains('Sign up')
  cy.get(EL.FORM_SIGN_UP.USER_NAME).should('exist').and('be.visible').type(userName, { force: true })
  cy.get(EL.FORM_SIGN_UP.PASSWORD).should('exist').and('be.visible').type(password, { force: true })
  cy.get(EL.BUTTON.PRIMARY).eq(1).should('be.visible').click()
})

Cypress.Commands.add('logIn', (userName, password) => {
  cy.get(EL.HOME.LOG_IN).should('be.visible').click()
  cy.contains('Log in')
  cy.get(EL.FORM_LOG_IN.USER_NAME).should('exist').and('be.visible').type(userName, { force: true })
  cy.get(EL.FORM_LOG_IN.PASSWORD).should('exist').and('be.visible').type(password, { force: true })
  cy.get(EL.BUTTON.PRIMARY).contains('Log in').click()
  cy.get(EL.HOME.CONNECTED).should('be.visible').and('contain', userName)
  cy.wait('@logIn').its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('logOut', () => {
  cy.get(EL.HOME.LOG_OUT).should('be.visible').click()
  cy.get(EL.HOME.CONNECTED).should('not.be.visible')
})

Cypress.Commands.add('addProductInCart', (product) => {
  cy.get(EL.CATEGORIES.CATEGORY).contains('Phones').should('be.visible').click()
  cy.get(EL.CATEGORIES.PRODUCT).contains(product).click()
  cy.contains(product)
  cy.get(EL.BUTTON.SUCCESS).should('be.visible').click()
  cy.wait('@addCart').its('response.statusCode').should('eq', 200)
  cy.checkAlert('Product added.')
  cy.visit('/')
})

Cypress.Commands.add('accessCart', () => {
  cy.get(EL.HOME.CART).contains('Cart').click()
})

Cypress.Commands.add('deleteProduct', () => {
  cy.get('.success').eq(1).contains('Delete').click()
  cy.wait('@removeProductCart').its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('makePurchase', () => {
  const name = faker.person.fullName()
  const country = faker.location.country()
  const city = faker.location.city()
  const creditCard = faker.finance.creditCardNumber()
  const month = faker.date.month()
  const year = 2023

  cy.get(EL.BUTTON.SUCCESS).contains('Place Order').click()
  cy.contains('Place order')
  cy.get(EL.PLACE_ORDER.NAME).type(name, { force: true })
  cy.get(EL.PLACE_ORDER.COUNTRY).type(country, { force: true })
  cy.get(EL.PLACE_ORDER.CITY).type(city, { force: true })
  cy.get(EL.PLACE_ORDER.CREDIT_CARD).type(creditCard, { force: true })
  cy.get(EL.PLACE_ORDER.MONTH).type(month, { force: true })
  cy.get(EL.PLACE_ORDER.YEAR).type(year, { force: true })
  cy.get(EL.BUTTON.PRIMARY).contains('Purchase').click()
  cy.contains('Thank you for your purchase!')
  cy.contains(name)
  cy.contains(creditCard)
})

Cypress.Commands.add('checkAllProducts', (product) => {
  cy.get(EL.CATEGORIES.CATEGORY).contains(product).should('be.visible').click()
  cy.get(EL.CATEGORIES.PRODUCT).then((products) => {
    expect(products.length).to.be.greaterThan(1)
  })
})
