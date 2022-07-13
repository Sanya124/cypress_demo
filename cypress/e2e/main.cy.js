Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
/*
Пришлось подключить из-за ошибки на фронте:
"Uncaught Error: [MixItUp] An invalid selector or 
element reference was passed to the mixitup factory function"
*/

describe('Проверка работы сайта krasyar.ru', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Проверка работы поиска', () => {
    cy.get('#title-search-input')
      .type('колбаса')
      .wait(300)    // В данной ситуации фронт ждёт приблизительно такое время и отправляет запрос
      .should('have.value', 'колбаса');
      
    cy.get('.title-search-result');

    cy.get('.all_result_title')
      .click();

    cy.get('.title_box')
      .contains('Результаты поиска');

    cy.get('form > [type="text"]')
      .should( 'have.value', 'колбаса');
  });

  it('Переход по кнопке навигации "Премия"', () => {
    cy.get('.premiya')
      .click()

    cy.url()
      .should('include', 'https://premia.krasyar.ru/')
  });
});