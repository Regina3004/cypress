describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
      cy.visit('https://login.qa.studio/'); // Зашли на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цв.кн. Восст.пароль

      cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
      cy.get('#pass').type('iLoveqastudio1') ;  // Ввели верный пароль
      cy.get('#loginButton').click() ; // нажала войти

      cy.get('#messageHeader').contains ('Авторизация прошла успешно') // проверяю,что после авт. вижу текст
      cy.get('#messageHeader').should('be.visible');// текст виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и виден пользователю
    })
 })

 
 //+Найти поле логин и ввести верный логин
 //+Найти поле пароль ввести правильный пароль
 //+Найти кнопку ВОЙТИ нажать войти
 // проверить,что авторизация прошла успешно
  

 it('верный логин и неверный пароль', function () {
      cy.visit('https://login.qa.studio/'); // Зашли на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цв.кн. Восст.пароль

      cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
      cy.get('#pass').type('iLoveqastudio7') ;  // Ввели неверный пароль
      cy.get('#loginButton').click() ; // нажала войти

      cy.get('#messageHeader').contains ('Такого логина или пароля нет') // проверяю,что после авт. вижу текст
      cy.get('#messageHeader').should('be.visible');// текст виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и виден пользователю
    })

    it('проверка @-и в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цв.кн. Восст.пароль
  
        cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
        cy.get('#pass').type('iLoveqastudio1') ;  // Ввели верный пароль
        cy.get('#loginButton').click() ; // нажала войти
  
        cy.get('#messageHeader').contains ('Нужно исправить проблему валидации') // проверяю,что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и виден пользователю
      })
 
        it('проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цв.кн. Восст.пароль
        cy.get('#forgotEmailButton').click() ; // нажала восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввела почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажала отправить код
        cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail') // проверяю,текст на совпадение
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и виден пользователю
      })
      it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цв.кн. Восст.пароль
  
        cy.get('#mail').type('german@dolnikov4.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1') ;  // Ввели верный пароль
        cy.get('#loginButton').click() ; // нажала войти
  
        cy.get('#messageHeader').contains ('Такого логина или пароля нет') // проверяю,что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и виден пользователю
      })
      it('Заглавные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цв.кн. Восст.пароль
  
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1') ;  // Ввела верный пароль
        cy.get('#loginButton').click() ; // нажала войти
  
        cy.get('#messageHeader').contains ('Авторизация прошла успешно') // проверяю,что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и виден пользователю
      })