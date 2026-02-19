import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Droppable (Arrastrar y Soltar)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Interactions', 'Droppable');
    await page.addStyleTag({ content: '#adplus-anchor, footer { display: none !important; }' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Arrastre Básico', async ({ page }) => {

    const source = page.locator('#draggable');
    const target = page.locator('#droppable').first();


    await test.step('Arrastrar el elemento', async () => {

        await source.dragTo(target);
        });

    await test.step('Verificar que se muestra el mensaje "Dropped"', async () => {

        await expect(target).toHaveText('Dropped!');
        
        });
    
    });

    test('Arrastre Restrictivo (Prevent Propogation)', async ({ page }) => {

    const prevProTab = page.locator('#droppableExample-tab-preventPropogation');
    const source = page.locator('#dragBox');
    const target = page.locator('#notGreedyDropBox');
    const notTarget = page.locator('#greedyDropBoxInner');

    await test.step('Seleccionar Prevent Prorrogation tab', async () => {

        await prevProTab.click();  
        });
        
    
    await test.step('Arrastrar el elemento', async () => {

        await source.dragTo(target);
        });

    await test.step('Verificar que el primer dropbox muestra el mensaje "Dropped"', async () => {

        await expect(target).toHaveText('Dropped!Dropped!');
        
        });

    await test.step('Verificar que el segundo dropbox no muestra el mensaje "Dropped"', async () => {

        await expect(notTarget).not.toHaveText('Dropped!Dropped!');
        
        });
    
    
    });

});