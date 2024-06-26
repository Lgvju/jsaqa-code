const { test, expect } = require('@playwright/test');
const { chromium } = require("playwright");
const { 
    email,
    password,
    emailInvalid,
    passwordInvalid  
} = require("../user.js");
 

test.describe("Авторизация", () => {

  test('Неуспешная авторизация', async ({ page }) => {
    const browser = await chromium.launch({
    });  
   await page.goto('https://netology.ru/');
   await page.getByRole('link', { name: 'Войти' }).click();
   await page.getByPlaceholder('Email').click();
   await page.getByPlaceholder('Email').fill(emailInvalid);
   await page.getByPlaceholder('Пароль').fill(passwordInvalid);
   await page.getByTestId('login-submit-btn').click();
   await page.waitForSelector('[data-testid="login-error-hint"]', { timeout: 2000 });
   const textError = await page.$eval('[data-testid="login-error-hint"]', (element) => element.textContent);
   const expectedText = "Вы ввели неправильно логин или пароль";
   expect(textError).toBe(expectedText); 
   await page.screenshot({ path: "screenshotFailed.png", fullPage: true });
  });

  test('Успешная авторизация', async ({ page }) => {
      const browser = await chromium.launch({
     }); 
    await page.goto('https://netology.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Пароль').fill(password);
    await page.getByTestId('login-submit-btn').click();
    //await expect(page.getByTestId('header-top').getByRole('link', { name: 'Медиа Нетологии' })).toBeVisible();  
    await expect(page).toHaveTitle('Нетология — обучение современным профессиям онлайн'); 
    await page.screenshot({ path: "screenshotSuccessful.png", fullPage: true });
  });
 });