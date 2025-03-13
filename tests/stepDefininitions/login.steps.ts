import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';

Before(async function(this: CustomWorld) {
    await this.init();
});

After(async function(this: CustomWorld) {
    await this.cleanup();
});

Given('I open the Sauce Demo login page', async function(this: CustomWorld) {
    await this.page.goto('https://www.saucedemo.com/');
});

When('I enter valid credentials', async function(this: CustomWorld) {
    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');
    await this.page.click('#login-button');
});

When('I enter invalid credentials', async function(this: CustomWorld) {
    await this.page.fill('#user-name', 'invalid_user');
    await this.page.fill('#password', 'invalid_password');
    await this.page.click('#login-button');
});

Then('I should be redirected to the products page', async function(this: CustomWorld) {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

Then('I should see an error message', async function(this: CustomWorld) {
    const errorMessage = await this.page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

