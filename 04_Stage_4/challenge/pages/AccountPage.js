import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class AccountPage extends BasePage {
  constructor(page) {
    super(page);
  


/* =========================
     Locators
  ========================== */
  this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
  this.openNewAccountBtn = page.getByRole('button', { name: 'Open New Account' });
  this.accountsOverview= page.getByRole('link', { name: 'Accounts Overview' });
  this.newAccountID = page.locator('#newAccountId');
  this.accountType = page.locator('#type');
  this.formAccountID = page.locator('#fromAccountId');
  
  }


  /* =========================
     Actions
  ========================== */

    async openNewAccount() {
      await this.doClick(this.openNewAccountLink);
      await this.page.waitForSelector('#fromAccountId option', { state: 'attached' });
      await this.accountType.selectOption({ index: 0 });
      await this.formAccountID.selectOption({ index: 0 });
      await this.doClick(this.openNewAccountBtn);
    }

    async getAccountDetails() {
      await this.doClick(this.newAccountID);
    }



/* =========================
     Assertions
  ========================== */
    
    async isAccountOpenSuccessfully() {
      const OpensuccessMessage = this.page.locator('#openAccountResult > p').first();;
      await expect(OpensuccessMessage).toHaveText(/Congratulations, your account is now open/);
    }

    async verifyInitialAmount() {
      const balanceLocator = this.page.locator('#balance');
      await expect(balanceLocator).toContainText(/\$\d+\.\d{2}/);
    }
}