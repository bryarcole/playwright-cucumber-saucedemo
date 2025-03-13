import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page, BrowserContext } from 'playwright';

let page: Page;
let context: BrowserContext;

Given('I open the Sauce Demo login page', async function(){
    await this.page.goto('https://www.saucedemo.com/');
});

When('I enter valid credentials', async function(){
    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');
    await this.page.click('#login-button');
});

When('I enter invalid credentials', async function(){
    await this.page.fill('#user-name', 'invalid_user');
    await this.page.fill('#password', 'invalid_password');
    await this.page.click('#login-button');
});

Then('I should be redirected to the products page', async function(){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

Then('I should see an error message', async function(){
    const errorMessage = await this.page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

