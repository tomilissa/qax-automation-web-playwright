import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validar Slider', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await openMenuAndSelect(page, 'Widgets', 'Slider');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Mover slider a una posición específica', async ({ page }) => {

  const sliderBar = page.locator('#slider');
  const sliderHandle = page.locator('#slider a');

  const boundingBox = await sliderBar.boundingBox();
  
  if (boundingBox) {
    const targetPercentage = 0.50;
    const xPosition = boundingBox.x + boundingBox.width * targetPercentage;
    const yPosition = boundingBox.y + boundingBox.height / 2;

    
    await sliderHandle.hover();
    await page.mouse.down();
    await page.mouse.move(xPosition, yPosition);
    await page.mouse.up();
  }

  await expect(page.locator('#slider a')).toHaveAttribute('style', /left: 50%/); 
});

});