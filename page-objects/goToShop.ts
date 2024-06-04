import { expect, type Page } from "@playwright/test";

export class goToShop {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    protected async goToShopPage(menuLabel: string){
      console.log(`Running ${test.info().title}`);
      await this.page.goto(process.env.WWW!);
      await expect(this.page.getByRole('banner').getByRole('link', { name: 'Sklep Playwright' })).toBeVisible();
      
    }

  
}