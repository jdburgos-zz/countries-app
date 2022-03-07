describe('Country detail page', () => {
  const country = 'Colombia';
  const countryFlag = 'https://flagcdn.com/co.svg';

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=input-search]').type(`${country}{enter}`);
    cy.get('[data-test=country-item]').first().click();
    cy.location({ timeout: 6000 }).should(location => {
      expect(location.href).to.eq(`${location.origin}/country-detail/${country}`);
    });
  });

  it("tries to go the country's detail", () => {
    cy.title().should('include', `Countries App - ${country}`);
    cy.get('button').first().should('have.text', 'Back');
    cy.get('h1').should('have.text', country);
    cy.get('img').invoke('attr', 'src').should('eq', countryFlag);
  });

  it('tries go back to home', () => {
    cy.get('button').first().should('have.text', 'Back').click();
    cy.location({ timeout: 6000 }).should(location => {
      expect(location.href).to.eq(`${location.origin}/`);
    });
  });
});
