import {test, expect} from "@playwright/test";
import LoginPage from '../pages/loginPage.js';
import users from '../testData/loginData.json';

let i = 0;


users.data.forEach(user => {

    test(`login test functionality for ${user.username} + ${i++}`, async ({page}) => {

        const loginPage = new LoginPage(page);

        await loginPage.goToUrl();

        await loginPage.login(user.username, user.password);

        await expect(loginPage.welcomeMessage).toHaveText('Welcome to Adactin Group of Hotels');

    });

});