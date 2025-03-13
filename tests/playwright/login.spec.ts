import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test('Successful login with valid credentials', async ({ page }) => {
    // Given I open the Sauce Demo login page
    await page.goto('/');

    // When I enter valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Then I should be redirected to the products page
    await expect(page).toHaveURL('/inventory.html');
  });

  test('Unsuccessful login with invalid credentials', async ({ page }) => {
    // Given I open the Sauce Demo login page
    await page.goto('/');

    // When I enter invalid credentials
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'invalid_password');
    await page.click('#login-button');

    // Then I should see an error message
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });
}); 