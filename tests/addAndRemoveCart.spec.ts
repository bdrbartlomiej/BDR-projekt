import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.adamowicz.pro/');
  await expect(page.getByRole('banner').getByRole('link', { name: 'Sklep Playwright' })).toBeVisible();
});

async function goToShopLink(page: Page) {
  await page.getByRole('link', { name: 'Sklep', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Sklep' })).toBeVisible();
}

async function addHeadphonesToCart(page: Page) {
  await page.getByText('Hi-Fi Headphones').click();
  await expect(page.getByRole('heading', { name: 'Hi-Fi Headphones' })).toBeVisible();
  await page.getByRole('button', { name: 'Dodaj do koszyka', exact: true }).click();
}

async function showCart(page: Page) {
  await expect(page.getByText('Zobacz koszyk „Hi-Fi')).toBeVisible();
  await page.getByRole('link', { name: 'Zobacz koszyk' }).click();
  await expect(page.getByRole('heading', { name: 'Koszyk' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Hi-Fi Headphones' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Przejdź do płatności' })).toBeVisible();
}

async function removeProductFromCart(page: Page) {
  await page.getByLabel('Usuń Hi-Fi Headphones z').click();
  await expect(page.getByRole('heading', { name: 'Twój koszyk jest obecnie' })).toBeVisible();
}

test('Dodawanie i usuwanie produktu z koszyka', async ({ page }) => {
  // given
  await goToShopLink(page);
  await addHeadphonesToCart(page);
  
  // when
  await showCart(page);
  
  // then
  await removeProductFromCart(page);
});