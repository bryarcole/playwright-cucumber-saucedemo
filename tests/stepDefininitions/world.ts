import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';

export class CustomWorld extends World {
    public page!: Page;
    public context!: BrowserContext;
    private browser!: Browser;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async init() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async cleanup() {
        await this.browser?.close();
    }
}

setWorldConstructor(CustomWorld); 