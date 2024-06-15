import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv'
import { Ecomm } from '../pageObjects/ecomm';
dotenv.config()

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Sprawdzenie czy na koncie playwright są zamówienia o numerach: #80 i  #71', async ({ page }) => {
  //given
  await ecomm.menu().goToLogin();
  //when
  await ecomm.login().LoginToPanel();
  //then - sprawdzenie czy na koncie są dwa zamówienia
  await ecomm.orders().OrdersPage();
});