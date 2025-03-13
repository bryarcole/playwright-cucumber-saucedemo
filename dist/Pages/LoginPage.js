"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    assertLoginSuccess() {
        throw new Error('Method not implemented.');
    }
    assertLoginFailure() {
        throw new Error('Method not implemented.');
    }
    constructor(page) {
        this.page = page;
    }
    async navigateToLogin() {
        await this.page.goto('https://www.saucedemo.com/v1/index.html');
    }
    async login(username, password) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
}
exports.LoginPage = LoginPage;
