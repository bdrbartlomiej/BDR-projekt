import { Page } from "@playwright/test";
import { MenuPage } from "./menuPage";
import { LoginPage } from "./loginPage";
import { AccountPage } from "./accountPage";


export class Ecomm {
    private readonly page: Page
    private readonly MenuPage: MenuPage
    private readonly LoginPage: LoginPage
    private readonly AccountPage: AccountPage

    constructor(page: Page) {
        this.page = page
        this.MenuPage = new MenuPage(this.page)
        this.LoginPage = new LoginPage(this.page)
        this.AccountPage = new AccountPage(this.page)

    }

    menu(){
        return this.MenuPage
    }

    login(){
        return this.LoginPage
    }

    account(){
        return this.AccountPage
    }
}