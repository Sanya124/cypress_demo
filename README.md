# This repository is intended for test work in Cypress


## List of branches
```
- master (default)    | Description repository
- shop                | Testing private project shop
- kopilkaclub.ru      | Testing web-site
- krasyar.ru          | Testing web-site
- sibnet.ru           | Testing web-site

```


## Description of branches
### master
Branch **master** contains only README.md with description
<br>

### shop
**Branch shop for private project [shop (github)](https://github.com/Sanya124/shop)**\
Branch **shop** contains changes in directory:
```
|- cypress
  |- e2e
    |- add-to-cart.cy.js      | Testing the add item in cart

|- cypress.config.js          | Base url (localhost), screen resolution
|- package.json               | Added parameter for run from console
|- README.md                  | Description project and launch guide
```
<br>

### kopilkaclub.ru
Branch **kopilkaclub.ru** contains changes in directory:
```
|- cypress
  |- e2e
    |- test_button_navbar.cy.js   | Testing click on the link
    |- test_choosen_region.cy.js  | Testing the selection of the region
    |- test_choosen_city.cy.js    | Testing the selection of the city
    |- test_working_hours.cy.js   | Testing popup working hours

|- cypress.config.js              | Base url, screen resolution
|- README.md                      | Description project and launch guide
```
<br>

### krasyar.ru
Branch **krasyar.ru** contains changes in directory:
```
|- cypress
  |- e2e
    |- main.cy.js     | Testing the search and click on the link

|- cypress.config.js  | Base url, screen resolution
|- README.md          | Description project and launch guide
```
<br>

### sibnet.ru
Branch **sibnet.ru** contains changes in directory:
```
|- cypress
  |- downloads
  |- integration
    |- test_task.js                   | Testing auth, checking url and email in Profile Settings
    |- uncaughtExceptionDisabled.js   | Disabled uncaught exception on web-site

|- cypress.js                         | Base url, screen resolution
|- README.md                          | Description project and launch guide
```
<br>
