import { test } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

test.describe('Validar Checkbox - Selección Jerárquica', () => {

  let homePage;
  let elementsPage;
  let basePage

  test.beforeEach(async ({ page, context}) => {

    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);
    basePage = new BasePage(page);

    await context.route('**/*googleads*/**', route => route.abort());
        await context.route('**/*doubleclick*/**', route => route.abort());
        await context.route(/.*\.ad(s|vertising).*/, route => route.abort());

        await page.addInitScript(() => {
        const hideAds = () => {
            const selectors = [
                '#fixedban',
                'ins.adsbygoogle',
                'div[style*="z-index: 2147483647"]', 
                'footer', 
                '[id^="google_ads_iframe_"]', 
                '.ad-unit',
                '#adplus-anchor'
            ];
            selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => el.style.display = 'none');
            });
        };

        window.addEventListener('DOMContentLoaded', hideAds);
        setInterval(hideAds, 500);
        });

        await homePage.navigate('/');
        await homePage.isAtHomePage();
        await homePage.selectCardAndOption('Elements', 'Check Box')
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Selección de Nivel Superior', async () => {

        await test.step('Seleccionar Home Checkbox', async () => {
            await basePage.selectCheckBox('Home');
        });
        
        await test.step('Validar mensaje de opciones seleccionadas', async () => {
            await elementsPage.verifyCheckBoxSelectionMessage();
        });
        
    });

    test('Selección Parcial', async () => {

        await test.step('Seleccionar Desktop checkbox', async () => {
            await elementsPage.selectSecondLevelCheckbox('Desktop')
        });

        await test.step('Validar que el checkbox de Home muestra el estado de selección parcial', async () => {          
            await elementsPage.verifyPartialSelection()
        });   
        
    });

});