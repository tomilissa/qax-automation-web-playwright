import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

const fullName = 'Tomas Lissarrague';
const email = 'tomi.lissa@gmail.com';
const invalidEmail = 'aaaaa';
const currentAddress = 'Aguado 3365';
const permanentAddress = 'Belgrano 300';

test.describe('Validar Textbox', () => {

  let homePage;
  let elementsPage;

  test.beforeEach(async ({ page, context}) => {

    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);
        await context.route('**/*googleads*', (route) => route.abort());
        await context.route('**/*doubleclick*', (route) => route.abort());
        await context.route('**/*.ad*', (route) => route.abort());
        await homePage.navigate('/');
        await page.evaluate(() => {
            const ads = document.querySelectorAll('#fixedban, footer, [id^="google_ads_iframe_"]');
            ads.forEach(ad => ad.remove());
        });
        await homePage.isAtHomePage();
        await homePage.selectCardAndOption('Elements', 'Text Box');
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Completar exitosamente el formulario', async () => {


    await test.step('Completar campo Full Name', async () => {
      await elementsPage.writeFullName(fullName);
      });

    await test.step('Completar campo Email', async () => {
      await elementsPage.writeEmail(email);
      });

    await test.step('Completar campo Current Address', async () => {
      await elementsPage.writeCurrentAddress(currentAddress);
      });

    await test.step('Completar campo Permanent Address', async () => {
      await elementsPage.writePermanentAddress(permanentAddress);
      });

    await test.step('Click en botón Submit', async () => {
      await elementsPage.clickSubmitButton();
      });

    await test.step('Validar información en el output', async () => {
      await elementsPage.verifyNameOutput(fullName);
      await elementsPage.verifyEmailOutput(email);
      await elementsPage.verifyCurrentAddressOutput(currentAddress);
      await elementsPage.verifyPermanentAddressOutput(permanentAddress);
      }); 

    });

    test('Validar formulario con email incorrecto', async () => {
    
    await test.step('Completar campo Full Name', async () => {
      await elementsPage.writeFullName(fullName);
      });
    
    await test.step('Completar campo email con un valor incorrecto', async () => {
      await elementsPage.writeEmail(invalidEmail);
      });

    await test.step('Click en botón Submit', async () => {
      await elementsPage.clickSubmitButton();
      });

    await test.step('Validar mensaje de error', async () => {
      await elementsPage.verifyInvalidEmailErrorMessage();
      });

    });
    
});