import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Radio Button - Selección Exclusiva', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Radio Button');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar seleccion opción YES', async ({ page }) => {

    const yesLabel = page.getByText('Yes');
    const confirmationMessage = page.locator('.mt-3');

    await test.step('Seleccionar opción YES', async () => {
        await yesLabel.check();
    });

    await test.step('Validar mensaje de confirmación', async () => {
        await expect (confirmationMessage).toHaveText('You have selected Yes');
    });

  });
    

  test('Validar seleccion opción IMPRESSIVE', async ({ page }) => {

    const impressiveLabel = page.getByText('Impressive');
    const confirmationMessage = page.locator('.mt-3');

    await test.step('Seleccionar opción IMPRESSIVE', async () => {
        await impressiveLabel.check();
    });

    await test.step('Validar mensaje de confirmación', async () => {
        await expect(confirmationMessage).toHaveText('You have selected Impressive');
    });

  });

  test('Validar que la opción NO está deshabilitada y no se puede seleccionar', async ({ page }) => {

    const NoLabel = page.getByText('No');

    await test.step('Validar que la opción NO está deshabilitada y no se puede seleccionar', async () => {
        await expect(NoLabel).toBeDisabled();
    });
        
  });
      
});