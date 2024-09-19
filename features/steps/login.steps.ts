import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/world';

// Step for navigating to the login page
Given('I am on the SauceDemo login page', async () => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
});

// Step for logging in with valid credentials
When('I login with valid credentials', async () => {
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});

// Step for logging in with invalid credentials
When('I login with invalid credentials', async () => {
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', 'invalid_password');
  await page.click('#login-button');
});

// Step for checking successful login
Then('I should be redirected to the inventory page', async () => {
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
});

// Step for checking error message on invalid login
Then('I should see an error message', async () => {
  const errorMessage = await page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match');
});
