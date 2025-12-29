import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Ventanas del navegador', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });


 test('Manejo completo de pestañas', async ({ page, context }) => {

  await openMenuAndSelect(page, 'SwitchTo', 'Windows');

  // 1️⃣ Guardar pestaña original
  const originalPage = page;

  // 2️⃣ Esperar la nueva pestaña ANTES del click
  const newPagePromise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'click' }).click();

  // 3️⃣ Capturar la nueva pestaña
  const newPage = await newPagePromise;
  await newPage.waitForLoadState();
  console.log('Nueva pestaña abierta:', newPage.url());

  // 4️⃣ Regresar a la pestaña original
  await originalPage.bringToFront();
  console.log('Regresé a la pestaña original:', originalPage.url());

  // 5️⃣ Volver a la pestaña nueva otra vez
  await newPage.bringToFront();
  console.log('Regresé a la nueva pestaña nuevamente.');

  // 6️⃣ Cerrar la pestaña nueva
  await newPage.close();
  console.log('Pestaña nueva cerrada.');

  // 7️⃣ Confirmar que sigues en la pestaña original
  await originalPage.bringToFront();
  console.log('Volví a la pestaña original tras cerrar la nueva.');

  });


  test('Manejo completo de ventanas', async ({ page, context }) => {

  await openMenuAndSelect(page, 'SwitchTo', 'Windows');
  await page.getByText('Open New Seperate Windows').click();

  // 1️⃣ Guardar ventana original
  const originalPage = page;

  // 2️⃣ Esperar la nueva ventana ANTES del click
  const newPagePromise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'click' }).click();

  // 3️⃣ Capturar la nueva ventana
  const newPage = await newPagePromise;
  await newPage.waitForLoadState();
  console.log('Nueva ventana abierta:', newPage.url());

  // 4️⃣ Regresar a la ventana original
  await originalPage.bringToFront();
  console.log('Regresé a la ventana original:', originalPage.url());

  // 5️⃣ Volver a la ventana nueva otra vez
  await newPage.bringToFront();
  console.log('Regresé a la nueva ventana nuevamente.');

  // 6️⃣ Cerrar la ventana nueva
  await newPage.close();
  console.log('Nueva ventana cerrada.');

  // 7️⃣ Confirmar que sigues en la ventana original
  await originalPage.bringToFront();
  console.log('Volví a la ventana original tras cerrar la nueva.');

  });

});