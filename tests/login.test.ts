import { test } from '../fixtures/custom-fixtures';
import { expect } from '@playwright/test';


test('Login should succeed with valid credentials', async ({ loginPage }) => {
    await loginPage.navigateToLogin('standard_user', 'secret_sauce');
    
    
    // Verify successful login by checking the URL or a specific element on the page
    
    await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/v1/inventory.html'); // Adjust the URL as needed
    await expect(loginPage.page.locator('.product_label', { hasText: 'Products' })).toBeVisible();
    
});

