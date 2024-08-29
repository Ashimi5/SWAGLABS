describe('SwagLabDemo Tests', () => {
    it('Verify products should be added and removed from the cart', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
      
      
      //Adding products to the cart
      
      //Adding Item1
      cy.get("#add-to-cart-sauce-labs-bike-light").click();
      cy.get(".shopping_cart_link").click();
      
      //Assertion of item1
      cy.get("#item_0_title_link").should('have.text',"Sauce Labs Bike Light");
      cy.go('back');


      
      
      //Adding Item2
      cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
      cy.get(".shopping_cart_link").click();

      //Assertion of item2
      cy.get("#item_1_title_link").should('have.text',"Sauce Labs Bolt T-Shirt");
      cy.go('back');

      

    
      //Adding Item3
      cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
      cy.get(".shopping_cart_link").click();

      //Assertion of item3
      cy.get("#item_5_title_link").should('have.text',"Sauce Labs Fleece Jacket");
      cy.go('back');

      

      
      //Adding Item4
      cy.get("#add-to-cart-sauce-labs-backpack").click();
      cy.get(".shopping_cart_link").click();

      //Assertion of item4
      cy.get("#item_4_title_link").should('have.text',"Sauce Labs Backpack");
      cy.go('back');

      
      //Removing products from the cart
      
      cy.get("#remove-sauce-labs-backpack").click();
      cy.get(".shopping_cart_link").click();
      cy.get("#item_4_title_link").should('not.exist');



      cy.get("#remove-sauce-labs-bike-light").click();
      cy.get(".shopping_cart_link").click();
      cy.get("#item_0_title_link").should('not.exist');
      cy.go('back');



      


      

      });

   
  })