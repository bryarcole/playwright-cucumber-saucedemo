import { Page } from 'playwright';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/v1/index.html');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
