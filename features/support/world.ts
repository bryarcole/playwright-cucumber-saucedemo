import { Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';

let browser: Browser;
export let page: Page;

class CustomWorld {
  constructor() {
    // Custom world setup if needed
  }
}

setWorldConstructor(CustomWorld);

// Start browser before tests
Before(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

// Close browser after tests
After(async () => {
  await browser.close();
});
