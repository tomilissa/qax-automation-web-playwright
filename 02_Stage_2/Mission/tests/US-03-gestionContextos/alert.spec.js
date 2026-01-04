import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Alerts (Alertas del Navegador)', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Alerts, Frame & Windows', 'Alerts');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar alerta simple', async ({ page }) => {
    
    const simpleAlertBtn = page.locator('#alertButton');

    page.on('dialog', async dialog => {
        console.log(`Mensaje recibido: ${dialog.message()}`);
        expect(dialog.message()).toBe('You clicked a button');
        await dialog.accept();
    });

    await test.step('Hacer click en botón y manejar la alerta', async () => {
        
        await simpleAlertBtn.click({ force: true });
        
    });

  });

  test('Validar alerta de prompt', async ({ page }) => {

    const promptAlertBtn = page.locator('#promtButton')

        page.on('dialog', async dialog => {
        console.log(`Mensaje recibido: ${dialog.message()}`);
        expect(dialog.message()).toBe('Please enter your name');
        await dialog.accept('Tomas');
    });

    await test.step('Validar alerta de prompt ingresando texto', async () => {
        
        await promptAlertBtn.click({ force: true });
        
    });
    
    
  });
  

});