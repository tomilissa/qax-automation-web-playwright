import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class AccessoriesPage extends BasePage {
  constructor(page) {
    super(page);
  
  this.homeAccessoriesPageTitle = 'Home Accessories';


/* =========================
     Locators
  ========================== */
  this.activeFiltersBlock = page.locator('#js-active-search-filters');
  this.filterItem = page.locator('li.filter-block');
  this.productCard = page.locator('.product-miniature');
  this.quickView = this.productCard.getByRole('link', { name: ' Quick view' }).first();
  this.quickViewModal = page.locator('.modal-content'); 
  this.stockStatus = page.locator('#product-availability');
  this.addToCartBtn =  page.getByRole('button', { name: ' Add to cart' });
  this.quantityInput = page.locator('#quantity_wanted');
  this.productName = page.locator('.product-name');
  this.productPrice = page.locator('.product-price');  
  this.cartQuantity = page.locator('span:has-text("Quantity:") strong');
  this.checkOutBtn = page.getByRole('link', { name: ' Proceed to checkout' });
  this.finalcheckOutBtn = page.getByRole('link', { name: 'Proceed to checkout' });
  this.productAddedMessage = page.getByRole('heading', { name: ' Product successfully added' })

  }


  /* =========================
     Actions
  ========================== */
  async filterByColor(colorName) {
    await this.filterBy(colorName);
  }
  
  async filterByComposition(compositionName) {
    await this.filterBy(compositionName);
  }

  async selectQuickViewBtn(index = 0) {
    const product = this.productCard.nth(index);
    await product.hover();
    const btnInProduct = product.getByRole('link', { name: ' Quick view' });
    await this.doClick(btnInProduct);
  }

  async setQuantityandAddToCart(quantity) {
    await this.quantityInput.fill(quantity.toString());
    await this.doClick(this.addToCartBtn);
  }

  async proceedToCheckout() {
    await this.doClick(this.checkOutBtn);
  }

  async finalcheckout() {
    await this.doClick(this.finalcheckOutBtn);
  }



/* =========================
     Assertions
  ========================== */
  
  async isAtAccessoriesPage() {
    await this.verifyTitle(this.homeAccessoriesPageTitle)
  }

  async verifyColorFilterIsActive(colorName) {
    await this.verifyElementVisible(this.activeFiltersBlock);
    const expectedText = new RegExp(`Color:\\s*${colorName}`, 'i');
    await this.verifyElementText(this.filterItem, expectedText);
  }

  async verifyCompositionFilterIsActive(compositionName) {
    await this.verifyElementVisible(this.activeFiltersBlock);
    const expectedText = new RegExp(`Composition:\\s*${compositionName}`, 'i');
    await this.verifyElementText(this.filterItem, expectedText);
  }

  async verifyProductHasNoStock() {
    await expect(this.quickViewModal).toBeVisible();
    await expect(this.stockStatus).toBeVisible();
    await expect(this.stockStatus).toContainText('Out-of-Stock');
    await expect(this.addToCartBtn).toBeDisabled(); 
  }

  async verifyProductHasStock() {
    await expect(this.quickViewModal).toBeVisible();
    await expect(this.addToCartBtn).toBeEnabled();
  }

  async verifyProducAddedSuccessfully(expectedQuantity) {
    await expect(this.productAddedMessage).toBeVisible();
    await expect(this.productName).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.cartQuantity).toHaveText(expectedQuantity.toString());
  }
    
}