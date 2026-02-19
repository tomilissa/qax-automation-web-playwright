import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Buttons (Acciones de Clic)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Buttons');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verificar el comportamento del doble click', async ({ page }) => {

    const doubleClickBtn = page.locator('#doubleClickBtn');
    const doubleClickMessage = page.locator('#doubleClickMessage');

    await test.step('Hacer doble click sobre el botón', async () => {
        await doubleClickBtn.dblclick();
    });

    await test.step('Verificar mensaje de doble click', async () => {
        await expect (doubleClickMessage).toHaveText('You have done a double click');
    });
    
  });

  test('Verificar el comportamento del click derecho', async ({ page }) => {

    const rightClickBtn = page.locator('#rightClickBtn');
    const rightClickMessage = page.locator('#rightClickMessage');

    await test.step('Hacer click derecho sobre el botón', async () => {
        await rightClickBtn.click({ button: 'right' });
    });

    await test.step('Verificar mensaje de click derecho', async () => {
        await expect (rightClickMessage).toHaveText('You have done a right click');
    });
    
  });

  test('Verificar el comportamento del click simple', async ({ page }) => {

    const clickBtn = page.getByRole('button', { name: 'Click Me', exact: true });
    const clickMessage = page.locator('#dynamicClickMessage');

    await test.step('Hacer click simple sobre el botón', async () => {
        await clickBtn.click();
    });

    await test.step('Verificar mensaje de click simple', async () => {
        await expect (clickMessage).toHaveText('You have done a dynamic click');
    });
    
  });
  
});