import { test, expect } from '@playwright/test';

test('Abrir nueva pestaña', async ({ page, context }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    const pagePromise = context.waitForEvent('page');

    await page.getByRole('button', { name: 'click' }).first().click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.selenium.dev/');

});


test('Abrir nueva ventana', async ({ page, context }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.getByText('Open New Seperate Windows').click();

    const pagePromise = context.waitForEvent('page');

    await page.locator('#Seperate button').click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.selenium.dev/');

});


test('Abrir nueva multiple ventana', async ({ page, context }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.getByText('Open Seperate Multiple Windows').click();

    const pages = [];
    context.on('page', newPage => pages.push(newPage));

    await page.locator('#Multiple button').click();

    await expect.poll(() => pages.length).toBe(2);

    await pages[0].waitForLoadState();
    await pages[1].waitForLoadState();

    const urls = pages.map(p => p.url());
    expect(urls).toContain('https://demo.automationtesting.in/Index.html');
    expect(urls).toContain('https://www.selenium.dev/');
});
