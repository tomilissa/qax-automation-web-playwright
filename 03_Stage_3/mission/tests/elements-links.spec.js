import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

test.describe('Links (Navegación y Llamadas API)', () => {

  let homePage;
  let elementsPage;

  test.beforeEach(async ({ page}) => {

    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);
        await homePage.navigate('/');
        await homePage.isAtHomePage();
        await homePage.selectCardAndOption('Elements', 'Links')
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validación de links que abren en una nueva pestaña', async ({ page, context }) => {

    const originalURL = 'https://demoqa.com/links';
    const newURL = 'https://demoqa.com/';
    let newPage;
    const pagePromise = context.waitForEvent('page');

    await test.step('Hacer click en el link que abre la nueva pestaña', async () => {
        await elementsPage.clickOnSimpleLink();
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

  test('Validación de Links de Llamada API (Broken Links Avanzado)', async () => {

    await test.step('Click en link Created', async () => {
        await elementsPage.clickOnBrokenLink();
    });

    await test.step('Verificar respuesta de la API', async () => {
        await elementsPage.verifyAPIResponse();
    });
  
   });

 });