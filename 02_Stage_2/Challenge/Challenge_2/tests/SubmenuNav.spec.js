import { test, expect } from '@playwright/test';
import { openMenuAndSelect, openMenuAndSelectDoubleHover } from '../utils/menuUtils';

test.describe('Submenu Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verificar la opción Home del menu', async ({ page }) => {
    await page.getByText('Home').click();
    await expect(page).toHaveURL('https://demo.automationtesting.in/Index.html');
    await expect(page).toHaveTitle('Index');
  });

  test('Verificar la opción WebTable del menu', async ({ page }) => {
    await page.getByText('WebTable').click();
    await expect(page).toHaveURL('https://demo.automationtesting.in/WebTable.html');
    await expect(page).toHaveTitle('Web Table');
  });

  test('Verificar la opción SwitchTo > Alerts del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'SwitchTo', 'Alerts');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Alerts.html');
    await expect(page).toHaveTitle('Alerts');
  });

  test('Verificar la opción SwitchTo > Windows del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'SwitchTo', 'Windows');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Windows.html');
    await expect(page).toHaveTitle('Frames & windows');
  });

  test('Verificar la opción SwitchTo > Frames del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'SwitchTo', 'Frames');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Frames.html');
    await expect(page).toHaveTitle('Frames');
  });

  test('Verificar la opción Widgets > Accordion del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'Widgets', 'Accordion');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Accordion.html');
    await expect(page).toHaveTitle('Accordion');
  });

  test('Verificar la opción Widgets > AutoComplete del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'Widgets', 'AutoComplete');
    await expect(page).toHaveURL('https://demo.automationtesting.in/AutoComplete.html');
    await expect(page).toHaveTitle('Autocomplete');
  });

  test('Verificar la opción Widgets > Datepicker del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'Widgets', 'Datepicker');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Datepicker.html');
    await expect(page).toHaveTitle('Datepicker');
  });

  test('Verificar la opción Interactions > Drag and Drop > Static del menu', async ({ page }) => {
    await openMenuAndSelectDoubleHover(page, 'Interactions', 'Drag and Drop', 'Static');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Static.html');
    await expect(page).toHaveTitle('Drag and Drop');
  });

  test('Verificar la opción WYSIWYG > CKEditor del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'WYSIWYG', 'CKEditor');
    await expect(page).toHaveURL('https://demo.automationtesting.in/CKEditor.html');
    await expect(page).toHaveTitle('CKEditor');
  });

  test('Verificar la opción More > Charts del menu', async ({ page }) => {
    await openMenuAndSelect(page, 'More', 'Charts');
    await expect(page).toHaveURL('https://demo.automationtesting.in/Charts.html');
    await expect(page).toHaveTitle('Charts demo');
  });
  
});
