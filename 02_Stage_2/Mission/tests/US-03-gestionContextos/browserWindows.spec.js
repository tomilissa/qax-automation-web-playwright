import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Browser Window (Ventanas y Pestañas)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Alerts, Frame & Windows', 'Browser Windows');
  });


  test('Abrir nueva pestaña', async ({ page, context }) => {
        const newTabBtn = page.locator('#tabButton');
        const pagePromise = context.waitForEvent('page');

    await test.step('Hacer click en botón para abrir una nueva pestaña', async () => {
        await newTabBtn.click();
        });

    await test.step('Verificar que la nueva pestaña carga y tiene el titulo correcto', async () => {
        const newPage = await pagePromise;
        const newTabHeading = await newPage.locator('#sampleHeading');

        await newPage.waitForLoadState();
        await expect(newTabHeading).toHaveText('This is a sample page');
        });

    await test.step('Cambiar el foco a la pestaña principal', async () => {

        await page.bringToFront();
        await expect(page.getByRole('heading', { name: 'Browser Windows' })).toBeVisible();
        });

    });

  test('Abrir nueva ventana', async ({ page, context }) => {
        const newWindowBtn = page.locator('#windowButton');
        const pagePromise = context.waitForEvent('page');

    await test.step('Hacer click en botón para abrir una nueva ventana', async () => {

        await newWindowBtn.click();
        });

        const newPage = await pagePromise;

    await test.step('Verificar que la nueva ventana carga y tiene el titulo correcto', async () => {
        
        await newPage.waitForLoadState();
        const newTabHeading = await newPage.locator('#sampleHeading');
        await expect(newTabHeading).toHaveText('This is a sample page');
        });

        

    await test.step('Cerrar nueva ventana', async () => {

        await newPage.close();
        });

    await test.step('Verificar que volvimos a la página principal', async () => {
        const mainPageTitle = page.getByRole('heading', { name: 'Browser Windows' });
        await expect(mainPageTitle).toBeVisible();
        });
        
    });

    test('Abrir nueva ventana con mensaje', async ({ page, context }) => {
        const newWinMsgBtn = page.locator('#messageWindowButton');
        const pagePromise = context.waitForEvent('page');

    await test.step('Hacer click en botón para abrir una nueva ventana', async () => {

        await newWinMsgBtn.click();
        });

        const newPage = await pagePromise;

    await test.step('Verificar que la nueva ventana carga y tiene el texto correcto', async () => {
        
        await newPage.waitForLoadState();
        await expect(newPage.getByText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')).toBeVisible();
        });

    await test.step('Cerrar nueva ventana', async () => {

        await newPage.close();
        });

    await test.step('Verificar que volvimos a la página principal', async () => {
        const mainPageTitle = page.getByRole('heading', { name: 'Browser Windows' });
        await expect(mainPageTitle).toBeVisible();
        });
        
    });
    
});