import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';

interface LoginCredentials {
    username: string;
    password: string;
}

Given('I have valid credentials', async function(this: CustomWorld) {
    this.apiCredentials = {
        username: 'standard_user',
        password: 'secret_sauce'
    };
});

Given('I have invalid credentials', async function(this: CustomWorld) {
    this.apiCredentials = {
        username: 'invalid_user',
        password: 'invalid_password'
    };
});

When('I send a POST request to login', async function(this: CustomWorld) {
    const response = await this.request.post('/api/auth/login', {
        data: this.apiCredentials
    });
    this.apiResponse = response;
});

Then('I should receive a successful response', async function(this: CustomWorld) {
    expect(this.apiResponse.ok()).toBeTruthy();
    expect(this.apiResponse.status()).toBe(200);
});

Then('I should receive an error response', async function(this: CustomWorld) {
    expect(this.apiResponse.ok()).toBeFalsy();
    expect(this.apiResponse.status()).toBe(401);
});

Then('the response should contain an access token', async function(this: CustomWorld) {
    const responseBody = await this.apiResponse.json();
    expect(responseBody).toHaveProperty('token');
});

Then('the error message should be {string}', async function(this: CustomWorld, expectedMessage: string) {
    const responseBody = await this.apiResponse.json();
    expect(responseBody.message).toBe(expectedMessage);
}); 