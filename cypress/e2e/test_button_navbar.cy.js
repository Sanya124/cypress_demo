const openWebSite = (name_button, url) => {
  cy.contains(name_button)
    .click();

  cy.url()
    .should('include', url);
};

describe('Test web-site kopilkaclub.ru', function() {
  beforeEach(function () {
    cy.visit('/');
  });

  it('Test click-through to "Акции"', function () {
    openWebSite('Акции', '/specials');
  });

  it('Test click-through to "Бонусы"', function () {
    openWebSite('Бонусы', '/bonuses');
  });

  it('Test click-through to "Вопрос-Ответ"', function () {
    openWebSite('Вопрос-Ответ', '/faq');
  });
});
