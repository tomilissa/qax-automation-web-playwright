import { test, expect } from '@playwright/test';

test('Scroll', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html');

  const objetivo = page.locator('p:has-text("Curae id risus lacinia")').first();
  await objetivo.scrollIntoViewIfNeeded();
  await expect(objetivo).toBeVisible();
});