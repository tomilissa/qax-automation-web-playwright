import { test, expect } from '@playwright/test';
import path from 'path';
import { selectCardandOption } from '../../utils/menuUtils.js';

test.describe('Upload and Download (Carga y Descarga de Archivos)', () => {

  test.beforeEach(async ({ page}) => {
    await page.goto('https://demoqa.com/');
    await selectCardandOption(page, 'Elements', 'Upload and Download');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Validar que la carga de archivos funciona correctamente', async ({ page }) => {

    const filePath = path.join(__dirname, 'testFile.txt');
    const uploadInput = page.locator('#uploadFile');
    const uploadedFilePathMessage = page.locator('#uploadedFilePath');

    await test.step('Subir el archivo de prueba', async () => {

        await uploadInput.setInputFiles(filePath);
    });


    await test.step('Verificar que el archivo se cargó correctamente', async () => {
    
        await expect(uploadedFilePathMessage).toBeVisible();
        await expect(uploadedFilePathMessage).toContainText('testFile.txt');
    });
    
  });

  test('Validar que la descarga de archivos funciona correctamente', async ({ page }) => {

    let download; 
    const downloadButton = page.getByRole('link', { name: 'Download'});

    await test.step('Hacer click en botón Download y capturar la descarga', async () => {

        const downloadPromise = page.waitForEvent('download');
        await downloadButton.click();

        download = await downloadPromise;
        
        });

    await test.step('Verificar que el archivo se descargó correctamente', async () => {

        const fileName = download.suggestedFilename();
        
        await expect(fileName).toBe('sampleFile.jpeg');
        
        });
    });
});

 