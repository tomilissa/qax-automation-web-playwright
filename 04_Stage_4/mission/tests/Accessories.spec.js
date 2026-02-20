import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AccessoriesPage } from '../pages/AccessoriesPage';
import { generateRandomFirstName, generateRandomLastName, generateRandomEmail, generateRandomPassword, generateRandomBirthday, saveUserData, generateRandomAddress } from './utils/dataGenerator';

  test.describe('Navegación y selección de producto', () => {

  let homePage; 
  let accessoriesPage;
  let loginPage;
  let userData;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    accessoriesPage = new AccessoriesPage(page);
    loginPage = new LoginPage(page);

    userData = {
        firstName: generateRandomFirstName(),
        lastName: generateRandomLastName(),
        email: generateRandomEmail(),
        password: generateRandomPassword(),
        birthDay: generateRandomBirthday(),
        address: generateRandomAddress(),
    };

    saveUserData(userData.firstName, userData.lastName, userData.email, userData.password, userData.birthDay, userData.address);
    
    await homePage.navigate('');
    await homePage.isAtHomePage();
    });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Navegar y filtrar productos', async ({ }) => {

      await test.step('Seleccionar Accessories > Home Accessories del menu principal', async () => {
          await homePage.selectMainMenuOption('Accessories', 'Home Accessories');
        });

      await test.step('Verificar que se abre página de Home Accessories', async () => {
          await accessoriesPage.isAtAccessoriesPage();
        });

      await test.step('Filtrar por color de producto (Black)', async () => {
          await accessoriesPage.filterByColor('Black');
        });
        
      await test.step('Verificar que el filtro por color se aplicó correctamente', async () => {
          await accessoriesPage.verifyColorFilterIsActive('Black');
        });  
        
    });

    test('Verificar que los productos sin stock no se pueden añadir al carrito', async ({ }) => {

      await test.step('Seleccionar Accessories > Home Accessories del menu principal', async () => {
          await homePage.selectMainMenuOption('Accessories', 'Home Accessories');
        });

      await test.step('Verificar que se abre página de Home Accessories', async () => {
          await accessoriesPage.isAtAccessoriesPage();
        });

      await test.step('Filtrar por tipo de producto (Ceramic)', async () => {
          await accessoriesPage.filterByComposition('Ceramic');
        });
        
      await test.step('Verificar que el filtro por tipo de producto se aplicó correctamente', async () => {
          await accessoriesPage.verifyCompositionFilterIsActive('Ceramic');
        });

      await test.step('Hacer click en botón "Quick View"', async () => {
          await accessoriesPage.selectQuickViewBtn(0);
        });

      await test.step('Verificar que el producto no tiene stock', async () => {
          await accessoriesPage.verifyProductHasNoStock();
        });  
        
    });

    test('Agregar productos con stock al carrito', async ({ }) => {

      await test.step('Seleccionar Accessories > Home Accessories del menu principal', async () => {
          await homePage.selectMainMenuOption('Accessories', 'Home Accessories');
        });

      await test.step('Verificar que se abre página de Home Accessories', async () => {
          await accessoriesPage.isAtAccessoriesPage();
        });

      await test.step('Filtrar por tipo de producto (Ceramic)', async () => {
          await accessoriesPage.filterByComposition('Ceramic');
        });
        
      await test.step('Verificar que el filtro por tipo de producto se aplicó correctamente', async () => {
          await accessoriesPage.verifyCompositionFilterIsActive('Ceramic');
        });

      await test.step('Hacer click en botón "Quick View"', async () => {
          await accessoriesPage.selectQuickViewBtn(2);
        });

      await test.step('Verificar que el producto tiene stock', async () => {
          await accessoriesPage.verifyProductHasStock();
        });
        
      await test.step('Modificar la cantidad y agregar producto al carrito', async () => {
          await accessoriesPage.setQuantityandAddToCart(2);
        });

      await test.step('Validar que el nombre, precio y cantidad sean visibles', async () => {
          await accessoriesPage.verifyProducAddedSuccessfully(2);
        });

      await test.step('Seleccionar boton "Proceed to checkout"', async () => {  
          await accessoriesPage.proceedToCheckout();
        });

      await test.step('Volver a seleccionar "Proceed to checkout"', async () => {  
          await accessoriesPage.finalcheckout();
        });
        
      await test.step('Completar personal information', async () => {
          await loginPage.fillPersonalData(userData);
        });

      await test.step('Completar addresses information', async () => {
          await loginPage.fillAddressesData(userData);
        });  
      
    });   

});
