describe('Movie details', () => {
  before(() => {
    // remove this when issue will be solved
    // https://github.com/cypress-io/cypress/issues/781
    cy.visit('/');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.clearCookies({ domain: null });
    cy.reload();
  });

  it('should render movie details', () => {
    cy.visit('/movie/419704');
    cy.get('[data-cy=movieOverview]').should('be.visible');
    cy.get('[data-cy=movieActors]').should('be.visible');
    cy.get('[data-cy=movieGallery]').should('be.visible');
  });

  it('should redirect to login if an unauthenticated user clicks on add to watchlist', () => {
    cy.visit('/movie/419704');
    cy.get('[data-cy=addToWatchList]').click();
    cy.get('[data-cy=loginForm]').should('be.visible');
  });
});
