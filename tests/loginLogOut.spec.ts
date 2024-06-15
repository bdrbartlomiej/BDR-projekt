import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv'
import { Ecomm } from '../pageObjects/ecomm';
dotenv.config()

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Zalogowanie się do panelu i wylogowanie', async ({ page }) => {
  //given
  await ecomm.menu().goToLogin();
  //when
  await ecomm.login().LoginToPanel();
  //then - wyloguj z konta
  await ecomm.logout().LogOutClick();
});