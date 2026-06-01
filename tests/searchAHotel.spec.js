import { test, expect } from '../fixtures/testLoginSetup.js';
import LoginPage from '../pages/loginPage.js';


test ('Search a hotel functionality', async ({page}) => {

    // const loginPage = new LoginPage(page);

    await page.locator('#location').selectOption('Sydney');
    await page.locator('#hotels').selectOption('Hotel Sunshine');
    await page.locator('#room_type').selectOption('Super Deluxe');
    await page.locator('#room_nos').selectOption('2 - Two');
    await page.locator('#datepick_in').fill('20/06/2024');
    await page.locator('#datepick_out').fill('22/06/2024');
    await page.locator('#adult_room').selectOption('2 - Two');
    await page.locator('#child_room').selectOption('0 - None');
    await page.locator('#Submit').click();

    expect(page.locator('#hotel_name_0')).toBeVisible();
    

});