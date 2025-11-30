import { test, expect } from '@playwright/test';

test.describe('Feature: Inicio de sesión del usuario', () => {

  test('Escenario: Inicio de sesion del usuario', async ({ page }) => {
  
      // Paso 1️⃣ - Dado que el usuario abre la página de Login
      await test.step('Dado que el usuario abre la página de login', async () => {
        await page.goto('http://www.testingyes.com/onlineshop/login?back=my-account');
        await expect(page).toHaveTitle('Login');
      });

      // Paso 2️⃣ - Cuando el usuario completa el email / password y hace clic en el boton Sign in
          await test.step('Cuando el usuario completa el email / password y hace clic en el boton Sign in', async () => {
            await page.locator('.form-control[name=email]').fill('tomi.lissarrague94@gmail.com');
            await page.locator('[name="password"]').fill('Tomilissa2000!');
            await page.locator('#submit-login').click();
     });        
  
      // Paso 3️⃣ - Entonces la página debe mostrar el título correcto y el botón de Sign Out está disponible
        await test.step('Entonces la pagina muestra el título correcto', async () => {
            await expect(page).toHaveTitle('My account');

    }); 
    
    });    
   
    });