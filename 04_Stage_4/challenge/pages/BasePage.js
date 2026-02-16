import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
    }

  async navigate(path) {
    await this.page.goto(path);
  }

  async doClick(locator) { 
    console.log('Haciendo Click...');
    await locator.click();
  }

  async writer(locator, value) {
    await locator.fill(value);
  }

  /* =========================
     Assertions
  ========================== */

  async verifyTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

}
