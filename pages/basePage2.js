import { test, expect } from "../fixtures/preLogin.js";


class BasePage{

    constructor({page}){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }

    async login(username, password){
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('#login');
        await expect(this.page.locator('#location')).toBeVisible();
    }

}

export default BasePage;