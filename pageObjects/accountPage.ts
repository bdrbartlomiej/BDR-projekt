import { expect, type Page } from "@playwright/test";

export class AccountPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    //menuLabel - zmienna
    //funkcja protected - w wielu testach wykorzystujemy te same elementy

    async AccountPage(){
        await expect(this.page.getByRole('link', { name: 'Kokpit' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Zamówienia', exact: true })).toBeVisible();
        await this.page.locator('p').filter({ hasText: 'Witaj playwright (nie jesteś' }).getByRole('link').click();
    }

}