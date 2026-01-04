import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Interacción con Catálogo de Libros', () => {
    
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

  test('Validar la funcionalidad de búsqueda en el catálogo de libros', async ({ page }) => {

    await test.step('Hacer click en "Go To Book Store"', async () => {
        
        await page.getByRole('button', { name: 'Go To Book Store' }).click();
        await expect(page).toHaveURL('https://demoqa.com/books');
        });

    await test.step('Ingresar un término de búsqueda válido en el campo de búsqueda', async () => {
        await page.getByRole('textbox', { name: 'Type to search' }).fill('JavaScript');
        });

    await test.step('Hacer click en el primer resultado', async () => {
        await page.getByRole('link', { name: 'Learning JavaScript Design Patterns' }).click()
        });

    await test.step('Validar datos del libro seleccionado', async () => {
        await expect(page).toHaveURL('https://demoqa.com/books?book=9781449331818');
        
    });
    

  });

});