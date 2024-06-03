import { test, expect } from '@playwright/test';

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('https://playwright.adamowicz.pro/');
    await expect(page.getByRole('banner').getByRole('link', { name: 'Sklep Playwright' })).toBeVisible();
  
  });