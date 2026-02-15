import { test, expect } from '@playwright/test';
import { selectCardandOption } from '../../utils/menuUtils';
import path from 'path';

const firstName = 'Tomas';
const lastName = 'Lissarrague';
const email = 'tomi.lissa@gmail.com';
const mobile = '1141997406';
const subject1 = 'Arts';
const subject2 = 'Maths';
const filePath = path.join(__dirname, 'image2.png');
const currentAddress = 'Aguado 3365';
const state = 'Rajasthan';
const city = 'Jaiselmer';


test.describe('Registro exitoso de un estudiante', () => {

  test.beforeEach(async ({ page }) => {
    await context.route('**/*googleads*', (route) => route.abort());
    await context.route('**/*doubleclick*', (route) => route.abort());
    await context.route('**/*.ad*', (route) => route.abort());
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Forms', 'Practice Form');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

   test('Completar exitosamente el formulario de estudiantes', async ({ page }) => {
  
      const firstNameField = page.getByRole('textbox', { name: 'First Name', exact: true });
      const lastNameField = page.getByRole('textbox', { name: 'Last Name', exact: true });
      const emailfield = page.locator('#userEmail');
      const mobileField = page.getByRole('textbox', { name: 'Mobile Number', exact: true });
      const dateOfBirthField = page.locator('#dateOfBirthInput');
      const monthOfBirthField = page.locator('.react-datepicker__month-select');
      const yearOfBirthField = page.locator('.react-datepicker__year-select');
      const dayOfBirthField = page.getByRole('option', { name: 'Choose Wednesday, May 5th, 1993', exact: true });
      const subjectsfield = page.locator('#subjectsInput');
      const hobbieReading = page.locator('#hobbies-checkbox-2');
      const hobbieMusic = page.locator('#hobbies-checkbox-3');
      const subirArchivo = page.locator('#uploadPicture');
      const currentAddressField = page.getByRole('textbox', { name: 'Current Address', exact: true });
      const stateField = page.locator('#state');
      const cityField = page.locator('#city');
      const submitBtn = page.getByRole('button', { name: 'Submit', exact: true });
      const modalHeader = page.locator('.modal-header');

  
    await test.step('Completar campo First Name', async () => {
        await firstNameField.fill(firstName);
        });

    await test.step('Completar campo Last Name', async () => {
        await lastNameField.fill(lastName); 
        });
    
    await test.step('Completar campo Email', async () => {
        await emailfield.fill(email);
        });

    await test.step('Completar campo Gender', async () => {
        await page.getByText('Male', { exact: true }).click();
        });

    await test.step('Completar campo Mobile', async () => {
        await mobileField.fill(mobile);
        });

    await test.step('Completar campo Date of Birth', async () => {
        await dateOfBirthField.click();
        await monthOfBirthField.selectOption('May');
        await yearOfBirthField.selectOption('1993');
        await dayOfBirthField.click();
        });

    await test.step('Validar que la fecha de nacimiento se visualiza correctamente', async () => {
        await expect(dateOfBirthField).toHaveValue('05 May 1993');
        });

    await test.step('Completar campo Subjects con dos valores', async () => {
        await subjectsfield.fill(subject1);
        await page.keyboard.press('Enter');
        await subjectsfield.fill(subject2);
        await page.keyboard.press('Enter');
        });

    await test.step('Completar campo Hobbies seleccionando dos opciones', async () => {
        await hobbieReading.check({ force: true });
        await hobbieMusic.check({ force: true });
        });

    await test.step('Subir un archivo de imagen', async () => {
        await subirArchivo.setInputFiles(filePath);
        await expect(subirArchivo).toHaveValue(/image2.png/);  
        });

    await test.step('Completar el campo Current Address', async () => {
        await currentAddressField.fill(currentAddress);
        });

    await test.step('Seleccionar campo State', async () => {
        await stateField.click();
        await page.getByText(state, { exact: true }).click();
        });

    await test.step('Seleccionar campo City', async () => {
        await cityField.click();
        await page.getByText(city, { exact: true }).click();
        });

    await test.step('Click en botón Submit', async () => {
        await submitBtn.click(); 
    });

    await test.step('Validar tabla de confirmación', async () => {
        await expect(modalHeader).toHaveText('Thanks for submitting the form');
    });
    
  });

});