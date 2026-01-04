import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Frames (iFrames Simples)', () => {

    test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar contenido en iframe simple', async ({ page, context }) => {

    await test.step('Cambiar de foco al iframe y obtener el texto', async () => {
    
        const firstFrame = page.frameLocator('#frame1');

        await page.goto('https://demoqa.com/');
        await selectCardandOption(page, 'Alerts, Frame & Windows', 'Frames');

        await expect(firstFrame.getByText('This is a sample page')).toBeVisible();

        });

    await test.step('Volver a la página principal y validar contenido', async () => {
        
        await expect(page.getByText('Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame, which is this window, and the two frames below')).toBeVisible();
        });
    
    });

    test('Interactuar con iframes anidados', async ({ page }) => {

        const mainFrame = page.frameLocator('#frame1');
        const childFrame = mainFrame.frameLocator('iframe[srcdoc*="Child Iframe"]');

        await page.goto('https://demoqa.com/');
        await selectCardandOption(page, 'Alerts, Frame & Windows', 'Nested Frames');

        
        await test.step('Validar contenido en child frame', async () => {
            await expect(childFrame.getByText('Child Iframe')).toBeVisible();
        });
        
        await test.step('Validar contenido en el frame padre', async () => {
            await expect(mainFrame.getByText('Parent frame')).toBeVisible();
        });

        await test.step('validar contenido en la página principal', async () => {
            await expect(page.getByText('Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame and the nested child frame.')).toBeVisible();
            
        });
        
    })
    

});