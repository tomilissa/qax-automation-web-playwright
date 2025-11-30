import { test, expect } from '@playwright/test';

const USER_EMAIL = 'tomi.lissarrague94@gmail.com';
const USER_PASS = 'Tomilissa2000!'; 

test.describe('Feature: Agregar producto al carrito', () => {

  test.beforeEach(async ({ page }) => {
    await test.step('Dado que el usuario inicia sesión correctamente', async () => {
      await page.goto('http://www.testingyes.com/onlineshop/login?back=my-account');
      await page.locator('.form-control[name=email]').fill(USER_EMAIL);
      await page.locator('[name="password"]').fill(USER_PASS);
      await page.locator('#submit-login').click();
    
      await expect(page).toHaveTitle('My account');

    });

    await test.step('Cuando el usuario navega a la página del producto y lo añade al carrito', async () => {
      await page.goto('http://www.testingyes.com/onlineshop/art/4-16-the-adventure-begins-framed-poster.html#/19-dimension-40x60cm');
      await page.locator('#quantity_wanted').fill('3');
      await page.getByRole('button', { name: 'ADD TO CART' }).click();
    
      await expect(page.getByText('Product successfully added to your shopping cart', { exact: true })).toBeVisible;

        });
    });

    test('Escenario: Finalización de compra (checkout)', async ({ page }) => {
  
      // Paso 1️⃣ - Dado que el usuario abre la página principal
      await test.step('Dado que el usuario abre la página principal', async () => {
        await page.goto('http://www.testingyes.com/onlineshop');
        await expect(page).toHaveTitle('My e-commerce');
        
      });

      // Paso 2️⃣ - Cuando el usuario selecciona el carrito y elige proceder con el checkout
      await test.step('Cuando el usuario selecciona el carrito y elige proceder con el checkout', async () => {
          test.setTimeout(60000);

          await page.locator('#_desktop_cart').click();
          await page.getByRole('link', { name: 'Proceed to checkout' }).click();
          await page.getByRole('button', { name: 'Continue' }).click();
          await page.getByRole('button', { name: 'Continue' }).click();
          await page.getByRole('radio', { name: 'Pay by Check' }).click();
          await page.locator('span.custom-checkbox').click();
          await page.getByRole('button', { name: 'Order with an obligation to pay' }).click();
   
      });        
  
      // Paso 3️⃣ - Entonces la página debe mostrar la confimación de compra
        await test.step('Entonces la página debe mostrar la confimación de compra', async () => {
          await expect(page).toHaveTitle('Order confirmation');
          await expect(page.getByRole('heading', { name: 'Your order is confirmed' })).toBeVisible();
        });
      });
    });