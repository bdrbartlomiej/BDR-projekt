import { expect, type Page } from "@playwright/test";
import { fakerPL } from '@faker-js/faker';


export class BillingAdress {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async ChangeBillingAdress(){
        await this.page.locator('li').filter({ hasText: 'Adresy' }).click();
        await this.page.getByRole('link', { name: 'Adresy' }).click();
        await expect(this.page.getByRole('heading', { name: 'Adres rozliczeniowy' })).toBeVisible();
        await this.page.locator('header').filter({ hasText: 'Adres rozliczeniowy Edytuj' }).getByRole('link').click();
        await this.page.getByLabel('Imię *').fill(fakerPL.person.firstName());
        await this.page.getByLabel('Nazwisko *').fill(fakerPL.person.lastName());
        await this.page.getByLabel('Nazwa firmy (opcjonalne)').fill(fakerPL.company.name());
        await this.page.getByPlaceholder('Nazwa ulicy, numer budynku /').fill(fakerPL.location.street() + ' ' + fakerPL.number.int({max: 30}));
        await this.page.getByLabel('Kod pocztowy *').fill(fakerPL.location.zipCode());
        await this.page.getByLabel('Miasto *').fill(fakerPL.location.city());
        await this.page.getByLabel('Numer telefonu *').fill(fakerPL.phone.number());
        await this.page.getByRole('button', { name: 'Zapisz adres' }).click();
        await expect(this.page.getByText('Adres został zmieniony.')).toBeVisible();
    }

}