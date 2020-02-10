describe('Authentication test', () => {
  it('should redirect to homepage after successful login', () => {
    cy.server();
    console.log(`${Cypress.env('BACKEND_URL')}/auth/login`);
    cy.route('POST', `${Cypress.env('BACKEND_URL')}/auth/login`).as('login');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.clearCookies({ domain: null });
    cy.visit('/authenticate');
    cy.get('[data-cy=username]').type(Cypress.env('USERNAME'));
    cy.get('[data-cy=password]').type(Cypress.env('PASSWORD'));
    cy.get('[data-cy=submit]').click();
    cy.wait('@login').then(() => {
      cy.get('[data-cy=movieFilter]').should('be.visible');
      cy.get('[data-cy=logout]').should('be.visible');
    });
  });
});
