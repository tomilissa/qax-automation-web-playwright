import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // Localizadores base
    this.menuOption = page.locator('.card.mt-4.top-card');
  }

  /* =========================
     Actions
  ========================== */

  async selectCardAndOption(cardTitle, menuOptionName) {
    // 1. Clic en la Card principal (ej: Elements)
    // Usamos force: true por si un anuncio invisible está tapando la card
    const card = this.page.locator('.card', { hasText: cardTitle }).first();
    await card.scrollIntoViewIfNeeded();
    await card.click({ force: true });

    // 2. Localizar el submenú (ej: Buttons)
    // Esperamos a que la lista lateral aparezca
    const option = this.page.locator('li.btn', { hasText: menuOptionName }).first();
    await option.click({ force: true });
  
  
}

  /* =========================
     Assertions
  ========================== */
  
  async isAtHomePage() {
    // DemoQA suele tardar en cargar el título, agregamos una espera pequeña
    await this.page.waitForLoadState('networkidle');
  } 
}