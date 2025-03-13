import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';

class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    async init() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
}

setWorldConstructor(CustomWorld);