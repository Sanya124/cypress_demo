const addToCart = (name_item) => {
  cy.contains('h2', name_item)
    .parent()
    .find('.add-to-cart')
    .click();

  cy.get('.cart-button').click();

  cy.get('.order > h2')
    .should('contain', name_item);
};

describe('Test react-app shop', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('.cart-button').click();

    cy.get('.shop-cart > .empty')
      .should('contain', 'Товаров нет');

    cy.get('.cart-button').click();
  });

  it('Add item in order', () => {
    addToCart('Снек');
  });
});
