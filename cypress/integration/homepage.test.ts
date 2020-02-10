describe('homepage', () => {
  it('should render movies', () => {
    cy.visit('/');
    cy.get('[data-cy=navbar]').should('be.visible');
    cy.get('[data-cy=movieFilter]').should('be.visible');
    cy.get('[data-cy=moviesGrid]').should('be.visible');
  });
});
