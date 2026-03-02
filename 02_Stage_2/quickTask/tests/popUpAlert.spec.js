import { test, expect } from '@playwright/test';

test('Aceptar un alert', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');

  page.once('dialog', async dialog => {
        console.log(`Mensaje recibido: ${dialog.message()}`);
        expect(dialog.message()).toBe('Hello world!');
        await dialog.accept();
    });

  await page.locator('#my-alert').click();

});

test('Confirm (aceptar o cancelar)', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');

  page.once('dialog', async dialog => {
        console.log(dialog.type(), dialog.message());
        await dialog.accept();
    });

  await page.getByRole('button', { name: 'Launch confirm' }).click();
  await expect(page.getByText('You chose: true')).toBeVisible();

});

test('Prompt', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');
  
  page.once('dialog', async dialog => {
        console.log(`Tipo: ${dialog.type()}`);
        await dialog.accept('Mi nombre es Playwright'); 
    });
  await page.locator('#my-prompt').click();
  await expect(page.getByText('You typed: Mi nombre es Playwright')).toBeVisible();

});

test('Modal', async ({ page }) => {
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');
    
    await page.getByRole('button', { name: 'Launch modal' }).click();

    const modal = page.locator('#example-modal');

    const modalTitle = modal.locator('.modal-title');
    await expect(modalTitle).toHaveText('Modal title');

    await modal.getByRole('button', { name: 'Save changes' }).click();

    await expect(modal).toBeHidden();

});