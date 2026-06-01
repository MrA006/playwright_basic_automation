import { test, expect } from '../fixtures/testSetup.js';
import users from '../testdata/loginData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';
// import { attachStepScreenshot } from '../utilities/screenshot.js';

let i = 0;


// users.data.forEach(user => {


    test.describe(`Login test for ${users.data[0].username}`, () => {

    test(`login test functionality for ${users.data[0].username}`, async ({page}) => {

        const loginPage = new LoginPage(page);

        await test.step('Navigate to login page and submit credentials', async () => {
            await loginPage.goToUrl();
        });

        await test.step('login using creds', async () => {

            await loginPage.login(users.data[0].username, users.data[0].password);
        })

        await test.step('verify login successful', async () => {

        await expect(loginPage.welcomeMessage).toHaveText('Welcome to Adactin Group of Hotels');
        });

    });

});

// });