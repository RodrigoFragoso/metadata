[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

# Pipefy

## __Project Dependencies__
* NVM install: https://github.com/nvm-sh/nvm || Node install: https://nodejs.org/en/download/
~~~javascript
    npm install
~~~
>___
## __Execution Tests__
### __UI Tests__
* QA Environment:
~~~javascript
    npm run smoke-test:ui:qa
~~~
> ___
### __Project folder structure__
* [cypress/](./cypress/)
  * [downloads/](./cypress/downloads)
  * [e2e/](./cypress/e2e)
    * [api/](./cypress/e2e/api)
    * [ui/](./cypress/e2e/ui)
      * [test1.cy.js](./cypress/e2e/ui/test1.cy.js)
      * [test2.cy.js](./cypress/e2e/ui/test2.cy.js)
      * [test3.cy.js](./cypress/e2e/ui/test3.cy.js)
      * [test4.cy.js](./cypress/e2e/ui/test4.cy.js)
  * [fixtures/](./cypress/fixtures)
    * [example.json](./cypress/fixtures/example.json)
  * [support/](./cypress/support)
    * [elements/](./cypress/support/elements)
      * [elements.js](./cypress/support/elements/elements.js)
    * [commands.js](./cypress/support/commands.js)
    * [commands-ui.js](./cypress/support/commands-ui.js)
    * [e2e.js](./cypress/support/e2e.js)

