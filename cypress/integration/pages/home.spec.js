describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders de base content', () => {
    cy.title().should('include', 'Countries App - Home');
    cy.contains('Where in the world?');
    cy.contains('dark Mode');
    cy.contains('loading...');
    cy.get('[data-test=input-search]');
    cy.get('.ant-input-search-button');
    cy.get('[data-test=region-filter]');
  });

  it('changes the theme', () => {
    cy.contains('dark Mode').click();
    cy.contains('light Mode');
    cy.get('.main-wrapper').should('have.class', 'dark-theme');

    cy.contains('light Mode').click();
    cy.contains('dark Mode');
    cy.get('.main-wrapper').should('have.class', 'light-theme');
  });

  describe('tries to search a country', () => {
    describe("when doesn't exist", () => {
      afterEach(() => {
        cy.get('[data-test=region-filter] + div').should('not.have.length');
        cy.get('.ant-input-suffix').children('.ant-input-clear-icon').click();
        cy.get('[data-test=region-filter] + div').should('have.length.at.most', 1);
      });

      it('enter event', () => {
        cy.get('[data-test=input-search]').type('unknown{enter}');
        cy.get('.ant-input-suffix').children('.ant-input-clear-icon');
      });

      it('click button event', () => {
        cy.get('[data-test=input-search]').type('unknown');
        cy.get('.ant-input-suffix').children('.ant-input-clear-icon');
        cy.get('.ant-input-search-button').click();
      });
    });

    describe('when does exist', () => {
      const searchText = 'Colombia';
      const countryFlag = 'https://flagcdn.com/co.svg';

      afterEach(() => {
        cy.get('[data-test=region-filter] + div').should('have.length.at.most', 1);
        cy.get('img').invoke('attr', 'src').should('eq', countryFlag);
        cy.get('[data-test=region-filter] + div h3').first().should('have.text', searchText);
        cy.get('.ant-input-suffix').children('.ant-input-clear-icon').click();
        cy.get('[data-test=region-filter] + div').should('have.length.at.most', 1);
      });

      it('enter event', () => {
        cy.get('[data-test=input-search]').type(`${searchText}{enter}`);
        cy.get('.ant-input-suffix').children('.ant-input-clear-icon');
      });

      it('click button event', () => {
        cy.get('[data-test=input-search]').type(`${searchText}{enter}`);
        cy.get('.ant-input-suffix').children('.ant-input-clear-icon');
        cy.get('.ant-input-search-button').click();
      });
    });
  });

  describe('tries to filter by region', () => {
    it('when click the Oceania option ', () => {
      const searchText = 'Tokelau';

      cy.get('[data-test=region-filter] .ant-select-selector').click();
      cy.get('div[title=Oceania]').click();
      cy.get('[data-test=region-filter] + div').should('have.length.at.most', 1);
      cy.get('[data-test=region-filter] + div h3').first().should('have.text', searchText);
      cy.get('[data-test=region-filter] .ant-select-clear').click();
      cy.get('[data-test=region-filter] + div').should('have.length.at.most', 1);
    });
  });
});
