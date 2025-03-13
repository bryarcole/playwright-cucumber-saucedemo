"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
let page;
let context;
(0, cucumber_1.Given)('I open the Suace Demo login page', async function () {
    await this.page.goto('https://www.saucedemo.com/');
});
