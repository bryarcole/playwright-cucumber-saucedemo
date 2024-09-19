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

  async assertLoginSuccess(): Promise<void> {
    await this.page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
  }

  async assertLoginFailure(): Promise<void> {
    const errorMessage = await this.page.locator('[data-test="error"]');
    await errorMessage.waitFor({ state: 'visible' });
  }
}
