import { test, expect } from '@playwright/test'; // <--- AGREGAR EXPECT AQUÍ
import { HomePage } from '../../pages/HomePage';
import { AlertsPage } from '../../pages/AlertsPage';

test.describe('Alerts (Alertas del Navegador)', () => {
    let homePage;
    let alertsPage;
  
    test.beforeEach(async ({ page, context }) => {
        homePage = new HomePage(page);
        alertsPage = new AlertsPage(page);

        // Bloqueo de anuncios para ganar velocidad
        await context.route('**/*googleads*', route => route.abort());
        await context.route('**/*doubleclick*', route => route.abort());

        await homePage.navigate('/');
        
        // Inyectamos CSS para ocultar anuncios que tapan botones
        await page.addStyleTag({ content: '#fixedban, footer, .ad-unit { display: none !important; }' });
        
        // Texto exacto de la Card en DemoQA
        await homePage.selectCardAndOption('Alerts, Frame & Windows', 'Alerts');
    });

    test('Validar alerta simple', async ({ page }) => {
        const simpleAlertBtn = page.locator('#alertButton');

        // El manejador debe estar antes del click
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('You clicked a button');
            await dialog.accept();
        });

        await simpleAlertBtn.click({ force: true });
    });

    test('Validar alerta de prompt', async ({ page }) => {
        const promptAlertBtn = page.locator('#promtButton');

        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Please enter your name');
            await dialog.accept('Tomas');
        });

        await promptAlertBtn.click({ force: true });
    });
});