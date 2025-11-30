import { test, expect } from '@playwright/test';

const USER_EMAIL = 'tomi.lissarrague94@gmail.com';
const USER_PASS = 'Tomilissa2000!'; 

test.describe('Feature: Navegación por el catálogo de productos ', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://www.testingyes.com/onlineshop/login?back=my-account');
    
    await page.locator('.form-control[name=email]').fill(USER_EMAIL);
    await page.locator('[name="password"]').fill(USER_PASS);
    await page.locator('#submit-login').click();
    
    await expect(page).toHaveTitle('My account');

    });

    test('Escenario: Realizar una busqueda utilizando el buscador', async ({ page }) => {
  
      // Paso 1️⃣ - Dado que el usuario abre la página principal
      await test.step('Dado que el usuario abre la página principal', async () => {
        await page.goto('http://www.testingyes.com/onlineshop/');
        await expect(page).toHaveTitle('My e-commerce');
        await expect(page.locator('section.featured-products.clearfix')).toBeVisible();
        
      });

      // Paso 2️⃣ - Cuando el usuario hace una búsqueda en el buscador
      await test.step('Cuando el usuario hace una búsqueda en el buscador', async () => {
          await page.getByRole('textbox', { name: 'Search' }).fill('The adventure begins')
          await page.getByRole('textbox', { name: 'Search' }).press('Enter');
            
     });        
  
      // Paso 3️⃣ - Entonces la pagina muestra un listado de productos filtrado de acuerdo a la opción ingresada
        await test.step('Entonces la pagina muestra un listado de productos filtrado de acuerdo a la opción ingresada', async () => {
          await expect(page).toHaveTitle('Search');
          await expect(page).toHaveURL('http://www.testingyes.com/onlineshop/search?controller=search&s=The+adventure+begins');
          await expect(page.locator('#js-product-list')).toBeVisible();
          await expect(page.getByRole('link', { name: 'The adventure begins Framed...' })).toBeVisible();
          
          });
      });

      test('Escenario: Realizar una busqueda de productos navegando en el menu principal', async ({ page }) => {
  
      // Paso 1️⃣ - Dado que el usuario abre la página principal
      await test.step('Dado que el usuario abre la página principal', async () => {
        await page.goto('http://www.testingyes.com/onlineshop/');
        await expect(page).toHaveTitle('My e-commerce');
        await expect(page.locator('section.featured-products.clearfix')).toBeVisible();
        
      });

      // Paso 2️⃣ - Cuando el usuario navega utlizando el menu principal
          await test.step('Cuando el usuario navega utlizando el menu principal', async () => {
            await page.locator('#category-6').hover();
            await page.locator('#category-8').click();
         });     

       
  
      // Paso 3️⃣ - Entonces la pagina muestra un listado de productos filtrado de acuerdo a la opción seleccionada
        await test.step('Entonces la pagina muestra un listado de productos filtrado', async () => {
            await expect(page).toHaveTitle('Home Accessories');
            await expect(page).toHaveURL('http://www.testingyes.com/onlineshop/8-home-accessories');
            await expect(page.locator('#js-product-list')).toBeVisible();
            await expect(page.getByRole('link', { name: 'Hummingbird cushion' }).first()).toBeVisible();
          });      
    });

  });