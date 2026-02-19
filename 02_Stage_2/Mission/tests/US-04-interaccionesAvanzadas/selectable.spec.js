import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Selectable (Selección de Elementos)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Interactions', 'Selectable');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Seleccion individual de elementos', async ({ page }) => {

    const element1 = page.locator('.mt-2.list-group-item.list-group-item-action').filter( { hasText : 'Morbi leo risus'});

    await test.step('Hacer clic en un elemento de la lista', async () => {

        await element1.click();

        });


    await test.step('Verificar que el elemento haya sido seleccionado', async () => {

        await expect(element1).toHaveClass(/active/);
        
        });
    
    });

    test('Seleccion multiple de elementos en grid', async ({ page }) => {

    const gridTabBtn = page.locator('#demo-tab-grid');
    const element1 = page.locator('.list-group-item.list-group-item-action').filter( { hasText : 'One'});
    const element2 = page.locator('.list-group-item.list-group-item-action').filter( { hasText : 'Five'});
    const element3 = page.locator('.list-group-item.list-group-item-action').filter( { hasText : 'Eight'});

    await test.step('Hacer click multiple en 3 elementos de la grilla', async () => {

        await gridTabBtn.click();

        await element1.click({ modifiers: ['Control'], timeout: 12000 });
        await element2.click({ modifiers: ['Control'], timeout: 12000 });
        await element3.click({ modifiers: ['Control'], timeout: 12000 });
        });


    await test.step('Verificar que el elemento haya sido seleccionado', async () => {

        await expect(element1).toHaveClass(/active/);
        await expect(element2).toHaveClass(/active/);
        await expect(element3).toHaveClass(/active/);
        
        });
    
    });

});