import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validar Modales', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await openMenuAndSelect(page, 'More', 'Modals');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar contenido dentro del primer modal', async ({ page }) => {
    
    await page.locator('a[href="#myModal"]').click();
    await expect(page.locator('#myModal')).toBeVisible();
    await expect(page.locator('#myModal .modal-title')).toHaveText('Modal title');
    await expect(page.locator('#myModal .modal-body')).toContainText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    
  });

  test('Cerrar primer modal', async ({ page }) => {
    
    await page.locator('a[href="#myModal"]').click();
    await expect(page.locator('#myModal')).toBeVisible();

    await page.getByRole('button', { name: 'Close' }).nth(1).click();
    await expect(page.locator('#myModal')).toBeHidden();

  });

  test('Validar contenido dentro del modal anidado', async ({ page }) => {
    
    await page.locator('a[href="#myModalMulti"]').click();
    await expect(page.locator('#myModalMulti')).toBeVisible();
    await expect(page.locator('#myModalMulti .modal-title')).toHaveText('First Modal');
    await expect(page.locator('#myModalMulti .modal-body')).toContainText('This is the place where the content for the modal dialog displays.');

    await page.locator('a[href="#myModal2"]').click();
    await expect(page.locator('#myModal2')).toBeVisible();
    await expect(page.locator('#myModal2 .modal-title')).toHaveText('Modal 2');
    await expect(page.locator('#myModal2 .modal-body')).toHaveText('This is the place where the content for the modal dialog displays.');

   }); 
    
   test('Cerrar modal anidado', async ({ page }) => {
    
    await page.locator('a[href="#myModalMulti"]').click();
    await expect(page.locator('#myModalMulti')).toBeVisible();

    await page.locator('a[href="#myModal2"]').click();
    await expect(page.locator('#myModal2')).toBeVisible();

    await page.getByRole('link', { name: 'Close' }).nth(1).click();
    await expect(page.locator('#myModalMulti')).toBeVisible();
    
  });

});