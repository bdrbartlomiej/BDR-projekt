import { Page } from "@playwright/test";
import { MenuPage } from "./menuPage";

export class Ecomm {
    private readonly page: Page
    private readonly MenuPage: MenuPage
    
    constructor(page: Page) {
        this.page = page
        this.MenuPage = new MenuPage(this.page)
    }

    menu(){
        return this.MenuPage
    }
}