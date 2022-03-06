describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("tries to go the country's detail", () => {
    const searchText = 'Colombia';

    cy.get('[data-test=input-search]').type(`${searchText}{enter}`);
    cy.get('[data-test=country-item]').first().click();
  });
});
