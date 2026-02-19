import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

  this.registrationPageTitle = 'ParaBank | Register for Free Online Account Access';

  /* =========================
     Locators
  ========================== */

  this.firstName = page.locator('[id="customer.firstName"]');
  this.lastName = page.locator('[id="customer.lastName"]');
  this.address = page.locator('[id="customer.address.street"]');
  this.city = page.locator('[id="customer.address.city"]');
  this.state = page.locator('[id="customer.address.state"]');
  this.zipCode = page.locator('[id="customer.address.zipCode"]');
  this.phone = page.locator('[id="customer.phoneNumber"]');
  this.ssn = page.locator('[id="customer.ssn"]');
  this.username = page.locator('[id="customer.username"]');
  this.password = page.locator('[id="customer.password"]');
  this.confirmPassword = page.locator('[id="repeatedPassword"]');
  this.registerBtn = page.getByRole('button', { name: 'Register' });
  this.loginBtn = page.getByRole('button', { name: 'Log In' });
  

  }

  /* =========================
     Actions
  ========================== */

  async fillRegistrationForm(userData) {
    await this.writer(this.firstName, userData.firstName);
    await this.writer(this.lastName, userData.lastName);
    await this.writer(this.address, userData.address);
    await this.writer(this.city, userData.city);
    await this.writer(this.state, userData.state);
    await this.writer(this.zipCode, userData.zipCode);
    await this.writer(this.phone, userData.phone);
    await this.writer(this.ssn, userData.ssn);
    await this.writer(this.username, userData.username);
    await this.writer(this.password, userData.password);
    await this.writer(this.confirmPassword, userData.password);

    await this.doClick(this.registerBtn);

  }

  /* =========================
    Assertions
  ========================== */
      
    async isAtRegistrationPage() {
        await this.verifyTitle(this.registrationPageTitle);
    }

    async isRegistrationOk() {
        const successMessage = this.page.locator('#rightPanel > p');
        await expect(successMessage).toHaveText(/Your account was created successfully/);
    }

}