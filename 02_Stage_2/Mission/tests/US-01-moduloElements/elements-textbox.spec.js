import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';

const fullName = 'Tomas Lissarrague';
const email = 'tomi.lissa@gmail.com';
const invalidEmail = 'aaaaa';
const currentAddress = 'Aguado 3365';
const permanentAddress = 'Belgrano 300';

test.describe('Validar Textbox', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Text Box');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Completar exitosamente el formulario', async ({ page }) => {

    const userForm = page.locator('#userForm');
    const output = page.locator('#output');
    const emailfield = userForm.getByRole('textbox',{name: 'name@example.com'});

    await test.step('Completar campo Full Name', async () => {
      await userForm.getByRole('textbox',{name: 'Full Name'}).fill(fullName);
      });

    await test.step('Completar campo email', async () => {
      await emailfield.fill(email);
      });

    await test.step('Completar campo Current Address', async () => {
      await userForm.getByRole('textbox',{name: 'Current Address'}).fill(currentAddress);
      });

    await test.step('Completar campo Permanent Address', async () => {
      await userForm.locator('#permanentAddress').fill(permanentAddress);
      });
      
    await test.step('Click en botón Submit', async () => {
      await userForm.getByRole('button',{name: 'Submit'}).click();
      });
    
    await test.step('Validar información en el output', async () => {
      await expect(output.locator('#name')).toContainText(fullName);
      await expect(output.locator('#email')).toContainText(email);
      await expect(output.locator('#currentAddress')).toContainText(currentAddress);
      await expect(output.locator('#permanentAddress')).toContainText(permanentAddress);
      }); 
    
  });

  test('Validar formulario con email incorrecto', async ({ page }) => {

    const userForm = page.locator('#userForm');
    const emailfield = userForm.getByRole('textbox',{name: 'name@example.com'});
    
    await test.step('Completar campo Full Name', async () => {
      await userForm.getByRole('textbox',{name: 'Full Name'}).fill(fullName);
      });
    
    await test.step('Completar campo email con un valor incorrecto', async () => {
      await emailfield.fill(invalidEmail);
      });

    await test.step('Click en botón Submit', async () => {
      await userForm.getByRole('button',{name: 'Submit'}).click();
      });

    await test.step('Validar mensaje de error', async () => {
      await expect (emailfield).toHaveClass(/field-error/);
      });
  
  });

});