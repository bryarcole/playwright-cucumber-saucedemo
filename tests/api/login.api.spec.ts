import { test, expect } from '@playwright/test';

test.describe('Login API Functionality', () => {
    test('Successful login with valid credentials', async ({ request }) => {
        // Given I have valid credentials
        const credentials = {
            username: 'standard_user',
            password: 'secret_sauce'
        };

        // When I send a POST request to login
        const response = await request.post('/api/auth/login', {
            data: credentials
        });

        // Then I should receive a successful response
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        // And the response should contain an access token
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('token');
    });

    test('Unsuccessful login with invalid credentials', async ({ request }) => {
        // Given I have invalid credentials
        const credentials = {
            username: 'invalid_user',
            password: 'invalid_password'
        };

        // When I send a POST request to login
        const response = await request.post('/api/auth/login', {
            data: credentials
        });

        // Then I should receive an error response
        expect(response.ok()).toBeFalsy();
        expect(response.status()).toBe(401);

        // And the error message should be "Invalid credentials"
        const responseBody = await response.json();
        expect(responseBody.message).toBe('Invalid credentials');
    });
}); 