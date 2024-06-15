import { expect, type Page } from "@playwright/test";

export class LogOut {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async LogOutClick(){
        await this.page.locator('#wp--skip-link--target').getByRole('list').getByRole('link', { name: 'Wyloguj się' }).click();
        await expect(this.page.getByRole('heading', { name: 'Logowanie' })).toBeVisible();
    }

}