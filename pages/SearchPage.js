import { test, expect } from "../fixtures/preLogin.js";


class SearchPage{

    constructor(page){
        this.page = page;

        
        this.searchSubmitButton = page.locator('#Submit');
        this.loginTitle = page.locator('.login_title_comm');
    }

    async fillSearchHotelForm(location, hotel, roomType, roomNos, checkInDate, checkOutDate, adultRoom, childRoom){
        await this.page.locator('#location').selectOption(location);
        await this.page.locator('#hotels').selectOption(hotel);
        await this.page.locator('#room_type').selectOption(roomType);
        await this.page.locator('#room_nos').selectOption(roomNos);
        await this.page.locator('#datepick_in').fill(checkInDate);
        await this.page.locator('#datepick_out').fill(checkOutDate);
        await this.page.locator('#adult_room').selectOption(adultRoom);
        await this.page.locator('#child_room').selectOption(childRoom);

    }

    async searchHotel(location, hotel, roomType, roomNos, checkInDate, checkOutDate, adultRoom, childRoom){
        
        await this.fillSearchHotelForm(location, hotel, roomType, roomNos, checkInDate, checkOutDate, adultRoom, childRoom);
        
        await this.searchSubmitButton.click();
        await expect(this.page.locator('#continue')).toBeVisible();
        
    }
}

export default SearchPage;