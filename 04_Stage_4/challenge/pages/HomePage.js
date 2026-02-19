import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class HomePage extends BasePage {
  constructor(page) {
    super(page);

  this.homePageTitle = 'ParaBank | Welcome | Online Banking';
  


/* =========================
     Locators
  ========================== */
  this.registerBtn = page.getByRole('link', { name: 'Register' });
  

  }


  /* =========================
     Actions
  ========================== */

    async clickOnRegister() {
        await this.doClick(this.registerBtn)
    }



/* =========================
     Assertions
  ========================== */
  
  async isAtHomePage() {
    await this.verifyTitle(this.homePageTitle)
  }

}
