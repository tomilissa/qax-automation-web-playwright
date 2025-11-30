import { test, expect } from '@playwright/test';

// Función para generar un email único usando la marca de tiempo actual
function generateDynamicEmail() {
  const timestamp = Date.now();
  return `tomi_test_${timestamp}@example.com`;
}

test.describe('Feature: Registrar nuevo usuario', () => {

  test('Escenario: Abrir página de Login', async ({ page }) => {

    // Paso 1️⃣ - Dado que el usuario abre la página principal
    await test.step('Dado que el usuario abre la página principal de Testing Yes', async () => {
      await page.goto('http://www.testingyes.com/onlineshop/');
      await expect(page).toHaveTitle('My e-commerce');
    });

    // Paso 2️⃣ - Cuando hace clic en el enlace "Sign In"
    await test.step('Cuando hace clic en el enlace "Sign In"', async () => {
      await page.click('#_desktop_user_info');
      await expect(page).toHaveURL('http://www.testingyes.com/onlineshop/login?back=my-account');
    });

    // Paso 3️⃣ - Entonces la página debe mostrar el título correcto
    await test.step('Entonces la pagina muestra el título correcto', async () => {
      await expect(page.getByRole('heading', { name: 'Log in to your account' })).toBeVisible();
    });

  }); 

  test('Escenario: Seleccionar opción de crear nueva cuenta', async ({ page }) => {

    // Paso 1️⃣ - Dado que el usuario abre la página de Login
    await test.step('Dado que el usuario abre la página de login', async () => {
      await page.goto('http://www.testingyes.com/onlineshop/login?back=my-account');
      await expect(page).toHaveTitle('Login');
    });

    // Paso 2️⃣ - Cuando hace clic en el enlace "Create account"
    await test.step('Cuando hace clic en el enlace "No account? Create one here"', async () => {
      await page.getByRole('link', { name: 'No account? Create one here' }).click();
      await expect(page).toHaveURL('http://www.testingyes.com/onlineshop/login?create_account=1');
    });  

    // Paso 3️⃣ - Entonces la página debe mostrar el título correcto
    await test.step('Entonces la pagina muestra el título correcto', async () => {
      await expect(page.getByRole('heading', { name: 'Create an account' })).toBeVisible();
    });
    
   });
   
   test('Escenario: Completar formulario de Registro', async ({ page }) => {

    // Generamos el email dinámico que usaremos en este test
    const dynamicEmail = generateDynamicEmail();

    // Paso 1️⃣ - Dado que el usuario abre la página de Register
    await test.step('Dado que el usuario abre la página de Register', async () => {
      await page.goto('http://www.testingyes.com/onlineshop/login?create_account=1');
      await expect(page.getByRole('heading', { name: 'Create an account' })).toBeVisible();  
    });

    // Paso 2️⃣ - Cuando el usuario completa todos los datos y hace clic en el boton Save
    await test.step('Cuando el usuario completa todos los datos y hace clic en el boton Save', async () => {
      await page.getByRole('radio', { name: 'Mr.' }).check();
      await page.locator('[name="firstname"]').fill('Tomas');
      await page.locator('[name="lastname"]').fill('Lissarrague');
      await page.locator("//div[@class='col-md-6']//input[@name='email']").fill(dynamicEmail);
      await page.getByRole('textbox', { name: 'At least 5 characters long' }).fill('Tomilissa2000!');
      await page.getByRole('textbox', { name: 'MM/DD/YYYY'}).fill('05/05/1993');
      await page.getByRole('checkbox', { name: 'I agree to the terms and conditions and the privacy policy'}).check();
      await page.getByRole('button', { name: 'Save'}).click();
      await expect(page).toHaveURL('http://www.testingyes.com/onlineshop/');

      });


    // Paso 3️⃣ - Entonces la página debe mostrar el título correcto y el botón de Sign Out está disponible
    await test.step('Entonces la pagina muestra el título correcto', async () => {
      await expect(page).toHaveTitle('My e-commerce');
      await expect(page.getByRole('link', { name: 'Sign out' })).toBeVisible();

      }); 
    
    });    
   
  });