import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import path from 'path';

const firstName = 'Tomas';
const lastName = 'Lissarrague';
const email = 'tomi.lissa@gmail.com';
const gender = 'Female';
const mobile = '1141997406';
const month = 'May';
const year = '1993';
const dateOfBirthValue = '05 May 1993';
const filePath = path.join(__dirname, 'image2.png');
const subject1 = 'Arts';
const subject2 = 'Maths';
const Hobby1 = 'Reading';
const Hobby2 = 'Music';
const currentAddress = 'Aguado 3365';
const state = 'Rajasthan';
const city = 'Jaiselmer';
const expectedConfirmationMesage = 'Thanks for submitting the form';


test.describe('Registro exitoso de un estudiante', () => {

  let homePage;
  let practiceFormPage;

  test.beforeEach(async ({ page, context}) => {

    homePage = new HomePage(page);
    practiceFormPage = new PracticeFormPage(page);
        await context.route('**/*googleads*', (route) => route.abort());
        await context.route('**/*doubleclick*', (route) => route.abort());
        await context.route('**/*.ad*', (route) => route.abort());
        await homePage.navigate('/');
        await page.evaluate(() => {
            const ads = document.querySelectorAll('#fixedban, footer, [id^="google_ads_iframe_"]');
            ads.forEach(ad => ad.remove());
        });
        await homePage.isAtHomePage();
        await homePage.selectCardAndOption('Forms', 'Practice Form');
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Completar exitosamente el formulario de estudiantes', async () => {

    await test.step('Completar campo First Name', async () => {
        await practiceFormPage.writeFirstName(firstName);
    });

    await test.step('Completar campo Last Name', async () => {
        await practiceFormPage.writeLastName(lastName); 
    });

    await test.step('Completar campo Email', async () => {
        await practiceFormPage.writeEmail(email);
    });

    await test.step('Completar campo Gender', async () => {
        await practiceFormPage.selectGender(gender);
    });

    await test.step('Completar campo Mobile', async () => {
        await practiceFormPage.writeMobile(mobile);
    });

    await test.step('Completar campo Date of Birth', async () => {
        await practiceFormPage.selectDateOfBirth(month, year);
        });

    await test.step('Validar que la fecha de nacimiento se visualiza correctamente', async () => {
        await practiceFormPage.verifyDateOfBirthValue(dateOfBirthValue)
        });

    await test.step('Completar campo Subjects con dos valores', async () => {
        await practiceFormPage.writeTwoSubjects(subject1, subject2);
    });

    await test.step('Completar campo Hobbies seleccionando dos opciones', async () => {
        await practiceFormPage.selectHobby(Hobby1);
        await practiceFormPage.selectHobby(Hobby2);
    });

    await test.step('Subir un archivo de imagen', async () => {
        await practiceFormPage.subirArchivoImagen(filePath);
    });

    await test.step('Completar el campo Current Address', async () => {
        await practiceFormPage.writeCurrentAddress(currentAddress);
    });

    await test.step('Seleccionar campo State', async () => {
        await practiceFormPage.selectState(state);
    });

    await test.step('Seleccionar campo City', async () => {
        await practiceFormPage.selectCity(city);
    });

    await test.step('Click en botón Submit', async () => {
        await practiceFormPage.submitForm();
    });

    await test.step('Validar tabla de confirmación', async () => {
        await practiceFormPage.verifyConfirmationModal(expectedConfirmationMesage);
    });

  });

});
