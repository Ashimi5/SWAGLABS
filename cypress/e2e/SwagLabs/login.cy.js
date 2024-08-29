import { loginSelectors } from "../../support/selector/login";


describe('Login Tests', () => {
  
    //Login with empty username and password 
      
    it('Login with Empty Username and Password', () => {
         cy.visit('https://www.saucedemo.com');
         cy.get(loginSelectors.userName).clear();
         cy.get(loginSelectors.passWord).clear();
         cy.get(loginSelectors.loginButton).click();
         cy.get("h3[data-test='error']").should('be.visible');
         cy.get("h3[data-test='error']").should('contain','Epic sadface: Username is required');
  
    });
   
    
    //Login with invalid Email and valid Password
  
      it('Invalid Login with Incorrect Username', () => {
          cy.visit('https://www.saucedemo.com');
          cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
          cy.get(loginSelectors.userName).type("abxc");
          cy.get(loginSelectors.passWord).type("secret_sauce");
          cy.get(loginSelectors.loginButton).click();
          cy.get("h3[data-test='error']").should('be.visible');
          cy.get("h3[data-test='error']").should('contain','Epic sadface: Username and password do not match any user in this service');
      });
    
    //Login with valid Email and incorrect Password
      
      it('Invalid Login with Incorrect Password', () => {
          cy.visit('https://www.saucedemo.com');
          cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
          cy.get(loginSelectors.userName).type("standard_user");
          cy.get(loginSelectors.passWord).type("tomato_sauce");
          cy.get(loginSelectors.loginButton).click();
          cy.get("h3[data-test='error']").should('be.visible');
          cy.get("h3[data-test='error']").should('contain','Epic sadface: Username and password do not match any user in this service');
    
          
      });
    
    //Login with locked out user
    
      it('Login with locked out user', () => {
          cy.visit('https://www.saucedemo.com');
          cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
          cy.get(loginSelectors.userName).type("locked_out_user");
          cy.get(loginSelectors.passWord).type("secret_sauce");
          cy.get(loginSelectors.loginButton).click();
          cy.get("h3[data-test='error']").should('be.visible');
          cy.get("h3[data-test='error']").should('contain','Epic sadface: Sorry, this user has been locked out.');
      });
    
    //Login with problem user
    
      it('Login with problem user', () => {
          cy.visit('https://www.saucedemo.com');
          cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
          cy.get(loginSelectors.userName).type('problem_user');
          cy.get(loginSelectors.passWord).type('secret_sauce');
          cy.get(loginSelectors.loginButton).click();
          cy.url().should('include', '/inventory.html');
      });
    
    //Login with Performance Glitch User
    
      it('Login with Performance Glitch User', () => {
          cy.visit('https://www.saucedemo.com');
          cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
          cy.get(loginSelectors.userName).type('performance_glitch_user');
          cy.get(loginSelectors.passWord).type('secret_sauce');
          cy.get(loginSelectors.loginButton).click();
          cy.url().should('include', '/inventory.html');
      });
    
    //Login with valid Password only
      
      it('Login with empty username', () => {
          cy.visit('https://www.saucedemo.com');
          cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
          cy.get(loginSelectors.userName);
          cy.get(loginSelectors.passWord).type('secret_sauce');
          cy.get(loginSelectors.loginButton).click();
          cy.get("h3[data-test='error']").should('be.visible');
          cy.get("h3[data-test='error']").should('contain','Epic sadface: Username is required');
      });
    
    //Login with valid Email only
    
      it('Login with empty Password', () => {
          cy.visit('https://www.saucedemo.com');
          cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
          cy.get(loginSelectors.userName).type('standard_user');
          cy.get(loginSelectors.passWord);
          cy.get(loginSelectors.loginButton).click();
          cy.get("h3[data-test='error']").should('be.visible');
          cy.get("h3[data-test='error']").should('contain','Epic sadface: Password is required');
      });
  
      // Login with valid Email and Password
  
      it('Valid login with standard user', () => {
         cy.visit('https://www.saucedemo.com');
         cy.get(loginSelectors.userName).clear();
          cy.get(loginSelectors.passWord).clear();
         cy.get(loginSelectors.userName).type('standard_user');
         cy.get(loginSelectors.passWord).type('secret_sauce');
  
         cy.get(loginSelectors.loginButton).click();
         cy.url().should('include', '/inventory.html')
         cy.url().should('eq','https://www.saucedemo.com/inventory.html')
         cy.url().should('contain','saucedemo');
  
        //Logout after login
     
         cy.get("#react-burger-menu-btn").click();
         cy.get("#logout_sidebar_link").click();

         cy.get("div[id='login_credentials'] h4").should('have.text','Accepted usernames are:');
         cy.get("div[class='login_password'] h4").should('have.text','Password for all users:');
       
      });
    
    
    
    
    });
    
    