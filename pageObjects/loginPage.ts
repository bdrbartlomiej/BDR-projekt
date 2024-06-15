import { expect, type Page } from "@playwright/test";

export class LoginPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async LoginToPanel(){
        await this.page.getByLabel('Nazwa użytkownika lub adres e-mail *').fill(process.env.LOGIN!);
        await this.page.getByLabel('Hasło *').fill(process.env.PASSWORD!);
        await this.page.getByRole('button', { name: 'Zaloguj się' }).click();
    }

}