import { validFormValues } from '../../src/mock/formMock';

const formsPageTestId = 'formsPage';
const mainPageTestId = 'libraryPage';
const formTestIds = {
  poster: 'poster',
  title: 'title',
  description: 'description',
  titleLang: 'titleLang',
  canonicalTitle: 'canonicalTitle',
  startDate: 'startDate',
  status: 'status',
};

describe('main flow', () => {
  it('should type into input, go to another page and save value after return', () => {
    cy.visit('/');
    cy.get('[data-testid=searchInput]').type('Naruto');
    cy.get('[data-testid=serachButton]').click();
    cy.get(`[data-testid=${formsPageTestId}]`).click();
    cy.url().should('include', '/forms');
    cy.get(`[data-testid=${mainPageTestId}]`).click();
    cy.url().should('include', '/library');
    cy.get('[data-testid=searchInput]').should('have.value', 'Naruto');
  });
  it('should fill the form with correct values and add a card. Card should be saved', () => {
    cy.visit('/forms');
    // Fill the form
    cy.get(`[data-testid=${formTestIds.description}]`).type(validFormValues.description);
    cy.get(`[data-testid=${formTestIds.title}]`).type(validFormValues.title);
    cy.get(`[data-testid=${formTestIds.canonicalTitle}]`).check();
    cy.get(`[data-testid=${formTestIds.status}-${validFormValues.status}]`).check();
    cy.get(`[data-testid=${formTestIds.titleLang}]`).select(validFormValues.titleLang);
    cy.get(`[data-testid=${formTestIds.poster}]`).selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'test.png',
      mimeType: 'image/png',
      lastModified: Date.now(),
    });
    cy.get('[data-testid=formSubmitButton]').click();
    cy.get('[data-testid=card-0]').should('exist');
    // check if form saved
    cy.get(`[data-testid=${mainPageTestId}]`).click();
    cy.get(`[data-testid=${formsPageTestId}]`).click();
    cy.get('[data-testid=card-0]').should('exist');
    cy.get('[data-testid=card-0]').should('contain', validFormValues.title);
  });
});
