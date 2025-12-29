import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validación popup', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Interactuar con Alert with OK', async ({ page }) => {

    await openMenuAndSelect(page, 'SwitchTo', 'Alerts');

    page.on('dialog', dialog => dialog.accept());
    const alertEvent = page.waitForEvent('dialog');
    await page.getByRole('button', { name: 'click the button to display' }).click();
    const alert = await alertEvent;

    console.log('Texto del alert:', alert.message());
    console.log('Menú SwitchTo abierto y opción Alerts seleccionada correctamente.');

  });

  test('Interactuar con Alert with OK & Cancel - Option OK', async ({ page }) => {

    await openMenuAndSelect(page, 'SwitchTo', 'Alerts');
    await page.getByText('Alert with OK & Cancel').click();

    page.on('dialog', dialog => dialog.accept());
    const alertEvent = page.waitForEvent('dialog');
    await page.getByRole('button', { name: 'click the button to display a confirm box' }).click();
    const alert = await alertEvent;

    console.log('Texto del alert:', alert.message());

    await expect(page.locator('#demo')).toHaveText('You pressed Ok', { exact: true });
    console.log('Menú SwitchTo abierto y opción OK seleccionada correctamente.');

  });

  test('Interactuar con Alert with OK & Cancel - Option Cancel', async ({ page }) => {

    await openMenuAndSelect(page, 'SwitchTo', 'Alerts');
    await page.getByText('Alert with OK & Cancel').click();

    page.on('dialog', dialog => dialog.dismiss());
    const alertEvent = page.waitForEvent('dialog');
    await page.getByRole('button', { name: 'click the button to display a confirm box' }).click();
    const alert = await alertEvent;

    console.log('Texto del alert:', alert.message());

    await expect(page.locator('#demo')).toHaveText('You Pressed Cancel', { exact: true });
    console.log('Menú SwitchTo abierto y opción cancel seleccionada correctamente.');

  });

  test('Interactuar con Alert with Textbox', async ({ page }) => {

    const textoAIntroducir = 'TomiLissa';

    await openMenuAndSelect(page, 'SwitchTo', 'Alerts');
    await page.getByText('Alert with Textbox').click();

    page.once('dialog', async dialog => {
        console.log(`Mensaje del Prompt: ${dialog.message()}`);
        await dialog.accept(textoAIntroducir);
    });

    await page.getByRole('button', { name: 'click the button to demonstrate the prompt box' }).click();
    await expect(page.locator('#demo1')).toHaveText(`Hello ${textoAIntroducir} How are you today`, { exact: true });

  });
  
}); 