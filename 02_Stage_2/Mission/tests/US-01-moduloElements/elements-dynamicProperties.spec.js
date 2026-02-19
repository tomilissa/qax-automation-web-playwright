import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';


test.describe('Validación de Propiedades Dinámicas', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Dynamic Properties');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verificar que el primer botón se habilite luego de la espera', async ({ page }) => {

    const enable5Btn = page.locator('#enableAfter');
    
    await test.step('Verificar que el botón está originalmente deshabilitado', async () => {

        await expect(enable5Btn).toBeDisabled();
    });

    await test.step('Verificar que el botón se habilite luego de 5 segundos', async () => {

        await expect(enable5Btn).toBeEnabled({ timeout: 6000 });
    });

   });
   
   test('Verificar que el color del texto del botón cambia luego de la espera', async ({ page }) => {

    const colorBtn = page.locator('#colorChange');
    
    await test.step('Verificar que el color del texto del botón es originalmente blanco', async () => {

        await expect(colorBtn).toHaveClass('mt-4 btn btn-primary');
    });
        
    await test.step('Verificar que el color del texto del botón cambia a rojo luego de 5 segundos', async () => {

        await expect(colorBtn).toHaveClass('mt-4 text-danger btn btn-primary', { timeout: 6000 });
        
    });

   });
   

  test('Verificar que el botón sea visible luego de la espera', async ({ page }) => {

    const visible5Btn = page.locator('#visibleAfter');
    
    await test.step('Verificar que el botón no está visible', async () => {

        await expect(visible5Btn).not.toBeVisible();
    });

    await test.step('Verificar que el botón esté visible luego de 5 segundos', async () => {

        await expect(visible5Btn).toBeVisible({ timeout: 6000 }); 
    });

  });

});