import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class HomePage extends BasePage {
  constructor(page) {
    super(page);
  
  this.homePageTitle = 'My e-commerce';


/* =========================
     Locators
  ========================== */
  
  this.singInBtn = page.getByRole('link', { name: ' Sign in' });
  this.signOutBtn = page.getByRole('link', { name: ' Sign out' });

  }


  /* =========================
     Actions
  ========================== */

  async clickOnSignIn() {
        await this.doClick(this.singInBtn)
    }

  async clickOnSignOut() {
        await this.doClick(this.signOutBtn)
    }
    
  async selectMainMenuOption(menuOption, subMenuOption) {
        const menuLocator = this.page.getByRole('link', { name: menuOption, exact: true });
        const subMenuLocator = this.page.getByRole('link', { name: subMenuOption, exact: true });
        await this.selectMenuOption(menuLocator, subMenuLocator);
    }


/* =========================
     Assertions
  ========================== */
  
  async isAtHomePage() {
    await this.verifyTitle(this.homePageTitle)
  }
  
}
