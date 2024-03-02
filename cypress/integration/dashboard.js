describe('Dashboard', () => {
    before(() => {
      Cypress.config('baseUrl', 'http://127.0.0.1:8080');
    });
  
    it('should redirect to the home page for an unauthorized user', () => {
      cy
        .visit('/dashboard')
        .url().should('include', '/');
    });
  });