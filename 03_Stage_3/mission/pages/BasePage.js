import { expect } from '@playwright/test';
export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async selectSubmenuOption(locator1, locator2) {
    await locator1.click();
    await locator2.click({ force: true });
}

  async navigate(url) {
    await this.page.goto(url);
  }

  async doClick(locator) { 
    console.log('Haciendo Click...');
    await locator.click();
  }

  async doubleClick(locator){ 
    console.log('Haciendo Double Click...'); 
    await locator.dblclick();
  }

  async rightClick(locator){ 
    console.log('Haciendo Right Click...'); 
    await locator.click({ button: 'right' });
  }

  async writer(locator, value) {
    await locator.fill(value);
  }

  async getTitle() {
    return this.page.title();
  }

  async selectCheckBox(locator, checkboxOption) {
    await locator
      .filter({ hasText: new RegExp(`^${checkboxOption}$`) }) 
      .locator('.rct-title')
      .click();
   }   

  async selectCheckBox2(checkboxOption) {
  await this.page.getByLabel(checkboxOption).check({ force: true });
  }

  async selectCheckSecndLvl(parentLocator, childLocator, childText) {
    await parentLocator.click();
    
    const child = childLocator.filter({ hasText: childText });
    await child.check();
  }

  async selectRadioButton(locator, radioButtonOption) {
    const option = locator.locator('label').filter({ has: this.page.getByText(radioButtonOption, { exact: true }) });
    await option.click({ force: true });
}

  async selectOption(locator, option) {
    await locator.selectOption(option)
  }

  async subirArchivo(locator, filePath) {
    await locator.setInputFiles(filePath)
  }

  async dropdownSelection(locator, option) {
    await locator.click();
    await this.page.getByText(option, { exact: true }).click();
  }

  async datePicker(locator1, locator2, locator3, locator4, month, year, day) {
            await locator1.click();
            await locator2.selectOption(month);
            await locator3.selectOption(year);
            await locator4.click();
  }          

   /* =========================
     Assertions
  ========================== */
  async verifyTitle(expectedTitle, message) {
    await expect(this.page, message).toHaveTitle(expectedTitle);
  }

  async verifyURL(page, newURL) {
    await expect(page).toHaveURL(newURL);
  }

  async verifyMessage(locator, expectedMessage) {
    await expect(locator).toContainText(expectedMessage);
  }

  async verifyPartialText(locator, expectedText) {
    await expect(locator).toContainText(expectedText);
  }

  async verifyClassChange(locator, newClass) {
    await expect(locator).toHaveClass(newClass);
  }

  async validateDisabledOption(locator, optionText) {
    await expect(locator).toBeDisabled();
  }

  async validateMessageIsVisible(locator) {
    await expect(locator).toBeVisible();
  }
  
  async validateElementIsDisabled(locator){
    await expect(locator).toBeDisabled();
  }
  
  async validateElementIsEnable(locator){
    await expect(locator).toBeEnabled({ timeout: 6000 });
  }

  async validateElementHasClass(locator, class1) {
    await expect(locator).toHaveClass(class1, { timeout: 6000 });
  }

  async validateElementHasValue(locator, value) {
    await expect(locator).toHaveValue(value);
  }

  async validateNameToBe(locator, value) {
    await expect(locator).toBe(value);
  }
    
}