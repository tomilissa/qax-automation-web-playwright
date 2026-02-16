import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountPage } from '../pages/AccountPage';
import { generateRandomUserName } from './utils/dataGenerator';
  

  test.describe('Crear nueva cuenta bancaria', () => {

  let homePage; 
  let registerPage;
  let accountPage;
  let userData;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    accountPage = new AccountPage(page);  

    userData = {
        firstName: 'Tomas',
        lastName: 'Lissarrague',
        address: 'Aguado 3345',
        city: 'Buenos Aires',
        state: 'Bs As',
        zipCode: '1645',
        phone: '1141997403',
        ssn: 'Test 1',
        username: generateRandomUserName(),
        password: 'Tolissa343123!'
      };
    
    await homePage.navigate('/');
    await homePage.isAtHomePage();
    });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

    
    test('Crear nuevo usuario y cuenta bancaria', async ({ page }) => {

      await test.step('Click on Register button', async () => {
          await homePage.clickOnRegister();
        });

      await test.step('Verificar que se abre página de Register', async () => {
          await registerPage.isAtRegistrationPage();
        });

      await test.step('Completar formulario de registro', async () => {
          await registerPage.fillRegistrationForm(userData);
        });

      await test.step('Validar mensaje de creación exitosa', async () => {
          await registerPage.isRegistrationOk()
        });

      await test.step('Abrir nueva cuenta', async () => {
          await accountPage.openNewAccount();
        });

      await test.step('Validar mensaje de apertura de cuenta exitosa', async () => {
          await accountPage.isAccountOpenSuccessfully();
        });  

      await test.step('Ir a los detalles de la nueva cuenta', async () => {
          await accountPage.getAccountDetails();         
        });
        
      await test.step('Verificar que la cuenta contenga un monto inicial', async () => {
          await accountPage.verifyInitialAmount('$600.00');
        
      });
        
    });
        
});
