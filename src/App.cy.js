/// <reference types="cypress" />
import React from 'react'
import './App.css'
import App from './App'
import * as Location from './Location'

it('shows the location host and path', () => {
  cy.stub(Location, 'getLocation')
    .returns({
      hostname: 'cy-test',
      pathname: '/App',
    })
    .as('getLocation')
  cy.mount(<App />)
  cy.contains('[data-cy=location]', 'cy-test /App')
  cy.get('@getLocation').should('have.been.calledOnce')
})
