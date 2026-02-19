import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';

const email = 'ninjaforTesting@qaxpert.com';
const firstName = 'Vicente';
const lastName = 'Lopez';
const address = 'Calle Automation N420, QAXpert City';
const phone = '3152938051';
const invalidPhone = '1234567';
const emptyEmail = '';
const country = 'Hong Kong';
const year = '1993';
const month = 'June';
const day = '7';
const password = 'Toli9180!';
const language1 = 'Spanish';
const skill = 'Android';

/**
 * 🎯 Test Suite: Registro de Usuario
 * 
 * describe.configure: Configuración para este grupo de tests
 * - mode: 'parallel' ejecuta tests en paralelo (más rápido)
 * - mode: 'serial' ejecuta tests uno después del otro
 */
test.describe('Feature: Realizar un registro completo en el formulario', () => {
 // ========================================
  // Instanciación de la página de registro 
  // ========================================
    let registerPage;
    let homePage;
   /**
   * 🎬 Hook: Before Each
   * Se ejecuta ANTES de cada test
   * Útil para preparar el estado inicial
   */
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    await homePage.navigate('/Index.html');
    await homePage.isAtHomePage();
  });

  /**
   * 🧹 Hook: After Each
   * Se ejecuta DESPUÉS de cada test
   * Útil para limpieza
   */

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  // ========================================
  // ✅ TESTS DE CASOS POSITIVOS (Happy Path)
  // ========================================

  /**
   * Test 1: Registro exitoso con datos válidos
   * 
   * Escenario: Usuario completa el formulario correctamente
   * Resultado esperado: Registro exitoso
   */

  test('Completar la informacion del formulario exitosamente', async ({ page }) => {

    await test.step('Ingresar al formulario de registro', async () => {
      await homePage.intoRegisterPage(email)
      await registerPage.isAtRegisterPage();
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(firstName, lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(address);
    });

    await test.step('Ingresar datos de contacto', async () => {
      await registerPage.writerContactInfo(email, phone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
       //await registerPage.selectLanguage(language1);
    });

    await test.step('Seleccionar Skills', async () => {
        await registerPage.selectSkill(skill);
    });

    await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        await registerPage.selectCountryAdvanced(country);
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        await registerPage.selectDateOfBirth(year, month, day);
    });
    await test.step('Ingresar Password', async () => {
        await registerPage.completePassword(password);
    });

    await test.step('Enviar formulario', async () => {
        await registerPage.submitForm();
    });

    await test.step('Validar Mensaje de Error en el campo Country', async () => {
       await registerPage.validateCountryFieldError();
    });

  });

test('Feature: Ingresar numero de teléfono con 7 caracteres (formato inválido)', async ({ page }) => {

    await test.step('Ingresar al formulario de registro', async () => {
      await homePage.intoRegisterPage(email)
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(firstName, lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(address);
    });

    await test.step('Ingresar telefono con formato incorrecto', async () => {
      await registerPage.writerContactInfo(email, invalidPhone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
       //await registerPage.selectLanguage(language1);
    });

    await test.step('Seleccionar Skills', async () => {
        await registerPage.selectSkill(skill);
    });

    await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        await registerPage.selectCountryAdvanced(country);
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        await registerPage.selectDateOfBirth(year, month, day);
    });
    await test.step('Ingresar Password', async () => {
        await registerPage.completePassword(password);
    });

    await test.step('Enviar formulario', async () => {
        await registerPage.submitForm();
    });

    await test.step('Validar Mensaje de Error en el campo Telefono', async () => {
       await registerPage.validatePhoneFieldError();
    });

  });

  test('Feature: Verificar validación cuando el campo email está vacío', async ({ page }) => {

    await test.step('Ingresar al formulario de registro', async () => {
      await homePage.intoRegisterPage(email)
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(firstName, lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(address);
    });

    await test.step('Ingresar email vacío', async () => {
      await registerPage.writerContactInfo(emptyEmail, phone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
       //await registerPage.selectLanguage(language1);
    });

    await test.step('Seleccionar Skills', async () => {
        await registerPage.selectSkill(skill);
    });

    await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        await registerPage.selectCountryAdvanced(country);
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        await registerPage.selectDateOfBirth(year, month, day);
    });
    await test.step('Ingresar Password', async () => {
        await registerPage.completePassword(password);
    });

    await test.step('Enviar formulario', async () => {
        await registerPage.submitForm();
    });

    await test.step('Validar Mensaje de Error en el campo email vacío', async () => {
       await registerPage.validateEmailEmptyFieldError();
    });


  });

  test('Feature: Validar mensaje de error cuando nombre y apellido están vacíos', async ({ page }) => {

    await test.step('Ingresar al formulario de registro', async () => {
      await homePage.intoRegisterPage(email)
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(address);
    });

    await test.step('Ingresar email vacío', async () => {
      await registerPage.writerContactInfo(email, phone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
       //await registerPage.selectLanguage(language1);
    });

    await test.step('Seleccionar Skills', async () => {
        await registerPage.selectSkill(skill);
    });

    await test.step('Seleccionar País', async () => {
            // await page.locator('#countries').selectOption('Argentina');
        });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        await registerPage.selectCountryAdvanced(country);
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        await registerPage.selectDateOfBirth(year, month, day);
    });
    await test.step('Ingresar Password', async () => {
        await registerPage.completePassword(password);
    });

    await test.step('Enviar formulario', async () => {
        await registerPage.submitForm();
    });

    await test.step('Validar Mensaje de Error en el campo nombre vacío', async () => {
       await registerPage.validateNameEmptyFieldError();
    });

  });

});