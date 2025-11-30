import { test, expect } from '@playwright/test';

test.describe('Feature: Validar navegación al formulario de Login en Herokuapp', () => {

  test('Escenario: Verificar la información en la página de Login', async ({ page }) => {

    // Paso 1️⃣ - Dado que el usuario abre la página principal
    await test.step('Dado que el usuario abre la página principal de Herokuapp', async () => {
      await page.goto('https://katalon-demo-cura.herokuapp.com/');
      await expect(page).toHaveTitle('CURA Healthcare Service');
    });

    // Paso 2️⃣ - Cuando hace clic en el enlace "Make Appointment"
    await test.step('Cuando hace clic en el enlace "Make Appointment"', async () => {
      await page.click('#btn-make-appointment');
      await expect(page).toHaveURL(/profile.php#login/);
    });

    // Paso 3️⃣ - Entonces la página debe mostrar el título correcto
    await test.step('Entonces la pagina muestra el contenido esperado', async () => {
      await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
      await expect(page.locator('#txt-username')).toBeVisible();
      await expect(page.locator('#txt-password')).toBeVisible();
      await expect(page.locator('#btn-login')).toBeVisible()
    });

  });

});