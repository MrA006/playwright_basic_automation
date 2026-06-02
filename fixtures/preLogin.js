import {test as base} from '@playwright/test';
import BasePage from '../pages/basePage2.js';
import data from '../testData/loginData2.json';
import {attachFinalScreenshot} from '../utilities/screenshot2.js';

export const test = base.extend({
    pageSetup: [
        async ({page}, use) => {
            const basePage = new BasePage({page});
            await basePage.navigate('https://adactinhotelapp.com/');
            await basePage.login(data.users[0].username, data.users[0].password);
            await use(); 
        }, 
        {auto : true}
    ]

})

export {expect} from '@playwright/test';


test.afterEach(async ({page}, testInfo) => {
    await attachFinalScreenshot(page, testInfo);
})