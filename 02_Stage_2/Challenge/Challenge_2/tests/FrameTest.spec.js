import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validación frame', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Interactuar con Single Frames', async ({ page }) => {
    await openMenuAndSelect(page, 'SwitchTo', 'Frames');
    const singleFrame = page.frameLocator('#singleframe');
    await singleFrame.getByRole('textbox').fill('Hola desde QAXpert');
    console.log('Frame accedido e input llenado correctamente.');

  });

  test('Interactuar con Iframe with in an Iframe', async ({ page }) => {
    await openMenuAndSelect(page, 'SwitchTo', 'Frames');
    await page.getByText('Iframe with in an Iframe').click();

    const outerFrame = page.frameLocator('iframe[src*="MultipleFrames.html"]');
    const innerFrame = outerFrame.frameLocator('iframe[src*="SingleFrame.html"]');
    await innerFrame.getByRole('textbox').fill('Hola soy Tomas');
    console.log('Frame anidado accedido e input llenado correctamente.');

  });
});