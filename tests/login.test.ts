import { test } from '../fixtures/custom-fixtures';
import { expect } from '@playwright/test';

const username = process.env.LOGIN_USER!;
const password = process.env.LOGIN_PASS!;
const baseUrl  = process.env.BASE_URL!;


test('Login should succeed with valid credentials', async ({ loginPage }) => {
    await loginPage.navigateToLogin(username, password);  
    // Verify successful login by checking the URL or a specific element on the page
    await expect(loginPage.page).toHaveURL(`${baseUrl}/inventory.html`); // Adjust the URL as needed
    await expect(loginPage.page.locator('.product_label', { hasText: 'Products' })).toBeVisible();
    
});

