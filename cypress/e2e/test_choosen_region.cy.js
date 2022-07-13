const choosenRegion = (region, city) => {
  cy.get('.current-region')
    .click();

  cy.contains(region)
    .click();

  cy.get('.current-region')
    .contains(region);

  cy.get('.current-city')
    .contains(city);
};

describe('Test choosen region', function() {
  beforeEach(function () {
    cy.visit('/');
  });

  it('List regions contains 5 lines', function () {
    cy.visit('https://kopilkaclub.ru/');

    cy.get('.current-region').click();

    cy.get('ul[class="dropdown-menu region-selector"] > li')
      .should('have.length', 5);
  });

  it('Test choosen region "Красноярский Край"', function () {
    choosenRegion('Красноярский Край', 'Красноярск');
  });

  it('Test choosen region "Республика Хакасия"', function () {
    choosenRegion('Республика Хакасия', 'Абакан');
  });

  it('Test choosen region "Иркутская Область"', function () {
    choosenRegion('Иркутская Область', 'Ангарск');
  });

  it('Test choosen region "Кемеровская Область"', function () {
    choosenRegion('Кемеровская Область', 'Кемерово');
  });

  it('Test choosen region "Республика Тыва"', function () {
    choosenRegion('Республика Тыва', 'Кызыл');
  });
});
