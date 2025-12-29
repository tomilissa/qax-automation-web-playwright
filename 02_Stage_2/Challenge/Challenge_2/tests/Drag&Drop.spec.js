import { test, expect } from '@playwright/test';
import { openMenuAndSelectDoubleHover } from '../utils/menuUtils';

test.describe('Drag and Drop', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });


  test('Drag & Drop estático', async ({ page }) => {

    await openMenuAndSelectDoubleHover(page, 'Interactions', 'Drag and Drop', 'Static');

    const source = page.locator('#node');
    const target = page.locator('#droparea');
    await source.dragTo(target);

    await expect(target.locator('#node')).toBeVisible();

  });

  test('Drag & Drop dinámico', async ({ page }) => {

    await openMenuAndSelectDoubleHover(page, 'Interactions', 'Drag and Drop', 'Dynamic');

    const source = page.locator('#node');
    const target = page.locator('#droparea');
    await source.dragTo(target);

    await expect(target.locator('#node')).toBeVisible();

  });
  
}); 