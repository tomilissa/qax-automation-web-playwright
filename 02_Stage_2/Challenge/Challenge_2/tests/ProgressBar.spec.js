import { test, expect } from '@playwright/test';

test.describe('Validar Progress Bar', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/ProgressBar.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar valor inicial y final del Progress Bar', async ({ page }) => {
    
    const progressBar = page.locator('.progressbar-text');

    await expect(progressBar).toHaveText('');
    await page.locator('#cricle-btn').click();
    await expect(progressBar).toHaveText('100', { timeout: 30000 });
    
  });

});