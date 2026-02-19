import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Login y Gestión de Parámetros (Consola)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Book Store Application', 'Login');
    await page.addStyleTag({ content: '#adplus-anchor, footer { display: none !important; }' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });


  test('Login con credenciales desde consola', async ({ page }) => {

    test.setTimeout(120000);

    const username = process.env.USER_NAME;
    const password = process.env.USER_PASS;

    if (!username || !password) {
        throw new Error('Error: Credenciales no proporcionadas en la terminal.');
    }

    await page.getByRole('textbox', { name: 'UserName' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://demoqa.com/profile');
    await expect(page.locator('#userName-value')).toHaveText('Tomilissa1');

    });

 });