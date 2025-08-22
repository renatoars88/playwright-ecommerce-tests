import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoCart() {
    await this.page.getByRole('link', { name: '1' }).click();;
  }

  async verifyProductInCart(productName: string) {
    await expect(
      this.page.locator('.inventory_item_name', { hasText: productName })
      ).toBeVisible();
  }
}
