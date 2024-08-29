//Write commands in this file so that it can be reused 

import { selectorsdemo } from "./selector/selectorsCustomCommand";

Cypress.Commands.add('login', (username, password) => {  // cy.login('username','password'); can be used shortcut
  
  cy.get(selectorsdemo.login.username).type(username);
  cy.get(selectorsdemo.login.password).type(password);
  cy.get(selectorsdemo.login.buttonSubmit).click();

});


Cypress.Commands.add('verifyWelcomeMessage', (message) => {
  cy.get(selectorsdemo.dashboard.welcomeMessage).should('contain.text',"Swag Labs");

});


