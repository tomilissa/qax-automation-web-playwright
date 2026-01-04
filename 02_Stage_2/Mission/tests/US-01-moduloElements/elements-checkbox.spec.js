import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';


test.describe('Validar Checkbox - Selección Jerárquica', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Check Box');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

    test('Selección de Nivel Superior', async ({ page }) => {

    const checkboxOptions = page.locator('label');

        await test.step('Seleccionar Home Checkbox', async () => {
            await checkboxOptions.filter({ hasText: 'Home' }).check();
        });
        
        await test.step('Validar mensaje de opciones seleccionadas', async () => {
            await expect (page.locator('#result')).toHaveText('You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
        });
        
    });

    test('Selección Parcial', async ({ page }) => {

    const treeOptions = page.locator('#tree-node');
    const checkboxOptions = page.locator('label');
    const homeCheckboxIcon = page.locator('label[for="tree-node-home"] .rct-icon').first();

        await test.step('Seleccionar Desktop checkbox', async () => {
            await treeOptions.getByRole('button',{name: 'Expand all'}).click();
            await checkboxOptions.filter({ hasText: 'Desktop' }).check();
        });

        await test.step('Seleccionar Downloads checkbox', async () => {
            await checkboxOptions.filter({ hasText: 'Downloads' }).check();  
        });

        await test.step('Validar que el checkbox de Home muestra el estado de selección parcial', async () => {          
            await expect(homeCheckboxIcon).toHaveClass(/rct-icon-half-check/);
        });   
        
    });
    
    
});
