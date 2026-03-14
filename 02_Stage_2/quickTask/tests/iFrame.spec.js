import { test, expect } from '@playwright/test';

test('Single iFrame', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

  const singleIframe = page.frameLocator('#singleframe');
  await expect(singleIframe.getByText('iFrame Demo')).toBeVisible();
  await singleIframe.locator('input[type="text"]').fill('Tomas Lissarrague');

});

test('iFrame with nested frames', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.getByText('Iframe with in an Iframe').click();

  const outerFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');
    
  const innerFrame = outerFrame.frameLocator('iframe[src="SingleFrame.html"]');

  await expect(innerFrame.getByText('iFrame Demo')).toBeVisible();
  await innerFrame.locator('input[type="text"]').fill('Tomas Lissarrague 2');

});




