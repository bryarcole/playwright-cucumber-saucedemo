import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/world';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('I am on the SauceDemo login page', async () => {
  loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
});

When('I login with valid credentials', async () => {
  await loginPage.login('standard_user', 'secret_sauce');
});

When('I login with invalid credentials', async () => {
  await loginPage.login('invalid_user', 'invalid_password');
});

Then('I should be redirected to the inventory page', async () => {
  await loginPage.assertLoginSuccess();
});

Then('I should see an error message', async () => {
  await loginPage.assertLoginFailure();
});

When('I add several items to the cart', async () => {
  inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCart('sauce-labs-backpack');
  await inventoryPage.addItemToCart('sauce-labs-bike-light');
});

Then('I should see {string} items in the cart', async (count: string) => {
  const cartBadge = await page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText(count);
});

When('I proceed to checkout', async () => {
  await inventoryPage.openCart();
  await inventoryPage.proceedToCheckout();
});

When('I fill in my details as {string}, {string}, {string}', async (firstName: string, lastName: string, postalCode: string) => {
  await inventoryPage.fillCheckoutDetails(firstName, lastName, postalCode);
});

Then('I should see the order confirmation page', async () => {
  await inventoryPage.finishCheckout();
  const confirmationMessage = await page.locator('.complete-header');
  await expect(confirmationMessage).toBeVisible();
  await expect(confirmationMessage).toHaveText('THANK YOU FOR YOUR ORDER');
});
