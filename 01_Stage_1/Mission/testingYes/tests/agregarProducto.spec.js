import { test, expect } from '@playwright/test';

const USER_EMAIL = 'tomi.lissarrague94@gmail.com';
const USER_PASS = 'Tomilissa2000!'; 

test.describe('Feature: Agregar producto al carrito', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://www.testingyes.com/onlineshop/login?back=my-account');
    
    await page.locator('.form-control[name=email]').fill(USER_EMAIL);
    await page.locator('[name="password"]').fill(USER_PASS);
    await page.locator('#submit-login').click();
    
    await expect(page).toHaveTitle('My account');

    });

    test('Escenario: Seleccionar producto del search y ver detalle', async ({ page }) => {
  
      // Paso 1️⃣ - Dado que el usuario abre la página del search
      await test.step('Dado que el usuario abre la página del search', async () => {
        await page.goto('http://www.testingyes.com/onlineshop/search?controller=search&s=The+adventure+begins');
        await expect(page).toHaveTitle('Search');
        await expect(page.getByRole('link', { name: 'The adventure begins Framed...' })).toBeVisible();
        
      });

      // Paso 2️⃣ - Cuando el usuario selecciona un producto de la lista
      await test.step('Cuando el usuario selecciona un producto de la lista', async () => {
          await page.getByRole('link', { name: 'The adventure begins Framed...' }).click();
            
      });        
  
      // Paso 3️⃣ - Entonces la página debe mostrar el nombre e información del producto
        await test.step('Entonces la página debe mostrar el nombre e información del producto', async () => {
          await expect(page).toHaveTitle('The adventure begins Framed poster');
          await expect(page).toHaveURL('http://www.testingyes.com/onlineshop/art/4-16-the-adventure-begins-framed-poster.html#/19-dimension-40x60cm');
          await expect(page.getByText('$29.00', { exact: true })).toBeVisible;
          await expect(page.locator('.product-variants')).toBeVisible();
          await expect(page.locator('.product-quantity.clearfix')).toBeVisible();
          await expect(page.locator('.social-sharing')).toBeVisible();
          await expect(page.locator('#block-reassurance')).toBeVisible();
          await expect(page.locator('.tabs')).toBeVisible();
          
        });
      });

      test('Escenario: Agregar producto al carrito', async ({ page }) => {
  
      // Paso 1️⃣ - Dado que el usuario abre la página de un producto
      await test.step('Dado que el usuario abre la página de un producto', async () => {
        await page.goto('http://www.testingyes.com/onlineshop/art/4-16-the-adventure-begins-framed-poster.html#/19-dimension-40x60cm');
        await expect(page).toHaveTitle('The adventure begins Framed poster');
        
      });

      // Paso 2️⃣ - Cuando el usuario elige la cantidad y da click en "Add to Cart"
      await test.step('Cuando el usuario elige la cantidad y da click en "Add to Cart"', async () => {
          await page.locator('#quantity_wanted').fill('3');
          await page.getByRole('button', { name: 'ADD TO CART' }).click();
            
      });        
  
      // Paso 3️⃣ - Entonces la pagina indica que los productos fue agregado exitosamente
        await test.step('Entonces la pagina indica que el producto fue agregado exitosamente', async () => {
        await expect(page.getByText('Product successfully added to your shopping cart', { exact: true })).toBeVisible;
        await expect(page.getByText('There are 3 items in your cart.', { exact: true })).toBeVisible;
        await expect(page.getByText('close', { exact: true })).toBeVisible
        await expect(page.getByRole('button', { name: 'Continue shopping' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Proceed to checkout' })).toBeVisible();
        });
      });
    });

