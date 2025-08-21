import { Page } from '@playwright/test';


const productName = 'Sauce Labs Backpack';

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

async addToCart() {
    // botão de adicionar ao carrinho
    //await this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await this.page.locator(`.inventory_item:has-text("${productName}") >> button`).click();
  }
}
