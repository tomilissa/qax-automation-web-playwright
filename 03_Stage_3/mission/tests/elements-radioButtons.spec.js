import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

test.describe('Radio Button - Selección Exclusiva', () => {

  let homePage;
  let elementsPage;

  test.beforeEach(async ({ page}) => {

    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);
        await homePage.navigate('/');
        await homePage.isAtHomePage();
        await homePage.selectCardAndOption('Elements', 'Radio Button')
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

   test('Validar seleccion opción YES', async () => {

    await test.step('Seleccionar opción YES', async () => {
        await elementsPage.selectRadioButtonGeneral('Yes');
    });

    await test.step('Validar mensaje de confirmación opción YES', async () => {
        await elementsPage.verifyRadioButtonYesMessage();
    });

  });

  test('Validar seleccion opción IMPRESSIVE', async () => {

    await test.step('Seleccionar opción Impressive', async () => {
        await elementsPage.selectRadioButtonGeneral('Impressive');
    });

    await test.step('Validar mensaje de confirmación', async () => {
        await elementsPage.verifyRadioButtonImpressiveMessage()
    });

  });

  test('Validar que la opción NO está deshabilitada y no se puede seleccionar', async () => {

    await test.step('Validar que la opción NO está deshabilitada y no se puede seleccionar', async () => {
        await elementsPage.verifyRadioButtonOptionDisabled('No')
    });
        
  });

});