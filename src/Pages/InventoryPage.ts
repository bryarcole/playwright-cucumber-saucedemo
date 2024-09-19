import { Page } from 'playwright';

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart(itemName: string): Promise<void> {
    await this.page.click(`button[name="add-to-cart-${itemName}"]`);
  }

  async openCart(): Promise<void> {
    await this.page.click('.shopping_cart_link');
  }

  async proceedToCheckout(): Promise<void> {
    await this.page.click('button[name="checkout"]');
  }

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('input[name="continue"]');
  }

  async finishCheckout(): Promise<void> {
    await this.page.click('button[name="finish"]');
  }
}
