import { expect, type Page } from "@playwright/test";

export class OrdersPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async OrdersPage(){
        await this.page.getByRole('link', { name: 'Zamówienia', exact: true }).click();
        await expect(this.page.getByRole('link', { name: '#80' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: '#71' })).toBeVisible();
    }

}