import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils.js';

test.describe('Links (Navegación y Llamadas API)', () => {

  test.beforeEach(async ({ page}) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Links');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validación de links que abren en una nueva pestaña', async ({ page, context }) => {

    const originalURL = 'https://demoqa.com/links';
    const newURL = 'https://demoqa.com/';
    let newPage;

    //  Antes de hacer clic, preparamos la promesa que esperará la nueva pestaña
    const pagePromise = context.waitForEvent('page');

    await test.step('Hacer click en el link que abre la nueva pestaña', async () => {
        await page.locator('#simpleLink').click();
    });

    await test.step('Esperamos a que la promesa se cumpla (la nueva pestaña se abre)', async () => {
        newPage = await pagePromise;
        await newPage.waitForLoadState();
    });

    await test.step('Verificar la URL', async () => {
        await expect(newPage).toHaveURL(newURL);
    });

    await test.step('Cerrar la pestaña secundaria y volver a la principal', async () => {
        await newPage.close();
        await expect(page).toHaveURL(originalURL);
    });

  });

  test('Validación de Links de Llamada API (Broken Links Avanzado)', async ({ page }) => {

    await test.step('Click en link Created', async () => {
      await page.locator('#created').click();
    });

    await test.step('Verificar respuesta de la API', async () => {
    await expect(page.locator('#linkResponse')).toBeVisible();
    });
  
 });
 
});