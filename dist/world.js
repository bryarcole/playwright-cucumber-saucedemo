"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
class CustomWorld extends cucumber_1.World {
    async init() {
        this.browser = await playwright_1.chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
}
(0, cucumber_1.setWorldConstructor)(CustomWorld);
