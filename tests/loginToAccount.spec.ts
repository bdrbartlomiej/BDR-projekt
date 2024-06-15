import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv'
import { Ecomm } from '../pageObjects/ecomm';
dotenv.config()

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Poprawne logowanie do sklepu', async ({ page }) => {
  //given

  // await page.goto('https://playwright.adamowicz.pro/');
  // await expect(page.getByRole('banner').getByRole('link', { name: 'Sklep Playwright' })).toBeVisible();
  // await page.locator('.wp-block-woocommerce-customer-account > a').click();
  // await expect(page.getByRole('heading', { name: 'Moje konto' })).toBeVisible();

  await ecomm.menu().goToLogin();

  //when

  // await page.getByLabel('Nazwa użytkownika lub adres e-mail *').fill(process.env.LOGIN!);
  // await page.getByLabel('Hasło *').fill(process.env.PASSWORD!);
  // await page.getByRole('button', { name: 'Zaloguj się' }).click();

  await ecomm.login().LoginToPanel();

  //then

  // await expect(page.getByRole('link', { name: 'Kokpit' })).toBeVisible();
  // await expect(page.getByRole('link', { name: 'Zamówienia', exact: true })).toBeVisible();
  // await page.locator('p').filter({ hasText: 'Witaj playwright (nie jesteś' }).getByRole('link').click();

  await ecomm.account().AccountPage();
});