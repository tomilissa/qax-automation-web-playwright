// utils/menuUtils.js

/**
 * @param {import('@playwright/test').Page} page - Página actual de Playwright
 * @param {string} cardTitle - Título de la card
 * @param {string} menuListOption - Texto del menu option
 */
export async function selectCardandOption(page, cardTitle, menuListOption) {
  const cardLocator = page.locator('.card.mt-4.top-card', { hasText: cardTitle });

  // Hover sobre el menú principal
  await cardLocator.click();

  // Clic en la opción seleccionada
  await page.locator('.btn.btn-light').filter({ hasText: new RegExp(`^${menuListOption}$`) }).click();
}