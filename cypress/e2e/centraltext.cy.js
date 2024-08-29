import { messages } from "../support/selector/messagestext";

describe('The centralized text demo',()=>{

    it('Centralized message',()=>{

       // cy.get('.error-message').should('contain',messages.loginError);
    
        cy.visit("https://www.saucedemo.com/");
        cy.get("#user-name").type("admin");
        cy.get("#password").type("123");
        cy.get("#login-button").click();

        cy.get("h3[data-test='error']").should('contain',messages.loginError);
    
    })
    


})

