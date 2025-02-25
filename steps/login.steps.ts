import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page, BrowserContext } from 'playwright';

let page: Page;
let context: BrowserContext;

Given('I open the Sauce Demo login page', async function () {
    context = await this.browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
});

When('I enter valid credentials', async function () {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
});

When('I enter invalid credentials', async function () {
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
});

Then('I should be redirected to the products page', async function () {
    await expect(page).toHaveURL(/inventory.html/);
});

Then('I should see an error message', async function () {
    const errorMessage = await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain('Epic sadface');
});
