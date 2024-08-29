describe('SwagLabDemonstration Tests', () => {
    
    it('Verify products should be added and removed from the cart remove', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');
      
    //Adding products to the Cart page--------------------------------------------------------->
      
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
      
    //Inside the Cart Page--------------------------------------------------------------------->
        
        cy.get(".shopping_cart_link").click();
        cy.get(".title").should('have.text','Your Cart');

    //Removing the products--------------------------------------------------------------------->

        cy.get("#remove-sauce-labs-bolt-t-shirt").click();
        cy.get("#remove-sauce-labs-fleece-jacket").click();

        cy.get(".cart_quantity_label").should('have.text','QTY');
        cy.get(".cart_desc_label").should('have.text','Description');
        cy.title().should('contain','Swag Labs');
        cy.get("#checkout").click();


    //Inside Check out step one------------------------------------------------------------------>
    //All the fields are empty
        
        cy.get("#first-name");
        cy.get("#last-name");
        cy.get("#postal-code");
        cy.get("#continue").click();
        cy.get("h3[data-test='error']").should('have.text','Error: First Name is required');
        cy.get('#first-name').clear();
        cy.get("#last-name").clear();           //Clears the textfiled
        cy.get("#postal-code").clear();
        
    //First name only given

        cy.get("#first-name").type("TesterX");
        cy.get("#last-name");
        cy.get("#postal-code");
        cy.get("#continue").click();
        cy.get("h3[data-test='error']").should('have.text','Error: Last Name is required');
        cy.get("#first-name").clear();
        cy.get("#last-name").clear();
        cy.get("#postal-code").clear();
        
    //Last name only given

        cy.get("#first-name");
        cy.get("#last-name").type("Sins");
        cy.get("#postal-code");
        cy.get("#continue").click();
        cy.get("h3[data-test='error']").should('have.text','Error: First Name is required');
        cy.get("#first-name").clear();
        cy.get("#last-name").clear();
        cy.get("#postal-code").clear();

    //Only postal code given

        cy.get("#first-name");
        cy.get("#last-name");
        cy.get("#postal-code").type("12345");
        cy.get("#continue").click();
        cy.get("h3[data-test='error']").should('have.text','Error: First Name is required');
        cy.get("#first-name").clear();
        cy.get("#last-name").clear();
        cy.get("#postal-code").clear();
    

    //All the fields are given i.e. positive 

        cy.get("#first-name").type("TesterA");
        cy.get("#last-name").type("Singh");
        cy.get("#postal-code").type("12345");
        cy.get("#continue").click();
      
      
    
    
    //Inside Check out step two----------------------------------------------------------------->

        cy.get(".title").should('have.text','Checkout: Overview');
        cy.get(".cart_quantity_label").should('have.text','QTY');
        cy.get(".cart_desc_label").should('have.text','Description');
      
        
        
    //Checkout Description---------------------------------------------------------------------->

        cy.get("div[data-test='payment-info-label']").should('have.text','Payment Information:');
        cy.get("div[data-test='payment-info-value']").should('have.text','SauceCard #31337');
        cy.get("div[data-test='shipping-info-label']").should('have.text','Shipping Information:');
        cy.get("div[data-test='shipping-info-value']").should('have.text','Free Pony Express Delivery!');
        cy.get("div[data-test='total-info-label']").should('have.text','Price Total');
        cy.get(".summary_subtotal_label").should('have.text','Item total: $39.98');
        cy.get(".summary_total_label").should('have.text','Total: $43.18')
        

        cy.get("#finish").click();

    // Final Page after checkout----------------------------------------------------------------->


        cy.get(".complete-header").should('have.text','Thank you for your order!');
        cy.get(".complete-text").should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');

        cy.get("#back-to-products").click();
    

        
    });

   
  })