const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");
const url = 'https://www.saucedemo.com/';
const addToCartBackPackButton = 'data-test=add-to-cart-sauce-labs-backpack';
const cardButton = '#shopping_cart_container';
const checkoutButton = 'data-test=checkout';
const firstName = 'data-test=firstName';
const lastName = 'data-test=lastName';
const postalCode = 'data-test=postalCode';
const continueButton = 'data-test=continue';
const finishButton = 'data-test=finish';


//Scenario: Are in inventory page and need to add diferents products in a cart and checkout

When('put in cart backpack and tshirt', async function () {
    await page.locator(addToCartBackPackButton).click();
  })

When('click in cart button', async function () {
    await page.locator(cardButton).click();
  })

Then('validate items in the cart', async function () {
    await expect(page.locator('.inventory_item_name')).toHaveText("Sauce Labs Backpack");
})

Then('proceed with checkout', async function () {
    await page.locator(checkoutButton).click();
})

Then('fill the data and continue', async function () {
    await page.locator(firstName).fill('Sergi');
    await page.locator(lastName).fill('Olmos');
    await page.locator(postalCode).fill('08733');
    await page.locator(continueButton).click();
})

Then('Verify the price and finish', async function () {
    await expect(page.locator('.summary_total_label')).toHaveText("Total: $32.39");
    await page.locator(finishButton).click();
    await expect(page.locator('.complete-header')).toBeVisible();

})




