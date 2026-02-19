import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

test.describe('Web Tables (Formulario de Registro y Edición)', () => {

  const firstName = 'Tomas';
  const lastName = 'Lissarrague';
  const email = 'tomilissa@gmail.com';
  const age = '32';
  const salary = '1000';
  const department = 'Department 1';

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Web Tables');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Añadir Nuevo Registro', async ({ page }) => {

    const addButton = page.locator('#addNewRecordButton');
    const registrationForm = page.getByRole('document');
    const submitButton = registrationForm.getByRole('button', { name: 'Submit' });
    const tableRows = page.locator('.rt-tr-group');


    await test.step('Abrir Formulario', async () => {
        await addButton.click();
    });

    await test.step('Completar el First Name', async () => {
        await registrationForm.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    });

    await test.step('Completar el Last Name', async () => {
        await registrationForm.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    });

    await test.step('Completar el email', async () => {
        await registrationForm.getByRole('textbox', { name: 'name@example.com' }).fill(email);
    });
    
    await test.step('Completar la edad', async () => {
        await registrationForm.getByRole('textbox', { name: 'Age' }).fill(age);
    });

    await test.step('Completar el salario', async () => {
        await registrationForm.getByRole('textbox', { name: 'Salary' }).fill(salary);
    });

    await test.step('Completar el departamento', async () => {
        await registrationForm.getByRole('textbox', { name: 'Department' }).fill(department);
    });

    await test.step('Hacer click en el botón Submit', async () => {
        await submitButton.click();
    });
    
    await test.step('Validar que el registro haya sido agregado a la tabla', async () => {
        await expect(tableRows.nth(3).locator('.rt-td').nth(0)).toHaveText(firstName);
        await expect(tableRows.nth(3).locator('.rt-td').nth(1)).toHaveText(lastName);
        await expect(tableRows.nth(3).locator('.rt-td').nth(2)).toHaveText(age);
        await expect(tableRows.nth(3).locator('.rt-td').nth(3)).toHaveText(email);
        await expect(tableRows.nth(3).locator('.rt-td').nth(4)).toHaveText(salary);
        await expect(tableRows.nth(3).locator('.rt-td').nth(5)).toHaveText(department);
    });
    
  });

  test('Editar primer registro de la tabla', async ({ page }) => {

    const editButtonRecord1 = page.locator('#edit-record-1');
    const registrationForm = page.getByRole('document');
    const submitButton = registrationForm.getByRole('button', { name: 'Submit' });
    const tableRows = page.locator('.rt-tr-group');

    await test.step('Hacer click en botón Editar', async () => {
        await editButtonRecord1.click();
    });

    await test.step('Actualizar campo email', async () => {
        await registrationForm.getByRole('textbox', { name: 'name@example.com' }).fill(email);
    });

    await test.step('Hacer click en el botón Submit', async () => {
        await submitButton.click();
    });

    await test.step('Validar que el valor del email se haya actualizado', async () => {
        await expect(tableRows.nth(0).locator('.rt-td').nth(3)).toHaveText(email);
    });
    
  });

  test('Eliminar ultimo registro de la tabla', async ({ page }) => {

    const deleteButtonRecord1 = page.locator('#delete-record-3');
    const tableRows = page.locator('.rt-tr-group');

    await test.step('Hacer click en botón Eliminar', async () => {
        await deleteButtonRecord1.click();
    });

    await test.step('Validar que el último registro fue eliminado', async () => {
       await expect(tableRows.nth(2).locator('.rt-td').nth(0)).not.toContainText('Kierra');
    });
    
  });
  
});