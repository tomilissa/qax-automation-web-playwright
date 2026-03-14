import { test } from '@playwright/test';
import { ElementsPage } from '../pages/ElementsPage';
import { HomePage } from '../pages/HomePage';  

test.describe('Buttons (Acciones de Clic)', () => {

  let homePage;
  let elementsPage;

  test.beforeEach(async ({ page, context }) => {
    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);

    await context.route('**/*googleads*', route => route.abort());
    
    await page.goto('https://demoqa.com', { waitUntil: 'domcontentloaded', timeout: 60000 });

    await homePage.selectCardAndOption('Elements', 'Buttons');
  });
    
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verificar el comportamento del click simple', async () => {
    await test.step('Hacer click simple sobre el botón', async () => {
        await elementsPage.clickOnButton();
    });

    await test.step('Verificar mensaje de click simple', async () => {
        await elementsPage.verifyClickConfirmationMessage();
    });
  });

  test('Verificar el comportamento del doble click', async () => {
    await test.step('Hacer doble click sobre el botón', async () => {
        await elementsPage.doubleClickOnButton();
    });

    await test.step('Verificar mensaje de doble click', async () => {
        await elementsPage.verifyDoubleClickConfirmationMessage();
    });
  });

  test('Verificar el comportamento del click derecho', async () => {
    await test.step('Hacer click derecho sobre el botón', async () => {
        await elementsPage.rightClickOnButton();
    });

    await test.step('Verificar mensaje de click derecho', async () => {
        await elementsPage.verifyRightClickConfirmationMessage();
    });
  });

});