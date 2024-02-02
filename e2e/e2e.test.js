import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.validating-form');
  });

  test('invalid number', async () => {
    await page.goto(baseUrl);
    const inn = await page.$('.input-text-form');
    const but = await page.$('.validate-button');

    await inn.type('5547596092312953');
    await but.click();

    await page.waitForSelector('.input-text-form.invalid-type-form');

  });

  test('valid number', async () => {
    await page.goto(baseUrl);
    const inn = await page.$('.input-text-form');
    const but = await page.$('.validate-button');

    await inn.type('5547596092312954');
    await but.click();

    await page.waitForSelector('.payment-system-mastercard.valid-type');

  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

});