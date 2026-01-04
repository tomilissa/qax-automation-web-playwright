import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Modal Dialogs (Ventanas Modales)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Alerts, Frame & Windows', 'Modal Dialogs');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  

  test('Validar Modal', async ({ page }) => {

        const modal = page.locator('.modal-content');
        const smallModalBtn = page.locator('#showSmallModal');
        const closeModalBtn = page.locator('#closeSmallModal');

    await test.step('Abrir Modal y validar contenido', async () => {
        
        await smallModalBtn.click();
        });

    await test.step('Validar contenido del modal', async () => {

        await expect(modal).toBeVisible();
        await expect(modal.locator('.modal-body')).toContainText('This is a small modal');
        });

    await test.step('Cerrar modal', async () => {
        
        await closeModalBtn.click();
        await expect(modal).not.toBeVisible();
        });

  });

});
    


        


        