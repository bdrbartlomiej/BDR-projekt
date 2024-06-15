import { expect, type Page } from "@playwright/test";

export class Files {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async FilesToDownload(){
        await this.page.getByRole('link', { name: 'Pliki do pobrania' }).click();
        await expect(this.page.locator('h1')).toContainText('Pliki do pobrania');
        await expect(this.page.getByText('Pliki do pobrania nie są')).toBeVisible();
    }

}