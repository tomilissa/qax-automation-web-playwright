import { test } from '@playwright/test';
import { generateRandomEmail } from '../tests/utils/dataGenerator'; 
  
  test('Hacer una compra en Mercado Libre', async ({ page }) => {
    
    const userName = generateRandomEmail();
    
    await page.goto('https://mercadolibre.com/');

    const cookieButton = page.getByRole('button', { name: 'Aceptar cookies' });
    if (await cookieButton.isVisible()) {
        await cookieButton.click();
    }

    await page.getByRole('link', { name: 'Argentina' }).click();
    await page.getByRole('link', { name: 'Supermercado' }).click();
    await page.getByRole('link', { name: 'Agua Eco de los Andes Sin Gas Botella 500cc x1 Unidad' }).click();

    const addBtn = page.locator('button:has-text("Agregar al carrito")');
    await addBtn.click({ force: true });

    const ingresarBtn = page.getByText('Ingresar')
    await ingresarBtn.click({ force: true });
    
    await page.locator('#user_id').fill(userName);

    });