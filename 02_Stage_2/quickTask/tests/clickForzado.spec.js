import { test, expect } from '@playwright/test';

test('Click Forzado', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/get-user-media.html');

  await page.getByRole('button', { name: 'Start' }).click({ force: true });

  await expect(page.locator('#my-video')).toBeVisible();
});