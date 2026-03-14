import { BasePage } from './BasePage';

export class ElementsPage extends BasePage {
  constructor(page) {
    super(page);

  /* =========================
     Locators
  ========================== */

    //Buttons
    this.clickBtn = page.getByRole('button', { name: 'Click Me', exact: true });
    this.clickMessage = page.locator('#dynamicClickMessage');
    this.doubleClickBtn = page.locator('#doubleClickBtn');
    this.doubleClickMessage = page.locator('#doubleClickMessage');
    this.rightClickBtn = page.locator('#rightClickBtn');
    this.rightClickMessage = page.locator('#rightClickMessage');

    //Checkbox
    this.checkboxOptions = page.locator('label');
    this.checkboxResultMessage = page.locator('#result');
    this.treeOptions = page.locator('#tree-node');
    this.checkboxOptions = page.locator('label');
    this.homeCheckboxIcon = page.locator('label[for="tree-node-home"] .rct-icon').first();
    this.expandAllButton = this.treeOptions.getByRole('button',{name: 'Expand all'});

    //Textbox
    this.userForm = page.locator('#userForm');
    this.output = page.locator('#output');
    this.emailfield = this.userForm.getByRole('textbox',{name: 'name@example.com'});
    this.fullName = this.userForm.getByRole('textbox',{name: 'Full Name'});
    this.currentAddress = this.userForm.getByRole('textbox',{name: 'Current Address'});
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitButton = this.userForm.getByRole('button',{name: 'Submit'});
    this.output = page.locator('#output');
    this.nameOutput = this.output.locator('#name');
    this.emailOutput  = this.output.locator('#email');
    this.currentAddressOutput = this.output.locator('#currentAddress');
    this.pemanentAddressOutput = this.output.locator('#permanentAddress');

    //Radio Buttons
    this.radioButtonSection = page.locator('.custom-radio');
    this.RadioButtonconfirmationMessage = page.locator('.mt-3');
    this.radioButtonLabel = (option) => page.locator('label', { hasText: option });

    //Links
    this.simpleLink = page.locator('#simpleLink');
    this.brokenLink = page.locator('#created');
    this.APIResponseMessage = page.locator('#linkResponse');

    //Dynamic Properties
    this.enable5Btn = page.locator('#enableAfter');
    this.colorBtn = page.locator('#colorChange');

    //Upload & Download
    this.uploadInput = page.locator('#uploadFile');
    this.uploadedFilePathMessage = page.locator('#uploadedFilePath');
    this.downloadButton = page.locator('#downloadButton');

  }

  /* =========================
     Actions
  ========================== */

    //Buttons
    async clickOnButton() {
        await this.doClick(this.clickBtn);
    }
      
    async doubleClickOnButton() {
        await this.doubleClick(this.doubleClickBtn);
    }

    async rightClickOnButton() {
        await this.rightClick(this.rightClickBtn);
    }

    //Checkbox

    async selectSecondLevelCheckbox(CheckboxLevel2) {
        await this.selectCheckSecndLvl(this.expandAllButton, this.checkboxOptions, CheckboxLevel2)
    }

    //Textbox
    async writeFullName(fullName) {
        await this.writer(this.fullName, fullName);
    }

    async writeEmail(email) {
        await this.writer(this.emailfield, email);
    }

    async writeCurrentAddress(currentAddress) {
        await this.writer(this.currentAddress, currentAddress);
    }

    async writePermanentAddress(permanentAddress) {
        await this.writer(this.permanentAddress, permanentAddress);
    }

    async clickSubmitButton() {
        await this.doClick(this.submitButton);
        
    }

    //Radio Buttons
    async selectRadioButtonGeneral(radioButtonOption) {
    await this.radioButtonLabel(radioButtonOption).click({ force: true });
    }

    //Links

    async clickOnSimpleLink() {
        await this.doClick(this.simpleLink)
    }
    
    async clickOnBrokenLink() {
        await this.doClick(this.brokenLink)
    }

    // Upload & Download

     async subirArchivoUpload(file) {
        await this.subirArchivo(this.uploadInput, file);
    }

    async clickOnDownload() {
    const [download] = await Promise.all([
        this.page.waitForEvent('download', { timeout: 20000 }), 
        this.downloadButton.click({ force: true })
    ]);
    this.dowloadedFileName = download.suggestedFilename();
    return download;

}
  /* =========================
     Assertions
  ========================== */
  
    //Buttons
    async verifyClickConfirmationMessage(){
        await this.verifyMessage(this.clickMessage, 'You have done a dynamic click')
    }

    async verifyDoubleClickConfirmationMessage(){
        await this.verifyMessage(this.doubleClickMessage, 'You have done a double click')
    }

    async verifyRightClickConfirmationMessage(){
        await this.verifyMessage(this.rightClickMessage, 'You have done a right click')
    }

    //Checkbox & TextBox
    async verifyCheckBoxSelectionMessage(){
        await this.verifyMessage(this.checkboxResultMessage, 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')

    }

    async verifyPartialSelection(){
      await this.verifyClassChange(this.homeCheckboxIcon, /rct-icon-half-check/)
    }

    async verifyNameOutput(expectedName){
      await this.verifyPartialText(this.nameOutput, expectedName)
    }

    async verifyEmailOutput(expectedEmail){
      await this.verifyPartialText(this.emailOutput, expectedEmail)
    }

    async verifyCurrentAddressOutput(expectedCurrentAddress){
      await this.verifyPartialText(this.currentAddressOutput, expectedCurrentAddress)
    }

    async verifyPermanentAddressOutput(expectedPermanentAddress){
      await this.verifyPartialText(this.pemanentAddressOutput, expectedPermanentAddress)
    }

    async verifyInvalidEmailErrorMessage(){
      await this.verifyClassChange(this.emailfield, /field-error/)
    }
    
    async verifyRadioButtonYesMessage(){
        await this.verifyMessage(this.RadioButtonconfirmationMessage, 'You have selected Yes')
    }

    async verifyRadioButtonImpressiveMessage() {
        await this.verifyMessage(this.RadioButtonconfirmationMessage, 'You have selected Impressive')
    }

    async verifyRadioButtonOptionDisabled(Option) {
        await this.validateDisabledOption(this.radioButtonSection, Option)
    }

    //Links
    async verifyNewURL(newURL) {
        await this.verifyURL(this.newPage, newURL)
    }

    async verifyAPIResponse () {
        await this.validateMessageIsVisible(this.APIResponseMessage)
    }

    //Dynamic Properties
    async verifyButtonIsDisabled() {
        await this.validateElementIsDisabled(this.enable5Btn);
    }

    async verifyButtonIsEnabledAfter5Seconds() {
        await this.validateElementIsEnable(this.enable5Btn);
    }

    async verifyButtonColorIsWhite() {
        await this.validateElementHasClass(this.colorBtn, 'mt-4 btn btn-primary');
    }

    async verifyButtonColorChange() {
        await this.validateElementHasClass(this.colorBtn, 'mt-4 text-danger btn btn-primary');
    }

     // Upload & Download
     async verifyUploadedFile() {
        await this.verifyMessage(this.uploadedFilePathMessage, 'testFile.txt');
    }
    
    async verifyFileName(value) {
        await this.validateNameToBe(this.dowloadedFileName, value)
    }
}
