import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../utils/menuUtils';

test.describe('Validar Accordion', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await openMenuAndSelect(page, 'Widget', 'Accordion');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar accordion por default', async ({ page }) => {
    await expect(page.locator('#collapse1')).toHaveText('This Automation Testing API is very simple to read and understand. Every method in this is self explanatory. If a layman looks into this code/script can understand what is happening. You can read the automation script like manual test case.');
  });

  test('Validar contenido en el segundo accordion ', async ({ page }) => {
    await page.getByText('Collapsible Group 2 - Single Line Coding').click();
    await expect(page.locator('#collapse2[aria-expanded="true"]')).toHaveText('In this Automation tool, each and every functionality will be achieved by Single line code. i.e. Selecting a Value from dropdown, Switching between windows and Drag and Drop functionality etc...');
  });

  test('Validar contenido en el tercer accordion ', async ({ page }) => {
    await page.getByText('Collapsible Group 3 - Methhod Chaining').click();
    await expect(page.locator('#collapse3[aria-expanded="true"]')).toHaveText('As the name indicates, you can chain the methods without breaking the code i.e. you can write the code for each element continuously.');
  });

  test('Validar contenido en el cuarto accordion ', async ({ page }) => {
    await page.getByText('Collapsible Group 4 - Cross Browser Testing').click();
    await expect(page.locator('#collapse4[aria-expanded="true"]')).toHaveText('NTest your web application across the most popular browsers including Firefox,Chrome and Internet Explorer to validate the functionality. You can easily switch between the browsers without changing the code.');
  });

  test('Validar el cierre del accordion ', async ({ page }) => {
    await page.getByText('Collapsible Group 2 - Single Line Coding').click();
    await expect(page.locator('#collapse2')).toHaveText('In this Automation tool, each and every functionality will be achieved by Single line code. i.e. Selecting a Value from dropdown, Switching between windows and Drag and Drop functionality etc...');
    await page.getByText('Collapsible Group 2 - Single Line Coding').click();
    await expect(page.locator('#collapse2[aria-expanded="false"]')).toBeHidden();
  });
  
});