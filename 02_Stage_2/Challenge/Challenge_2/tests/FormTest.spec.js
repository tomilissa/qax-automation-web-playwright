import { test, expect } from '@playwright/test';
import { 
  fillText,
  fillTextByLabel,
  fillInputInside,
  selectCheckboxByLabel,
  selectFromDropdown,
  select2Search
} from '../utils/formUtils';

const email = 'ninjaforTesting@qaxpert.com';
const firstName = 'Vicente';
const lastName = 'Lopez';
const address = 'Calle Automation N420, QAXpert City';
const phone = '3152938051';

test.describe('Feature: Realizar un registro completo en el formulario', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Index.html');
  });

  test('Ingresar formulario completo', async ({ page }) => {

    const formGroup = page.locator('.form-group');

    await test.step('Ingresar al formulario de registro', async () => {
      await page.locator('#email').fill(email);
      await page.locator('#enterimg').click();
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await fillTextByLabel(formGroup, 'Full Name', 'First Name', firstName);
      await fillTextByLabel(formGroup, 'Full Name', 'Last Name', lastName);
    });

    await test.step('Ingresar Address', async () => {
      await fillInputInside(formGroup, 'Address', 'textarea', address);
    });

    await test.step('Ingresar Email', async () => {
      await fillInputInside(formGroup, 'Email', '#eid input', email);
    });

    await test.step('Ingresar Teléfono', async () => {
       await fillText(formGroup, 'Phone', phone);
    });

    await test.step('Seleccionar género', async () => {
      await page.locator('input[value="Male"]').check();
    });

    await test.step('Seleccionar hobbies', async () => {
      await selectCheckboxByLabel(formGroup, 'Hobbies', 2); // último checkbox
    });

    await test.step('Seleccionar idiomas', async () => {
      await page.locator('#msdd').click();
      await page.getByText('English', { exact: true }).click();
      await page.getByText('Spanish', { exact: true }).click();
      await page.locator('body').click();
    });

    await test.step('Seleccionar Skills', async () => {
      await selectFromDropdown(page.locator('#Skills'), 'Ruby');
    });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
      const countrySelect = page.locator('.select2-selection');
      await select2Search(countrySelect, 'a', 'Denmark');
    });

    await test.step('Seleccionar fecha', async () => {
      const dateSection = formGroup.filter({ hasText: 'Date of Birth' });
      await selectFromDropdown(dateSection.locator('#yearbox'), '2000');
      await selectFromDropdown(dateSection.locator('select[ng-model="monthbox"]'), 'May');
      await selectFromDropdown(dateSection.locator('#daybox'), '1');
    });

    await test.step('Ingresar Password', async () => {
      await page.locator('#firstpassword').fill('Qaxpert123*');
      await page.locator('#secondpassword').fill('Qaxpert123*');
    });

    await test.step('Enviar formulario', async () => {
      await page.locator('#submitbtn').click();
    });

  });
});