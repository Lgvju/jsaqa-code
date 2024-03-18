// @ts-check
const { chromium } = require('@playwright/test');

module.exports = {
  projects: [
    {
      name: 'Chromium',
      use: { 
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        slowMo: 500, 
        //screenshot: 'only-on-failure',
        use: async ({ browser, page, context }) => {
          return await browser.newPage();
        }, 
       }, 
    },
  ]  
};