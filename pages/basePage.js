


class BasePage {
    constructor(page){
        this.page = page;
    }


    async goToUrl(url){
        await this.page.goto(url);
    }
    async navigate(url){
        await this.page.goto(url);
    }

}

export default BasePage;