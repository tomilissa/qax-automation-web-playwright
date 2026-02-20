import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
    }

  async navigate(path) {
    await this.page.goto(path);
  }

  async doClick(locator) { 
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }

  async check(locator) {
    await locator.check();
  }

  async hover(locator) {
    await locator.hover();
  }

  async selectMenuOption(menuOption, subMenuOption) {
        await menuOption.hover();
        await this.doClick(subMenuOption);
  }

  async filterBy(value) {
    const filterRegex = new RegExp(`${value} \\(\\d+\\)`, 'i');
    await this.page.getByRole('link', { name: filterRegex }).click();
  }

  /* =========================
     Assertions
  ========================== */

  async verifyTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async verifyElementVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async verifyElementText(locator, expectedText) {
    await expect(locator).toHaveText(expectedText);
  }

  async verifyElementisDisabled(locator) {
    await expect(locator).toBeDisabled();
  }

  async verifyElementisEnabled(locator) {
    await expect(locator).toBeEnabled();
  }

}
