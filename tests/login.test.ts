import { test } from '../fixtures/custom-fixtures';
import { expect } from '@playwright/test';
import { config } from '../utils/config';

test('Login should succeed with valid credentials', async ({ loginPage }) => {
    await loginPage.navigateToLogin(config.username, config.password);  
    // Verify successful login by checking the URL or a specific element on the page
    await expect(loginPage.page).toHaveURL(`${config.baseUrl}/v1/inventory.html`); 
    await expect(loginPage.page.locator('.product_label', { hasText: 'Products' })).toBeVisible();
    
});

