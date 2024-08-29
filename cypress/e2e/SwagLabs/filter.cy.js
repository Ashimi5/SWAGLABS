import { loginSelectors } from "../../support/selector/login";

describe('Filter the products',()=>{

    it('Verify the filter the products',()=>{

        cy.visit('https://www.saucedemo.com');
        cy.url().should('contain','saucedemo.com');  // Assertion for URL
        cy.get(loginSelectors.userName).clear();
        cy.get(loginSelectors.passWord).clear();
        cy.get(loginSelectors.loginButton).click();
        cy.url().should('include', '/inventory.html');
         




        cy.get('option').eq(0).should('have.text','Name (A to Z)');
        cy.get('option').eq(1).should('have.text','Name (Z to A)');
        cy.get('option').eq(2).should('have.text','Price (low to high)');
        cy.get('option').eq(3).should('have.text','Price (high to low)');

        
        
        cy.get('[data-test="product-sort-container"]').select('za');
        cy.get('div[data-test="inventory-item-name"]').eq(0).should('contain', 'Test.allTheThings() T-Shirt (Red)');

        cy.get('div[data-test="inventory-item-name"]').eq(5).should('have.text', 'Sauce Labs Backpack')

        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('div[data-test="inventory-item-name"]').eq(0).should('contain', 'Sauce Labs Onesie');

        cy.get('[data-test="product-sort-container"]').select('hilo');
        cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text','Sauce Labs Fleece Jacket');


    })

})
        
        