import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validar Loader', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await openMenuAndSelect(page, 'More', 'Loader');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar que el loader aparezca y desaparezca', async ({ page }) => {
    
    const botonRun = page.getByRole('button', { name: 'Run' });
    const modalCarga = page.locator('.blockMsg.blockPage');
    const modalContenido = page.locator('.modal-content'); 
    const modalBody = page.locator('.modal-body');
    
    await botonRun.click();
    await expect(modalCarga).toBeVisible();
    await expect(modalCarga).toContainText('Please wait');
    await modalCarga.waitFor({ state: 'hidden', timeout: 20000 });

    await expect(modalBody).toContainText('Lorem ipsum', { timeout: 15000 });

    const btnClose = page.getByRole('button', { name: 'Close' });
    await expect(btnClose).toBeVisible();
    await btnClose.click();

    await expect(modalContenido).toBeHidden();


    }); 

 });