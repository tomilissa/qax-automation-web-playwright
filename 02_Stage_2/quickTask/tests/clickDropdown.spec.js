import { test, expect } from '@playwright/test';

test('Click & Dropdown', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html');

  await page.locator('#my-dropdown-1').click();
  await expect(page.locator('#my-dropdown-1')).toHaveClass(/show/);
  await page.getByRole('link', { name: 'Another action', exact: true }).click();
});

test('Right Click & Dropdown', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html');

  await page.locator('#my-dropdown-2').click({ button: 'right' });
  await page.getByRole('link', { name: 'Action', exact: true }).click();
});

test('Double Click & Dropdown', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html');

  await page.locator('#my-dropdown-3').dblclick();
  await page.getByRole('link', { name: 'Something else here', exact: true }).click();
});