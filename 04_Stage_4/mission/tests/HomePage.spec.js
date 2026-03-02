import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AccessoriesPage } from '../pages/AccessoriesPage';
import { LoginPage } from '../pages/LoginPage';


test.describe('Buscar productos', () => {

  const partialproductName = 'Mug';
  const completeProductName = 'Mug The Best is yet to come';

  let homePage;
  let accessoriesPage;
  let loginPage; 

  test.beforeEach(async ({ page }, testInfo) => {
    homePage = new HomePage(page);
    accessoriesPage = new AccessoriesPage(page);
    loginPage = new LoginPage(page);

    const { user, pass } = testInfo.project.use.credentials;
    
    await homePage.navigate('');

    await test.step('Loggearse con el usuario de la configuración', async () => {
        await homePage.clickOnSignIn();
        await loginPage.fillSignInForm({ email: user, password: pass });
        await homePage.navigate('');
    });

    await homePage.isAtHomePage();
    });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Buscar productos por nombre parcial', async ({ }) => {

      await test.step('Buscar productos por nombre parcial', async () => {
          await homePage.searchForProduct(partialproductName)
        });

      await test.step('Verificar que los resultados contengan la palabra buscada', async () => {
          await homePage.verifyAllResultsContain(partialproductName);
        });    

    });

    test('Buscar producto seleccionando una sugerencia del desplegable', async ({ }) => {

      await test.step('Seleccionar sugerencia del deplegable', async () => {
           await homePage.selectFromSearchDropdown(partialproductName, completeProductName); 
        });
        

      await test.step('Verificar que el resultado contenga la palabra buscada', async () => {
            await homePage.verifySelectedResultContains(completeProductName);
        });    

    });

    test('Validar que el descuento del producto se aplica correctamente', async ({ }) => {
      
      await test.step('Hacer click en botón "Quick View"', async () => {
          await accessoriesPage.selectQuickViewBtn(1);
        });

      await test.step('Verificar que el descuento se aplica correctamente', async () => {
          await homePage.validateDiscountCalculation();
          
        });    

    });    

});        