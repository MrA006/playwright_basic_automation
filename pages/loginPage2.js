import { test } from "../fixtures/preLogin.js";


class LoginPage{

    constructor(page){
        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');

        this.welcomeMsg = page.locator('.welcome_msg').first();

        this.radioButton = page.locator('#radiobutton_0');
        this.loginTitle = page.locator('.login_title').first();
        this.continueButton = page.locator('#continue');
    }

    


}

export default LoginPage;