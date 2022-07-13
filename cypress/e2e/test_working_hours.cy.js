describe('Test working hours', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('Show working hours', function () {
    cy.contains('Режим работы')
      .invoke('show')
      .click();

    cy.get('.tooltip-inner')
      .contains('В будние дни с 8.00 до 21.00,')
      .contains('В выходные с 10.00 до 21.00.');
  });
});
