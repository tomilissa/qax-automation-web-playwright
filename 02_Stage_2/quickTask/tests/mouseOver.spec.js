import { test, expect } from '@playwright/test';

test('Mouse Over Compass', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html');

  await page.locator('img[src="img/compass.png"]').hover();

  await expect(page.getByText('Compass')).toBeVisible();
});

test('Mouse Over Calendar', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html');

  await page.locator('img[src="img/calendar.png"]').hover();

  await expect(page.getByText('Calendar')).toBeVisible();
});

test('Mouse Over Award', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html');

  await page.locator('img[src="img/award.png"]').hover();

  await expect(page.getByText('Award')).toBeVisible();
});

test('Mouse Over Landscape', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html');

  await page.locator('img[src="img/landscape.png"]').hover();

  await expect(page.getByText('Landscape')).toBeVisible();
});