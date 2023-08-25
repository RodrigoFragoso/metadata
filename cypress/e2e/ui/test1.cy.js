// import { faker } from '@faker-js/faker'

describe('test1 - metadata.io', () => {
  let userName = Cypress.env('userName')
  let password = Cypress.env('password')

  beforeEach(() => {
    cy.visit('/')
    cy.contains('Home').should('be.visible')
    cy.intercept('GET', '**/entries').as('logIn')
  })

  it('sign Up as a new user', () => {
    cy.signUp(userName, password)
    cy.checkAlert('Sign up successful')
  })

  it('validate if you try signup with same user modal will appear', () => {
    cy.signUp(userName, password)
    cy.checkAlert('This user already exist.')
  })

  it('log in and log out', () => {
    cy.logIn(userName, password)
    cy.logOut()
  })

  it('try logging in with invalid user', () => {
    userName = 'error_fragoso'
    password = 'error_fragoso'
    cy.logIn(userName, password)
    cy.checkAlert('User does not exist.')
  })
})
