import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv'
import { Ecomm } from '../pageObjects/ecomm';
dotenv.config()

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Sprawdzenie czy są pliki do pobrania', async ({ page }) => {
  //given
  await ecomm.menu().goToLogin();
  //when
  await ecomm.login().LoginToPanel();
  //then - wejdz do zakładki pliki do pobrania
  await ecomm.files().FilesToDownload();
  await ecomm.logout().LogOutClick();
});