import { test, expect } from '@playwright/test';

const firstName = 'Tomas';
const lastname = 'Lissarrague';
const email = 'tomi.lissarrague94@gmail.com';
const address = 'Aguado 300';
const phone = '1145566514';
const invalidPhone = '1234567';
const firstPassword = 'Toli9180!';

test.describe('Feature: Realizar un registro completo en el formulario', () => {

    test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Index.html');
    });

    test.afterEach(async ({ page }) => {
    await page.close();
    });

    test('Completar la informacion del formulario exitosamente', async ({ page }) => {

        const formGroup = page.locator('.form-group')
        
        await test.step('Ingresar al formulario de Registro', async () => {
            await page.locator('#email').fill(email);
            await page.locator('#enterimg').click();
            await page.waitForURL('https://demo.automationtesting.in/Register.html');
        });
        
        await test.step('Ingresar nombre y apellido', async () => {
            const fullNameSection = formGroup.filter({ hasText: 'Full Name' });
            await fullNameSection.getByRole('textbox',{name: 'First Name'}).fill(firstName);
            await fullNameSection.getByRole('textbox').nth(1).fill(lastname);
        });

        await test.step('Ingresar Address', async () => {
            const addressSection = formGroup.filter({ hasText: 'Address' });
            await addressSection.locator('textarea').fill(address);
        });

        await test.step('Ingresar Email', async () => {
            await page.locator('.form-group')
                .filter({ has: page.locator('#eid') })
                .getByRole('textbox')
                .fill(email);
        });
        
        await test.step('Ingresar Teléfono', async () => {
            await formGroup.filter({ hasText: 'Phone' })
                .getByRole('textbox')
                .fill(phone);
        });

        await test.step('Seleccionar género', async () => {
            await page.locator('input[value="Male"]').check();
        });

        await test.step('Seleccionar hobbies', async () => {
            const hobbiesSection = formGroup.filter({ hasText: 'Hobbies' });
            await hobbiesSection.locator('input[type="checkbox"]').first().check();
        });

        await test.step('Seleccionar lenguaje(s)', async () => {
            await page.locator('#msdd').click();
            await page.getByText('English', { exact: true }).click();
            await page.getByText('Spanish', { exact: true }).click();
            await page.getByText('Finnish', { exact: true }).click();
            await page.locator('body').click();
        });

        await test.step('Seleccionar Skills', async () => {
            await page.locator('#Skills').selectOption('Python');
        });

        await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

        await test.step('Seleccionar País (buscador avanzado)', async () => {
            await page.getByLabel('', { exact: true }).click();
            await page.locator('input[type="search"]').fill('a');
            await page.getByRole('treeitem', { name: 'Denmark' }).click();
     
        });

        await test.step('Seleccionar fecha de nacimiento', async () => {
            const dateSection = formGroup.filter({ hasText: 'Date of Birth' });
            await dateSection.locator('#yearbox').selectOption('1993');
            await dateSection.locator('select[ng-model="monthbox"]').selectOption('May');
            await dateSection.locator('#daybox').selectOption('5');
        });

        await test.step('Ingresar Password', async () => {
            await page.locator('#firstpassword').fill(firstPassword);
            await page.locator('#secondpassword').fill(firstPassword);
        });

        await test.step('Enviar formulario', async () => {
            await page.locator('#submitbtn').click();
        });
        
        await test.step('Validar Mensaje de error', async () => {
            const mensajeValidacion = await page.locator('#countries').evaluate((elemento) => { return elemento.validationMessage; });
            console.log('El mensaje capturado es:', mensajeValidacion);
            expect(mensajeValidacion).toBe('Please select an item in the list.');
        });
        
    });

    test('Feature: Verificar validación cuando el campo email está vacío', async ({ page }) => {

        const formGroup = page.locator('.form-group');
        
        await test.step('Ingresar al formulario de Registro', async () => {
            await page.locator('#email').fill(email);
            await page.locator('#enterimg').click();
            await page.waitForURL('https://demo.automationtesting.in/Register.html');
        });
        
        await test.step('Ingresar nombre y apellido', async () => {
            const fullNameSection = formGroup.filter({ hasText: 'Full Name' });
            await fullNameSection.getByRole('textbox',{name: 'First Name'}).fill(firstName);
            await fullNameSection.getByRole('textbox').nth(1).fill(lastname);
        });

        await test.step('Ingresar Address', async () => {
            const addressSection = formGroup.filter({ hasText: 'Address' });
            await addressSection.locator('textarea').fill(address);
        });
        
        await test.step('Ingresar Teléfono', async () => {
            await formGroup.filter({ hasText: 'Phone' })
                .getByRole('textbox')
                .fill(invalidPhone);
        });

        await test.step('Seleccionar género', async () => {
            await page.locator('input[value="Male"]').check();
        });

        await test.step('Seleccionar hobbies', async () => {
            const hobbiesSection = formGroup.filter({ hasText: 'Hobbies' });
            await hobbiesSection.locator('input[type="checkbox"]').first().check();
        });

        await test.step('Seleccionar lenguaje(s)', async () => {
            await page.locator('#msdd').click();
            await page.getByText('English', { exact: true }).click();
            await page.getByText('Spanish', { exact: true }).click();
            await page.getByText('Finnish', { exact: true }).click();
            await page.locator('body').click();
        });

        await test.step('Seleccionar Skills', async () => {
            await page.locator('#Skills').selectOption('Python');
        });

        await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

        await test.step('Seleccionar País (buscador avanzado)', async () => {
            await page.getByLabel('', { exact: true }).click();
            await page.locator('input[type="search"]').fill('a');
            await page.getByRole('treeitem', { name: 'Denmark' }).click();
     
        });

        await test.step('Seleccionar fecha de nacimiento', async () => {
            const dateSection = formGroup.filter({ hasText: 'Date of Birth' });
            await dateSection.locator('#yearbox').selectOption('1993');
            await dateSection.locator('select[ng-model="monthbox"]').selectOption('May');
            await dateSection.locator('#daybox').selectOption('5');
        });

        await test.step('Ingresar Password', async () => {
            await page.locator('#firstpassword').fill(firstPassword);
            await page.locator('#secondpassword').fill(firstPassword);
        });

        await test.step('Enviar formulario', async () => {
            await page.locator('#submitbtn').click();
        });

        await test.step('Validar Mensaje de error', async () => {
            const mensajeValidacion = await page.locator('input[type="email"]').evaluate((elemento) => { return elemento.validationMessage; });
            console.log('El mensaje capturado es:', mensajeValidacion);
            expect(mensajeValidacion).toBe('Please fill out this field.');
        });
    });
        

    test('Feature: Ingresar numero de teléfono con 7 caracteres (formato inválido)', async ({ page }) => {

        const formGroup = page.locator('.form-group');
        
        await test.step('Ingresar al formulario de Registro', async () => {
            await page.locator('#email').fill(email);
            await page.locator('#enterimg').click();
            await page.waitForURL('https://demo.automationtesting.in/Register.html');
        });
        
        await test.step('Ingresar nombre y apellido', async () => {
            const fullNameSection = formGroup.filter({ hasText: 'Full Name' });
            await fullNameSection.getByRole('textbox',{name: 'First Name'}).fill(firstName);
            await fullNameSection.getByRole('textbox').nth(1).fill(lastname);
        });

        await test.step('Ingresar Address', async () => {
            const addressSection = formGroup.filter({ hasText: 'Address' });
            await addressSection.locator('textarea').fill(address);
        });

        await test.step('Ingresar Email', async () => {
            await page.locator('.form-group')
                .filter({ has: page.locator('#eid') })
                .getByRole('textbox')
                .fill(email);
        });
        
        await test.step('Ingresar Teléfono', async () => {
            await formGroup.filter({ hasText: 'Phone' })
                .getByRole('textbox')
                .fill(invalidPhone);
        });

        await test.step('Seleccionar género', async () => {
            await page.locator('input[value="Male"]').check();
        });

        await test.step('Seleccionar hobbies', async () => {
            const hobbiesSection = formGroup.filter({ hasText: 'Hobbies' });
            await hobbiesSection.locator('input[type="checkbox"]').first().check();
        });

        await test.step('Seleccionar lenguaje(s)', async () => {
            await page.locator('#msdd').click();
            await page.getByText('English', { exact: true }).click();
            await page.getByText('Spanish', { exact: true }).click();
            await page.getByText('Finnish', { exact: true }).click();
            await page.locator('body').click();
        });

        await test.step('Seleccionar Skills', async () => {
            await page.locator('#Skills').selectOption('Python');
        });

        await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

        await test.step('Seleccionar País (buscador avanzado)', async () => {
            await page.getByLabel('', { exact: true }).click();
            await page.locator('input[type="search"]').fill('a');
            await page.getByRole('treeitem', { name: 'Denmark' }).click();
     
        });

        await test.step('Seleccionar fecha de nacimiento', async () => {
            const dateSection = formGroup.filter({ hasText: 'Date of Birth' });
            await dateSection.locator('#yearbox').selectOption('1993');
            await dateSection.locator('select[ng-model="monthbox"]').selectOption('May');
            await dateSection.locator('#daybox').selectOption('5');
        });

        await test.step('Ingresar Password', async () => {
            await page.locator('#firstpassword').fill(firstPassword);
            await page.locator('#secondpassword').fill(firstPassword);
        });

        await test.step('Enviar formulario', async () => {
            await page.locator('#submitbtn').click();
        });

        await test.step('Validar Mensaje de error', async () => {
            const mensajeValidacion = await page.locator('input[type="tel"]').evaluate((elemento) => { return elemento.validationMessage; });
            console.log('El mensaje capturado es:', mensajeValidacion);
            expect(mensajeValidacion).toBe('Please match the requested format.');
        });
        
    });

    test('Validar mensaje de error cuando el campo nombre está vacio', async ({ page }) => {

        const formGroup = page.locator('.form-group');
        
        await test.step('Ingresar al formulario de Registro', async () => {
            await page.locator('#email').fill(email);
            await page.locator('#enterimg').click();
            await page.waitForURL('https://demo.automationtesting.in/Register.html');
        });
        
        await test.step('Ingresar apellido', async () => {
            const fullNameSection = formGroup.filter({ hasText: 'Full Name' });
            await fullNameSection.getByRole('textbox').nth(1).fill(lastname);
        });

        await test.step('Ingresar Address', async () => {
            const addressSection = formGroup.filter({ hasText: 'Address' });
            await addressSection.locator('textarea').fill(address);
        });

        await test.step('Ingresar Email', async () => {
            await page.locator('.form-group')
                .filter({ has: page.locator('#eid') })
                .getByRole('textbox')
                .fill(email);
        });
        
        await test.step('Ingresar Teléfono', async () => {
            await formGroup.filter({ hasText: 'Phone' })
                .getByRole('textbox')
                .fill(phone);
        });

        await test.step('Seleccionar género', async () => {
            await page.locator('input[value="Male"]').check();
        });

        await test.step('Seleccionar hobbies', async () => {
            const hobbiesSection = formGroup.filter({ hasText: 'Hobbies' });
            await hobbiesSection.locator('input[type="checkbox"]').first().check();
        });

        await test.step('Seleccionar lenguaje(s)', async () => {
            await page.locator('#msdd').click();
            await page.getByText('English', { exact: true }).click();
            await page.getByText('Spanish', { exact: true }).click();
            await page.getByText('Finnish', { exact: true }).click();
            await page.locator('body').click();
        });

        await test.step('Seleccionar Skills', async () => {
            await page.locator('#Skills').selectOption('Python');
        });

        await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

        await test.step('Seleccionar País (buscador avanzado)', async () => {
            await page.getByLabel('', { exact: true }).click();
            await page.locator('input[type="search"]').fill('a');
            await page.getByRole('treeitem', { name: 'Denmark' }).click();
     
        });

        await test.step('Seleccionar fecha de nacimiento', async () => {
            const dateSection = formGroup.filter({ hasText: 'Date of Birth' });
            await dateSection.locator('#yearbox').selectOption('1993');
            await dateSection.locator('select[ng-model="monthbox"]').selectOption('May');
            await dateSection.locator('#daybox').selectOption('5');
        });

        await test.step('Ingresar Password', async () => {
            await page.locator('#firstpassword').fill(firstPassword);
            await page.locator('#secondpassword').fill(firstPassword);
        });

        await test.step('Enviar formulario', async () => {
            await page.locator('#submitbtn').click();
        });
        
        await test.step('Validar Mensaje de error', async () => {
            const primerNombreInput = page.locator('.form-group').filter({ hasText: 'Full Name' }).getByRole('textbox', { name: 'First Name' });
            const mensajeValidacion = await primerNombreInput.evaluate((elemento) => { return elemento.validationMessage; });
            console.log('El mensaje capturado es:', mensajeValidacion);
            expect(mensajeValidacion).toBe('Please fill out this field.');
        });
        
    });

});