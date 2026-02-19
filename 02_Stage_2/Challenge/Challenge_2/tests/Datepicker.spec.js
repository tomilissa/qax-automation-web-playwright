import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validar Datepicker', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await openMenuAndSelect(page, 'Widget', 'Datepicker');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar la elección de una fecha visible', async ({ page }) => {
    
    await page.locator('.imgdp').click();
    await page.getByRole('link', { name: '21', exact: true }).click();
    await expect(page.locator('#datepicker1')).toHaveValue('12/21/2025');
  });

  test('Validar la elección de una fecha no visible', async ({ page }) => {
    
    await page.locator('.imgdp').click();
    await page.getByText('Next').dblclick();
    await page.getByRole('link', { name: '15', exact: true }).click();
    await expect(page.locator('#datepicker1')).toHaveValue('02/15/2026');
  });

  test('Configurar una fecha con método fill', async ({ page }) => {
    
    await page.locator('#datepicker2').fill('03/05/2026');
    await expect(page.locator('#datepicker2')).toHaveValue('03/05/2026');
    
  });

});
