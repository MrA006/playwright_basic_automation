


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

    async login( username, password){
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('#login');
    }

}

export default BasePage;