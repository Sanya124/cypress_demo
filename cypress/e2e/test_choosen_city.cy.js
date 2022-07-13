const choosenCity = (region, city, city_next) => {
  cy.get('.current-region')
    .click();

  cy.contains(region)
    .click();

  cy.get('.current-region')
    .contains(region);

  cy.get('.current-city')
    .click();

  cy.get('.city-desc')
    .contains(city_next)
    .click();

  cy.get('.current-city')
    .contains(city_next);
};

describe('Test choosen city', function() {
  beforeEach(function () {
    cy.visit('/');
  });
  
  it('Test choosen city "Ачинск" in region\'s "Красноярский Край"', function () {
    choosenCity('Красноярский Край', 'Красноярск', 'Ачинск');
  });

  it('Test choosen city "Иркутск" in region\'s "Иркутская Область"', function () {
    choosenCity('Иркутская Область', 'Ангарск', 'Иркутск');
  });
});
