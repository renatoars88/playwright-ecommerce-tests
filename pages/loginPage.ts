import { Page } from '@playwright/test'; 

export class LoginPage {
    readonly page: Page; 
                        
    constructor(page: Page) {
        this.page = page; 
    }

    async navigateToLogin(username: string, password: string){
        await this.page.goto('https://www.saucedemo.com/v1/index.html'); 
        await this.page.fill('#user-name',username); 
        await this.page.fill('#password', password);
        await this.page.getByRole('button', { name: 'LOGIN' }).click(); 
    }
}

