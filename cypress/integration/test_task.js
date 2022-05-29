import '../../cypress.json'
import './uncaughtExceptionDisabled.js'
// Подключено из-за проблем на странице - не загружались ресурсы,
// что приводило к падению теста


const signInAs = (login, password) => {
	cy.contains('Вход')
	  .click()

	cy.get('[name="login"]')
	  .type(login)

	cy.get('[name="password"]')
	  .clear()
	  .type(password)

	cy.contains('Войти')
	  .click()
}

describe('Тестовое задание', () => {
	it('Убедиться что сайт открывается', () => {
		cy.visit('/')
	})

	it('Найти кнопку "Вход"', () => {
		cy.contains('Вход')
	})

	it('Залогиниться как тестировщик', () => {
		signInAs('qa-tester', 'qa-tester')

		cy.url()
		  .should('include', '/profile/edit')
	})

	it('Email пользователя указан', () => {
		cy.get('[name="email"]')
		  .should('have.value', 'pp-sansip@yandex.kz')
	})
})
