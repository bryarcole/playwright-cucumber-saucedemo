import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, firefox, Browser, Page, BrowserContext } from 'playwright';

export class CustomWorld extends World {
    public page!: Page;
    public context!: BrowserContext;
    private browser!: Browser;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async init() {
        const browserType = process.env.BROWSER === 'firefox' ? firefox : chromium;
        this.browser = await browserType.launch({ 
            headless: process.env.HEADLESS === 'true' 
        });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async cleanup() {
        await this.browser?.close();
    }
}

setWorldConstructor(CustomWorld); 