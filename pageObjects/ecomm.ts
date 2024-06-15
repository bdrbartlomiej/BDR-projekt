import { Page } from "@playwright/test";
import { MenuPage } from "./menuPage";
import { LoginPage } from "./loginPage";
import { AccountPage } from "./accountPage";
import { OrdersPage } from "./orders";
import { LogOut } from "./logOut";
import { Files } from "./files";
import { BillingAdress } from "./bilingAdress";
import { SentAdress } from "./sentAdress";



export class Ecomm {
    private readonly page: Page
    private readonly MenuPage: MenuPage
    private readonly LoginPage: LoginPage
    private readonly AccountPage: AccountPage
    private readonly OrdersPage: OrdersPage
    private readonly LogOut: LogOut
    private readonly Files: Files
    private readonly BillingAdress: BillingAdress
    private readonly SentAdress: SentAdress

    constructor(page: Page) {
        this.page = page
        this.MenuPage = new MenuPage(this.page)
        this.LoginPage = new LoginPage(this.page)
        this.AccountPage = new AccountPage(this.page)
        this.OrdersPage = new OrdersPage(this.page)
        this.LogOut = new LogOut(this.page)
        this.Files = new Files(this.page)
        this.BillingAdress = new BillingAdress(this.page)
        this.SentAdress = new SentAdress(this.page)
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
    
    orders(){
        return this.OrdersPage
    }
    
    logout(){
        return this.LogOut
    }

    files(){
        return this.Files
    }

    billing(){
        return this.BillingAdress
    }

    sentadress(){
        return this.SentAdress
    }
}