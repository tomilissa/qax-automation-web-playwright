import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Dragabble (Arrastre Libre y Restringido)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Interactions', 'Dragabble');
    await page.addStyleTag({ content: '#adplus-anchor, footer { display: none !important; }' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Arrastre Libre', async ({ page }) => {

    const dragBox = page.locator('#dragBox');

    let initialBounds = null; 


    await test.step('Calcular y realizar movimiento aleatorio', async () => {

      await dragBox.scrollIntoViewIfNeeded();

      initialBounds = await dragBox.boundingBox()

        if (initialBounds) {
            const randomX = Math.floor(Math.random() * 200) + 50;
            const randomY = Math.floor(Math.random() * 200) + 50;

            await page.mouse.move(initialBounds.x + initialBounds.width / 2, initialBounds.y + initialBounds.height / 2);
            await page.mouse.down();
            await page.mouse.move(initialBounds.x + randomX, initialBounds.y + randomY, { steps: 10 });
            await page.mouse.up();
        }
    });

    await test.step('Verificar que la posición cambió', async () => {
        const finalBounds = await dragBox.boundingBox();

        expect(initialBounds).not.toBeNull();
        expect(finalBounds).not.toBeNull();

        if (initialBounds && finalBounds) {
            expect(finalBounds.x).not.toBe(initialBounds.x);
            expect(finalBounds.y).not.toBe(initialBounds.y);
        }

        await expect(dragBox).toHaveAttribute('style', /left/);

        });
    
    });

    test('Arrastre Restringido (Axis)', async ({ page }) => {

    const axisRestrictedTab = page.locator('#draggableExample-tab-axisRestriction')
    const dragBox1 = page.locator('#restrictedX');

    let initialBounds = null; 


    await test.step('Calcular y realizar movimiento aleatorio', async () => {

      await axisRestrictedTab.click();
      
      await dragBox1.scrollIntoViewIfNeeded();

      initialBounds = await dragBox1.boundingBox()

        if (initialBounds) {
            const randomX = Math.floor(Math.random() * 200) + 50;
            const randomY = Math.floor(Math.random() * 200) + 50;

            await page.mouse.move(initialBounds.x + initialBounds.width / 2, initialBounds.y + initialBounds.height / 2);
            await page.mouse.down();
            await page.mouse.move(initialBounds.x + randomX, initialBounds.y + randomY, { steps: 10 });
            await page.mouse.up();
        }
    });


    await test.step('Verificar que la posición cambió', async () => {
        const finalBounds = await dragBox1.boundingBox();

        expect(initialBounds).not.toBeNull();
        expect(finalBounds).not.toBeNull();

        if (initialBounds && finalBounds) {
            expect(finalBounds.x).not.toBe(initialBounds.x);
            expect(finalBounds.y).toBe(initialBounds.y);
        }

        await expect(dragBox1).toHaveAttribute('style', /left/);

        });
    
    });

});
