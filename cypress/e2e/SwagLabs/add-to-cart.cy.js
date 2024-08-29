import { loginSelectors } from "../../support/selector/login";
import { addtoCart } from "../../support/selector/addtoCart";


describe('SwagLabDemo Tests', () => {
    
  it('Verify products should be added and removed from the cart', () => {
     
      cy.visit("https://www.saucedemo.com");
      cy.url().should('contain',"https://www.saucedemo.com");
      cy.get(loginSelectors.loginFormEmail).clear().type("standard_user");
      cy.get(loginSelectors.loginFormPassword).clear().type("secret_sauce");
      cy.get(loginSelectors.loginButton).click();
      cy.url().should('include', '/inventory.html');
      

      //Adding products to the cart
      
      //Adding Item1
      cy.get(addtoCart.addtoCart1).click();
      
      cy.get(addtoCart.cartbutton).click();
      
      //Assertion of item1
      cy.get(addtoCart.lightslink).should('have.text',"Sauce Labs Bike Light");
      cy.go('back');


      
      
      //Adding Item2
      cy.get(addtoCart.addtoCart2).click();
      cy.get(addtoCart.cartbutton).click();

      //Assertion of item2
      cy.get(addtoCart.tshirtlink).should('have.text',"Sauce Labs Bolt T-Shirt");
      cy.go('back');

      

    
      //Adding Item3
      cy.get(addtoCart.addtoCart3).click();
      cy.get(addtoCart.cartbutton).click();

      //Assertion of item3
      cy.get(addtoCart.jacketlink).should('have.text',"Sauce Labs Fleece Jacket");
      cy.go('back');

      

      
      //Adding Item4
      cy.get("#add-to-cart-sauce-labs-backpack").click();
      cy.get(addtoCart.cartbutton).click();

      //Assertion of item4
      cy.get(addtoCart.bagpacklink).should('have.text',"Sauce Labs Backpack");
      cy.go('back');

      
      //Removing products from the cart
      
      cy.get(addtoCart.remove1).click();
      cy.get(addtoCart.cartbutton).click();
      cy.get(addtoCart.bagpacklink).should('not.exist');



      cy.get(addtoCart.remove2).click();
      cy.get(addtoCart.cartbutton).click();
      cy.get(addtoCart.lightslink).should('not.exist');
      cy.go('back');



      


      

      });

   
  })