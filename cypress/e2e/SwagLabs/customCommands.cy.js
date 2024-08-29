describe('Login Tests', () => {
    
    beforeEach(() => {                                 //Adding Hooks such that it executes before each it block 
      cy.visit('https://www.saucedemo.com');
    });
  
    // Using login() to login to standard_user

    it('Verify page should log in successfully', () => {
      cy.login('standard_user', 'secret_sauce');
      cy.verifyWelcomeMessage();
    
    });

   

    it('Verify page should log in successfully', () => {
      cy.login('problem_user', 'secret_sauce');
      cy.verifyWelcomeMessage();
    
    //Above Using login() to login to problem_user
    //Therefore, we can use same login() to both standard_user and problem_user


    });


  
 

});
  