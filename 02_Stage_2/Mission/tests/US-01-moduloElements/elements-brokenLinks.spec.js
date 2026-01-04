import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils.js';

test.describe('Broken Links - Images (Validación de Recursos)', () => {

  test.beforeEach(async ({ page}) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Broken Links - Images');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar que la Valid image carga correctamente', async ({ page }) => {
  const validImage = page.locator('img[src="/images/Toolsqa.jpg"]').nth(1);

  await test.step('Verificar dimensiones de la imagen', async () => {
    await expect(validImage).toBeVisible();

    const isImageLoaded = await validImage.evaluate((img) => {return img.complete && img.naturalWidth > 0;});

    expect(isImageLoaded).toBeTruthy();

    });

  });

  test('Validar que la Broken image no carga', async ({ page }) => {
  const validImage = page.locator('img[src="/images/Toolsqa_1.jpg"]');

  await test.step('Verificar dimensiones de la imagen', async () => {
    await expect(validImage).toBeVisible();

    const isImageLoaded = await validImage.evaluate((img) => {return img.complete && img.naturalWidth == 0;});

    expect(isImageLoaded).toBeTruthy();

  });

 });

  test('Verificar que el valid link redirecciona a una página válida', async ({ page }) => {

    const linkURL = 'https://demoqa.com/';

    await test.step('Hacer click en el valid link', async () => {
        await page.getByRole('link', { name: 'Click Here for Valid Link', exact: true }).click();
    });

    await test.step('Verificar que el link redirecciona a una página válida', async () => {
        await expect(page).toHaveURL(linkURL);
    });
    
  });

  test('Verificar que el broken link devuelve un error 500', async ({ page }) => {

    const responsePromise = page.waitForResponse(response => response.url().includes('/status_codes/500'));

    await test.step('Hacer click en el broken link', async () => {
        await page.getByRole('link', { name: 'Click Here for Broken Link', exact: true }).click();
    });

    await test.step('Verificar que el status de la página es 500', async () => {
        const response = await responsePromise;
        expect(response.status()).toBe(500);
    });
    
  });
  
});