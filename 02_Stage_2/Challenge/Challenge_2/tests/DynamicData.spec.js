import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validar Dynamic Data', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await openMenuAndSelect(page, 'More', 'Dynamic Data');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar que el contenido dinámico cambia y se muestra correctamente', async ({ page }) => {
    
    const container = page.locator('#loading');
    const imagen = container.locator('img');
    


    await page.locator('#save').click();
    await expect(container).not.toBeEmpty();
    await expect(imagen).toBeVisible();
    const primerNombre = await container.textContent();

    await page.locator('#save').click();
    const segundoNombre = await container.textContent();
    expect(segundoNombre).not.toBe(primerNombre);

    
  });

});