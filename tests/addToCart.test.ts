import { test, expect } from '../fixtures/custom-fixtures';
import { config } from '../utils/config';

test('Login and add to chart', async ({ loginPage, homePage, cartPage }) => {
  // Login
  await loginPage.navigateToLogin(config.username, config.password);
  await expect(loginPage.page).toHaveURL(/.*inventory.html/);
  // Actions
  await homePage.addToCart();
  await cartPage.gotoCart();
  // Assertion
  await cartPage.verifyProductInCart('Sauce Labs Backpack'); 
});
