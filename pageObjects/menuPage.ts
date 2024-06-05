import { expect, type Page } from "@playwright/test";

export class MenuPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    //menuLabel - zmienna
    //funkcja protected - w wielu testach wykorzystujemy te same elementy

    protected async goToMenu(menuLabel: string){
        await this.page.goto('https://playwright.adamowicz.pro/');
        await expect(this.page.getByRole('banner').getByRole('link', { name: 'Sklep Playwright' })).toBeVisible();
        await this.page.locator('.wp-block-woocommerce-customer-account > a').click();
        await expect(this.page.getByRole('heading', { name: menuLabel })).toBeVisible();
    }

    //publiczna funkcja - związana z przejściem do Mojego Konta

    public async goToLogin(){
        await this.goToMenu('Moje konto')
    }


}