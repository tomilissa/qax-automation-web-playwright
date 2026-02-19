import { BasePage } from './BasePage';

export class PracticeFormPage extends BasePage {
  constructor(page) {
    super(page);

/* =========================
     Locators
  ========================== */

      this.firstNameField = page.getByRole('textbox', { name: 'First Name', exact: true });
      this.lastNameField = page.getByRole('textbox', { name: 'Last Name', exact: true });
      this.emailfield = page.locator('#userEmail');
      this.genderGroup = page.locator('#genterWrapper');
      this.genderField = page.locator('.form-check-input');
      this.mobileField = page.getByRole('textbox', { name: 'Mobile Number', exact: true });
      this.dateOfBirthField = page.locator('#dateOfBirthInput');
      this.monthOfBirthField = page.locator('.react-datepicker__month-select');
      this.yearOfBirthField = page.locator('.react-datepicker__year-select');
      this.dayOfBirthField = page.getByRole('gridcell', { name: 'Choose Wednesday, May 5th, 1993', exact: true });
      this.subjectsfield = page.locator('#subjectsInput');
      this.hobbiesContainer = page.locator('#hobbiesWrapper');
      this.uploadImageField = page.locator('#uploadPicture');
      this.currentAddressField = page.getByRole('textbox', { name: 'Current Address', exact: true });
      this.stateField = page.locator('#state');
      this.cityField = page.locator('#city');
      this.submitBtn = page.getByRole('button', { name: 'Submit', exact: true });
      this.modalHeader = page.locator('.modal-header');

    }

/* =========================
     Actions
  ========================== */

    async writeFirstName(firstName) {
        await this.writer(this.firstNameField, firstName);
    }

    async writeLastName(lastName) {
        await this.writer(this.lastNameField, lastName);
    }

    async writeEmail(email) {
        await this.writer(this.emailfield, email);
    }

    async selectGender(genderName) {
        await this.genderGroup.getByText(genderName, { exact: true }).click();
    }

    async writeMobile(mobile) {
        await this.writer(this.mobileField, mobile);
    }

    async selectDateOfBirth(month, year) {
        await this.doClick(this.dateOfBirthField);
        await this.selectOption(this.monthOfBirthField, month);
        await this.selectOption(this.yearOfBirthField, year);
        await this.doClick(this.dayOfBirthField, this.dayOfBirthField);
    }

    async writeTwoSubjects(subject1, subject2) {
        await this.writer(this.subjectsfield, subject1);
        await this.page.keyboard.press('Enter');
        await this.writer(this.subjectsfield, subject2);
        await this.page.keyboard.press('Enter');
    }

    async selectHobby(checkboxOption) {
        await this.selectCheckBox2(checkboxOption);
    }

    async subirArchivoImagen(file) {
        await this.subirArchivo(this.uploadImageField, file);
    }

    async writeCurrentAddress(currentAddress) {
        await this.writer(this.currentAddressField, currentAddress);
    }

    async selectState(state) {
        await this.dropdownSelection(this.stateField, state);
    }

    async selectCity(city) {
        await this.dropdownSelection(this.cityField, city);
    }

    async submitForm() {
        await this.doClick(this.submitBtn);
    }
    
    /* =========================
     Assertions
  ========================== */

    async verifyConfirmationModal(expectedConfirmationMesage) {
        await this.verifyMessage(this.modalHeader, expectedConfirmationMesage)
    }

    async verifyDateOfBirthValue(dateOfBirthValue) {
        await this.validateElementHasValue(this.dateOfBirthField, dateOfBirthValue)
    }

}