/// <reference types="cypress" />
import React from 'react'
import './App.css'
import App from './App'

it('shows the location host and path', () => {
  cy.mount(<App />)
})
