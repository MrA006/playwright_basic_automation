import {test, expect} from "@playwright/test";

test('login test functionality', async ({page}) => {

    await page.goto ( 'https://www.adactinhotelapp.com/');

    await page.fill('#username', 'haristester01');
    await page.fill('#password', 'haristester01');

    await page.click('#login');


    await expect(page.locator('.welcome_menu').first()).toHaveText('Welcome to Adactin Group of Hotels');

})