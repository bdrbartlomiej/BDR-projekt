import { test, expect } from '@playwright/test';
import { fakerPL } from '@faker-js/faker';
import dotenv from 'dotenv';

dotenv.config();

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto(process.env.WWW!);
  await expect(page.getByRole('banner').getByRole('link', { name: 'Sklep Playwright' })).toBeVisible();

});

async function goToShopPage(page: Page) {
  await page.getByRole('link', { name: 'Sklep', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Sklep' })).toBeVisible();
}

async function goToProductPage(page: Page) {
  await page.getByText('Vintage Typewriter').click();
  await expect(page.getByRole('heading', { name: 'Vintage Typewriter' })).toBeVisible();
}

async function addToCartClick(page: Page) {
  await page.getByRole('button', { name: 'Dodaj do koszyka', exact: true }).click();
  await expect(page.getByText('Zobacz koszyk „Vintage')).toBeVisible();
}

async function showCart(page: Page) {
  await page.getByRole('link', { name: 'Zobacz koszyk' }).click();
  await expect(page.getByRole('heading', { name: 'Koszyk' })).toBeVisible();
}

async function clickSentShipingAndGoToPayment(page: Page) {
  await page.getByText('Wysyłka Priorytetowa Gołębiem').click();
  await page.getByRole('link', { name: 'Przejdź do płatności' }).click();
  await expect(page.getByRole('heading', { name: 'Zamówienie' })).toBeVisible();
}

async function enterOrderData(page: Page) {
  await page.getByLabel('Adres e-mail').fill(fakerPL.internet.email({provider: 'example.com' }))
  await page.getByRole('radio', { name: 'Odbiór osobisty bezpłatnie' }).click()
  await page.getByLabel('Imię').fill(fakerPL.person.firstName())
  await page.getByLabel('Nazwisko').fill(fakerPL.person.lastName())
  await page.getByLabel('Adres', { exact: true }).fill(fakerPL.location.street() + ' ' + fakerPL.number.int({max: 50}))
  await page.getByLabel('Polska, Kraj / region').fill('Polska')
  await page.getByLabel('Polska', { exact: true }).getByText('Polska').click()
  await page.getByLabel('Kod pocztowy').fill(fakerPL.location.zipCode())
  await page.getByLabel('Miejscowość').fill(fakerPL.location.city())
  await page.getByLabel('Telefon (opcjonalnie)').fill(fakerPL.phone.number());
}

async function selectPaymentType(page: Page) {
  await page.getByLabel('Za pobraniem').check();
}

async function buyAndPay(page: Page) {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Kupuję i płacę' }).click();
  await expect(page.getByText('Dziękujemy. Otrzymaliśmy Twoje zamówienie.')).toBeVisible();
}

test('Złożenie zamówienia', async ({ page }) => {
  //given
  await goToShopPage(page)
  await goToProductPage(page)
  //when
  await addToCartClick(page)
  await showCart(page)
  await clickSentShipingAndGoToPayment(page)
  //then
  await enterOrderData(page)
  await selectPaymentType(page)
  await buyAndPay(page)
});