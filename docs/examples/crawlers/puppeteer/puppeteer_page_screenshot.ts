import { KeyValueStore, launchPuppeteer } from '@crawlers/puppeteer';

const keyValueStore = await KeyValueStore.open();

const url = 'http://www.example.com/';
// Start a browser
const browser = await launchPuppeteer();

// Open new tab in the browser
const page = await browser.newPage();

// Navigate to the URL
await page.goto(url);

// Capture the screenshot
const screenshot = await page.screenshot();

// Save the screenshot to the default key-value store
await keyValueStore.setValue('my-key', screenshot, { contentType: 'image/png' });

// Close Puppeteer
await browser.close();
