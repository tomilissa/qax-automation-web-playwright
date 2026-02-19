import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Check perfil y Cierre de Sesión', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Book Store Application', 'Login');
    await page.addStyleTag({ content: '#adplus-anchor, footer { display: none !important; }' });

    const username = 'Tomilissa1';
    const password = 'Toli9190!';

    await page.getByRole('textbox', { name: 'UserName' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://demoqa.com/profile');

  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar contenido página de perfil y logout', async ({ page }) => {
    
    await test.step('Validar contenido página perfil', async () => {
        await expect(page).toHaveURL('https://demoqa.com/profile');
        await expect(page.locator('#userName-value')).toHaveText('Tomilissa1');
        await expect(page.locator('.rt-table')).toBeVisible();
        
    });

    await test.step('Hacer click en botón Logout y verificar URL', async () => {
        await page.getByRole('button', { name: 'Log out' }).click();
        await expect(page).toHaveURL('https://demoqa.com/login');
        await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    });
    
    
  });
  
});
