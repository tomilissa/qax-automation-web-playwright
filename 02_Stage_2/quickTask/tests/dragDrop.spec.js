import { test, expect } from '@playwright/test';

test('Drag & Drop', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html');

  const source = page.getByText('Drag me');
  const target = page.locator('#target');
  await source.dragTo(target);
});