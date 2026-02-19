import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

    /* =========================
       Locators
    ========================== */

    // Full Name
    this.txtFirstName = page.locator('input[placeholder="First Name"]');
    this.txtLastName = page.locator('input[placeholder="Last Name"]');

    // Address
    this.txtAddress = page.locator('textarea[ng-model="Adress"]');

    // Contact
    this.txtEmail = page.locator('//input[@type="email"]');
    this.txtPhone = page.locator('input[type="tel"]');

    // Gender & Hobbies
    this.rdbGenderMale = page.locator('input[value="Male"]');
    this.ckbHobby = page.locator('input[type="checkbox"]');

    // Languages
    this.ddlLanguages = page.locator('#msdd');
    this.language = page.locator('li.ng-scope > a');
    this.formBody = page.locator('body');
    

    // Skills
    this.ddlSkills = page.locator('#Skills');

    // Country (advanced select2)
    this.ddlCountrySelect2 = page.locator('.select2-selection');
    this.txtCountrySearch = page.locator('input[type="search"]');
    this.CountryOption = page.locator('.select2-results__option--highlighted').first();

    // Country (simple select)
   this.ddlCountry = page.locator('#countries');
    // Date of Birth
    this.sectionDateOfBirth = page
      .locator('.form-group')
      .filter({ hasText: 'Date of Birth' });
    this.ddlYear = this.sectionDateOfBirth.locator('#yearbox');
    this.ddlMonth = this.sectionDateOfBirth.locator('select[ng-model="monthbox"]');
    this.ddlDay = this.sectionDateOfBirth.locator('#daybox');

    // Password
    this.txtPassword = page.locator('#firstpassword');
    this.txtConfirmPassword = page.locator('#secondpassword');

    // Submit
    this.btnSubmit = page.locator('#submitbtn');
  }

  /* =========================
     Actions
  ========================== */

  async writerFullName(firstName, lastName) {
    await this.writer(this.txtFirstName, firstName);
    await this.writer(this.txtLastName, lastName);
  }

  async writerAddress(address) {
    await this.writer(this.txtAddress, address);
  }

  async writerContactInfo(email, phone) {
    await this.writer(this.txtEmail, email);
    await this.writer(this.txtPhone, phone);
  }

  async selectGenderMale() {
    await this.rdbGenderMale.check();
  }

  async selectLastHobby() {
    await this.ckbHobby.last().check();
  }

  async selectLanguage(language1) {
    await this.ddlLanguages.dispatchEvent('click');
    await this.language.first().waitFor({ state: 'visible' });
    await this.language.filter({ hasText: language1 }).click();
  }
  
  async selectSkill(skill) {
    await this.ddlSkills.selectOption(skill);
  }

  async selectCountryAdvanced(country) {
    await this.ddlCountrySelect2.click();
    await this.txtCountrySearch.fill(country);
    await this.CountryOption.click();
  }
  
  async selectDateOfBirth(year, month, day) {
    await this.ddlYear.selectOption(year);
    await this.ddlMonth.selectOption(month);
    await this.ddlDay.selectOption(day);
  }

  async completePassword(Password) {
    await this.txtPassword.fill(Password);
    await this.txtConfirmPassword.fill(Password);
  }

  async submitForm() {
    await this.btnSubmit.click();
  }

   /* =========================
     Assertions
  ========================== */
  async isAtRegisterPage() {
    await this.verifyTitle('Register', 'El título de la página debe ser "Register"');
  }

  async validateCountryFieldError() {
    await this.verifyErrorMessage( this.ddlCountry, 'Please select an item in the list.');
  }

  async validatePhoneFieldError() {
    await this.verifyErrorMessage( this.txtPhone, 'Please match the requested format.');
  }

  async validateEmailEmptyFieldError() {
    await this.verifyErrorMessage( this.txtEmail, 'Please fill out this field.');
  }

  async validateNameEmptyFieldError() {
    await this.verifyErrorMessage( this.txtFirstName, 'Please fill out this field.');
  }

}