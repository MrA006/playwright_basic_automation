import {test, expect} from "@playwright/test";
import users from '../testData/loginData.json';

let i = 0;

users.data.forEach(user => {

    
    test(`login test functionality for ${user.username} + ${i++}`, async ({page}) => {
        
        await page.goto ( 'https://www.adactinhotelapp.com/');
        
        const username = user.username;
        const password = user.password;
        
        await page.fill('#username', username);
        await page.fill('#password', password);
        
        await page.click('#login');
        
        
        await expect(page.locator('.welcome_menu').first()).toHaveText('Welcome to Adactin Group of Hotels');
        
    })
})