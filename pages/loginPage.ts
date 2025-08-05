import { Page } from '@playwright/test'; //built-in Page object, which represents a single browser tab or window.

export class LoginPage {
    readonly page: Page; //The readonly page: Page; ensures each instance of LoginPage has its own page context that we can’t accidentally overwrite.
                         //The property page must always be a Playwright Page object   

    constructor(page: Page) {
        this.page = page; // assigns the actual Playwright Page instance
    }

    async navigateToLogin(username: string, password: string){
        await this.page.goto('https://www.saucedemo.com/v1/index.html'); 
        await this.page.fill('#user-name',username); 
        await this.page.fill('#password', password);
        await this.page.getByRole('button', { name: 'LOGIN' }).click(); 
}



}

