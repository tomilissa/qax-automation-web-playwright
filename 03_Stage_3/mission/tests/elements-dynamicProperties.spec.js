import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/ElementsPage';

test.describe('Validación de Propiedades Dinámicas', () => {

  let homePage;
  let elementsPage;

  test.beforeEach(async ({ page}) => {

    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);
        await homePage.navigate('/');
        await homePage.isAtHomePage();
        await homePage.selectCardAndOption('Elements', 'Dynamic Properties')
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verificar que el primer botón se habilite luego de la espera', async ({ page }) => {
 
    await test.step('Verificar que el botón está originalmente deshabilitado', async () => {
        await elementsPage.verifyButtonIsDisabled();
    });

    await test.step('Verificar que el botón se habilite luego de 5 segundos', async () => {
        await elementsPage.verifyButtonIsEnabledAfter5Seconds();
    });

   });

   test('Verificar que el color del texto del botón cambia luego de la espera', async ({ page }) => {
   
    await test.step('Verificar que el color del texto del botón es originalmente blanco', async () => {
        await elementsPage.verifyButtonColorIsWhite();
    });
        
    await test.step('Verificar que el color del texto del botón cambia a rojo luego de 5 segundos', async () => {
        await elementsPage.verifyButtonColorChange();
        
    });

   });

 });