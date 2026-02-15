import { test } from '@playwright/test';
import { generateRandomEmail } from '../tests/utils/dataGenerator'; 
  
  test('Hacer una compra en Mercado Libre', async ({ page }) => {
    
    const userName = generateRandomEmail();
    
    await page.goto('/');
    await page.getByRole('link', { name: 'Argentina' }).click();
    await page.getByRole('link', { name: 'Electrónica, Audio y Video' }).click();
    await page.getByRole('link', { name: 'Smart Tv LG Smart Tv 43ur8750' }).click();
    await page.getByRole('button', { name: 'Comprar ahora' }).click();
    await page.locator('#user_id').fill(userName);

    });