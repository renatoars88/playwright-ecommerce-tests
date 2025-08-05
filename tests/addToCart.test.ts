import { test, expect } from '../fixtures/custom-fixtures';

test('Login e adicionar item ao carrinho', async ({ loginPage, homePage, cartPage }) => {
  // Login
  await loginPage.navigateToLogin('standard_user', 'secret_sauce');
  await expect(loginPage.page).toHaveURL(/.*inventory.html/);
  await homePage.addToCart();
  await cartPage.gotoCart();
  await cartPage.verifyProductInCart('Sauce Labs Backpack');
 
});
