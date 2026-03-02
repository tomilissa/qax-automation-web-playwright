import { test, expect } from '@playwright/test';

test('Simular Teclas en Slow Calculator', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/slow-calculator.html');

  await page.locator('span:has-text("1")').first().click();
  await page.locator('span:has-text("+")').click();
  await page.locator('span:has-text("2")').first().click();
  await page.locator('span:has-text("=")').click();

  const screen = page.locator('.screen');
  await expect(screen).toHaveText('3', { timeout: 10000 }); 

});
