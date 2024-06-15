import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv'
import { Ecomm } from '../pageObjects/ecomm';
dotenv.config()

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page);
})

test('Edycja adresu bilingowego', async ({ page }) => {
  //given
  await ecomm.menu().goToLogin();
  //when
  await ecomm.login().LoginToPanel();
  //then - wejdz do zakładki adresy i popraw adres do wysyłki
  await ecomm.sentadress().ChangeSentAdress();
  //wylogowanie
  await ecomm.logout().LogOutClick();

});