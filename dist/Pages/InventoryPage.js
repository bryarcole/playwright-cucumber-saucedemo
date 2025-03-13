"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryPage = void 0;
class InventoryPage {
    constructor(page) {
        this.page = page;
    }
    async addItemToCart(itemName) {
        await this.page.click(`button[name="add-to-cart-${itemName}"]`);
    }
    async openCart() {
        await this.page.click('.shopping_cart_link');
    }
    async proceedToCheckout() {
        await this.page.click('button[name="checkout"]');
    }
    async fillCheckoutDetails(firstName, lastName, postalCode) {
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);
        await this.page.click('input[name="continue"]');
    }
    async finishCheckout() {
        await this.page.click('button[name="finish"]');
    }
}
exports.InventoryPage = InventoryPage;
