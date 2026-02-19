import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/ElementsPage';

test.describe('Validar Checkbox - Selección Jerárquica', () => {

  let homePage;
  let elementsPage;

  test.beforeEach(async ({ page}) => {

    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);
        await homePage.navigate('/');
        await homePage.isAtHomePage();
        await homePage.selectCardAndOption('Elements', 'Check Box')
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Selección de Nivel Superior', async () => {

        await test.step('Seleccionar Home Checkbox', async () => {
            await elementsPage.selectMainCheckboxOption('Home');
        });
        
        await test.step('Validar mensaje de opciones seleccionadas', async () => {
            await elementsPage.verifyCheckBoxSelectionMessage();
        });
        
    });

    test('Selección Parcial', async () => {

        await test.step('Seleccionar Desktop checkbox', async () => {
            await elementsPage.selectSecondLevelCheckbox('Desktop')
        });

        await test.step('Validar que el checkbox de Home muestra el estado de selección parcial', async () => {          
            await elementsPage.verifyPartialSelection()
        });   
        
    });

});