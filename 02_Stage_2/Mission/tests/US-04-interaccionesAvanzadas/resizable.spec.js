import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Resizable (Redimensión de Cuadro)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Interactions', 'Resizable');
    await page.addStyleTag({ content: '#adplus-anchor, footer { display: none !important; }' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Redimensión al Tamaño Máximo', async ({ page }) => {

    const box = page.locator('#resizableBoxWithRestriction');
    const handle = box.locator('.react-resizable-handle');
    
    await handle.scrollIntoViewIfNeeded();
    const boxBounds = await handle.boundingBox();

  await test.step('Redimensionar el cuadro al máximo (500x300)', async () => {
    
    if (boxBounds) {
            await page.mouse.move(boxBounds.x + boxBounds.width / 2, boxBounds.y + boxBounds.height / 2);
            await page.mouse.down();
            await page.waitForTimeout(100);
            
            await page.mouse.move(boxBounds.x + 400, boxBounds.y + 200, { steps: 20 });
            await page.mouse.up();
        }
  });

  await test.step('Verificar las dimensiones máximas', async () => {
    const finalBoundingBox = await box.boundingBox();
    
    expect(finalBoundingBox?.width).toBe(500);
    expect(finalBoundingBox?.height).toBeCloseTo(300, 0);

  });

});

test('Intentar exceder el tamaño máximo', async ({ page }) => {

    const box = page.locator('#resizableBoxWithRestriction');
    const handle = box.locator('.react-resizable-handle');
    
    await handle.scrollIntoViewIfNeeded();
    const boxBounds = await handle.boundingBox();

  await test.step('Intentar exceder el tamaño máximo', async () => {
    
    if (boxBounds) {
            await page.mouse.move(boxBounds.x + boxBounds.width / 2, boxBounds.y + boxBounds.height / 2);
            await page.mouse.down();
            await page.waitForTimeout(100);
            
            await page.mouse.move(boxBounds.x + 500, boxBounds.y + 300, { steps: 20 });
            await page.mouse.up();
        }
  });

  await test.step('Verificar las dimensiones máximas', async () => {
    const finalBoundingBox = await box.boundingBox();
    
    expect(finalBoundingBox?.width).toBe(500);
    expect(finalBoundingBox?.height).toBeCloseTo(300, 0);

  });

});

});