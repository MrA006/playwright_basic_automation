
import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

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
        await attachStepScreenshot(this.page, '01 - After URL open');
    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await attachStepScreenshot(this.page, '02 - After submitting login credentials');
    }


}

export default LoginPage;