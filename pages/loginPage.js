
import { test } from '@playwright/test';

class LoginPage {
    constructor(page){

        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');

        this.welcomeMessage = page.locator('.welcome_menu').first();

        
    }

    async goToUrl(){
        await this.page.goto ( 'https://www.adactinhotelapp.com/');
        await this.attachScreenshot('Step 01 - navigate to login page');
    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.attachScreenshot('Step 02 - submit login credentials');
    }

    async attachScreenshot(){

        await test.info().attach('screenshot',{
            body: await this.page.screenshot(),
            contentType: 'image/png'
        })
    }


}

export default LoginPage;