import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Sortable (Reordenamiento de Lista)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Interactions', 'Sortable');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verificar el reordenamiento en una lista vertical', async ({ page }) => {
    await test.step('Arrastrar el Item 4 a la posición del Item 1', async () => {

        const listTab = page.locator('#demo-tabpane-list');
        const source = listTab.locator('.list-group-item.list-group-item-action').filter( { hasText : 'Four'});
        const target = listTab.locator('.list-group-item.list-group-item-action').first();
        await source.dragTo(target);

        await expect(target).toHaveText('Four');
        
    });
    
  });

  test('Verificar el reordenamiento Horizontal en un grid', async ({ page }) => {

    await test.step('Arrastrar un elemento a una posición no adyacente', async () => {
        
        const gridTab = page.locator('#demo-tabpane-grid');
        const gridTabBtn = page.locator('#demo-tab-grid');
        const source = gridTab.locator('.list-group-item.list-group-item-action').filter( { hasText : 'One'});
        const target = gridTab.locator('.list-group-item.list-group-item-action').last();

        await gridTabBtn.click();
        await source.dragTo(target);

        await expect(target).toHaveText('One');
    });
    
  });

});
  