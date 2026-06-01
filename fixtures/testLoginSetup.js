import { test as base} from '@playwright/test';
import BasePage from '../pages/BasePage.js';
import users from '../testdata/loginData.json' assert { type: 'json' };
import { attachScreenshotAfterEach } from '../utilities/screenshot.js';

const APP_URL = 'https://adactinhotelapp.com/';

export const test = base.extend({
    pageSetup: [
        async ({page}, use) =>{
            const loginPage = new BasePage(page);
            await loginPage.navigate(APP_URL);
            await loginPage.login(users.data[0].username, users.data[0].password);
            await use();
        }, 
        { auto : true}
    ]

})

export {expect} from '@playwright/test';

test.afterEach(async({page}, testinfo) => {
    await attachScreenshotAfterEach(page, testinfo);
});