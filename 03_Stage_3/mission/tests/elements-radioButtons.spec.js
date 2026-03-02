import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

test.describe('Radio Button - Selección Exclusiva', () => {

  let homePage;
  let elementsPage;

  test.beforeEach(async ({ page, context}) => {

    homePage = new HomePage(page);
    elementsPage = new ElementsPage(page);

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
        await homePage.selectCardAndOption('Elements', 'Radio Button')
      });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

   test('Validar seleccion opción YES', async () => {

    await test.step('Seleccionar opción YES', async () => {
        await elementsPage.selectRadioButtonGeneral('Yes');
    });

    await test.step('Validar mensaje de confirmación opción YES', async () => {
        await elementsPage.verifyRadioButtonYesMessage();
    });

  });

  test('Validar seleccion opción IMPRESSIVE', async () => {

    await test.step('Seleccionar opción Impressive', async () => {
        await elementsPage.selectRadioButtonGeneral('Impressive');
    });

    await test.step('Validar mensaje de confirmación', async () => {
        await elementsPage.verifyRadioButtonImpressiveMessage()
    });

  });

});