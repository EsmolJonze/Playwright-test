const {Given} = require('@cucumber/cucumber')
const url = 'https://www.saucedemo.com/';
const usernameInput = 'data-test=username';
const passwordInput = 'data-test=password';
const loginButton = 'data-test=login-button';

Given('Login', async function () {
    await page.goto(url)
    await page.locator(usernameInput).fill('standard_user');
    await page.locator(passwordInput).fill('secret_sauce');
    await page.locator(loginButton).click()
})