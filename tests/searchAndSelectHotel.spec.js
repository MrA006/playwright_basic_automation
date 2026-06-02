import {test, expect} from '../fixtures/preLogin.js';
import SearchPage from '../pages/SearchPage.js';
import { attachStepScreenshot } from '../utilities/screenshot2.js';



test('Search a hotel functionality', async ({page}) => {

    const searchPage = new SearchPage(page);

    await test.step('Navigate to the application and login', async () => {
        await expect(page.locator('#location')).toBeVisible();
        await attachStepScreenshot(page, "Login Successful");
    });

    await test.step('Search a hotel functionality', async () => {
        await searchPage.searchHotel('Sydney', 'Hotel Sunshine', 'Super Deluxe', '2 - Two', '20/06/2024', '22/06/2024', '2 - Two', '0 - None');
        await attachStepScreenshot(page, "Hotel Search Results");
    });

    

});