import { loginSelectors } from "../../support/selector/login";
import { addtoCart } from "../../support/selector/addtoCart";
import { checkOut } from "../../support/selector/checkout";

describe('SwagLabDemonstration Tests', () => {
    
    it('Verify products should be added and removed from the cart remove', () => {
       
        cy.visit('https://www.saucedemo.com');
        cy.get(loginSelectors.userName).clear();
        cy.get(loginSelectors.passWord).clear();
        cy.get(loginSelectors.loginButton).click();
        cy.get("h3[data-test='error']").should('be.visible');
        cy.get("h3[data-test='error']").should('contain','Epic sadface: Username is required');
      
    //Adding products to the Cart page--------------------------------------------------------->
      
        cy.get(addtoCart.addtoCart4).click();   // Using selectors from add to cart
        cy.get(addtoCart.addtoCart1).click();
        cy.get(addtoCart.addtoCart2).click();
        cy.get(addtoCart.addtoCart3).click();
      
    //Inside the Cart Page--------------------------------------------------------------------->
        
        cy.get(addtoCart.cartbutton).click();
        cy.get(".title").should('have.text','Your Cart');

    //Removing the products--------------------------------------------------------------------->

        cy.get(addtoCart.remove3).click();  
        cy.get(addtoCart.remove4).click(); 

        cy.get(".cart_quantity_label").should('have.text','QTY');
        cy.get(".cart_desc_label").should('have.text','Description');
        cy.title().should('contain','Swag Labs');
        cy.get(checkOut.checkingout).click();


    //Inside Check out step one------------------------------------------------------------------>
    //All the fields are empty
        
        cy.get(checkOut.fname);
        cy.get(checkOut.lname);
        cy.get(checkOut.pcode);
        cy.get(checkOut.conti).click();
        cy.get("h3[data-test='error']").should('have.text','Error: First Name is required');
        cy.get(checkOut.fname).clear();
        cy.get(checkOut.lname).clear();           //Clears the textfiled
        cy.get(checkOut.pcode).clear();
        
    //First name only given

        cy.get(checkOut.fname).type("TesterX");
        cy.get(checkOut.lname);
        cy.get(checkOut.pcode);
        cy.get(checkOut.conti).click();
        cy.get("h3[data-test='error']").should('have.text','Error: Last Name is required');
        cy.get(checkOut.fname).clear();
        cy.get(checkOut.lname).clear();
        cy.get(checkOut.pcode).clear();
        
    //Last name only given

        cy.get(checkOut.fname);
        cy.get(checkOut.lname).type("Sins");
        cy.get(checkOut.pcode);
        cy.get(checkOut.conti).click();
        cy.get("h3[data-test='error']").should('have.text','Error: First Name is required');
        cy.get(checkOut.fname).clear();
        cy.get(checkOut.lname).clear();
        cy.get(checkOut.pcode).clear();

    //Only postal code given

        cy.get(checkOut.fname);
        cy.get(checkOut.lname);
        cy.get(checkOut.pcode).type("12345");
        cy.get(checkOut.conti).click();
        cy.get("h3[data-test='error']").should('have.text','Error: First Name is required');
        cy.get(checkOut.fname).clear();
        cy.get(checkOut.lname).clear();
        cy.get(checkOut.pcode).clear();
    

    //All the fields are given i.e. positive 

        cy.get(checkOut.fname).type("TesterA");
        cy.get(checkOut.lname).type("Singh");
        cy.get(checkOut.pcode).type("12345");
        cy.get(checkOut.conti).click();
      
       
    
    
    //Assertions after checkout page is displayed----------------------------------------------------------------->

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
        

        cy.get(checkOut.finished).click();

    // Final Page after checkout----------------------------------------------------------------->


        cy.get(".complete-header").should('have.text','Thank you for your order!');
        cy.get(".complete-text").should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');

        cy.get(checkOut.backtoproduct).click();
    

        
    });

   
  })