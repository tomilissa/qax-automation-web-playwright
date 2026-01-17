import { expect } from '@playwright/test';
export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async doClick(locator) { 
    console.log('Click en:', await locator.toString());
    await locator.click();
  }

  async writer(locator, value) {
    console.log('Escribir en:', await locator.toString(), 'el valor:', value);
    await locator.fill(value);
  }

  async getTitle() {
    return this.page.title();
  }

   /* =========================
     Assertions
  ========================== */
  async verifyTitle(expectedTitle, message) {
    await expect(this.page, message).toHaveTitle(expectedTitle);
  }

  async verifyErrorMessage(locator, expectedErrorMessage) {
    const mensajeValidacion = await locator.evaluate((el) => el.validationMessage);
    expect(mensajeValidacion).toBe(expectedErrorMessage);
  }

}