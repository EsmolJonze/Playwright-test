const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");
const url = 'https://www.saucedemo.com/';
const usernameInput = 'data-test=username';
const passwordInput = 'data-test=password';
const loginButton = 'data-test=login-button';



//Scenario: Enter in the webside
Given('I am in saucedemo', async function () {
    await page.goto(url)
 })

When('enter a valid username and password', async function () {
  await page.locator(usernameInput).fill('standard_user');
  await page.locator(passwordInput).fill('secret_sauce');
})

When('click in login', async function () {
    await page.locator(loginButton).click()
})

Then('appears in welcome page', async function () {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})






