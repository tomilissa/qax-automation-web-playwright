import { test} from '@playwright/test';
import { HomePage } from '../pages/HomePage'
import { ElementsPage } from '../pages/ElementsPage';
import path from 'path';

const filePath = path.join(__dirname, 'testFile.txt');
const fileNameValue = 'sampleFile.jpeg'


test.describe('Upload and Download (Carga y Descarga de Archivos)', () => {

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
        await homePage.selectCardAndOption('Elements', 'Upload and Download')
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar que la carga de archivos funciona correctamente', async () => {

    await test.step('Subir el archivo de prueba', async () => {
        await elementsPage.subirArchivoUpload(filePath)
    });

    await test.step('Verificar que el archivo se cargó correctamente', async () => {
        await elementsPage.verifyUploadedFile();
    });
    
  });

  test('Validar que la descarga de archivos funciona correctamente', async () => {

    await test.step('Hacer click en botón Download y capturar la descarga', async () => {
        await elementsPage.clickOnDownload();
    });

    await test.step('Verificar que el archivo se descargó correctamente', async () => {    
        await elementsPage.verifyFileName(fileNameValue);
    });

  });

});