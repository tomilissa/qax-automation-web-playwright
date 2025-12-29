// utils/menuUtils.js

/**
 * Abre un menú tipo dropdown haciendo hover y selecciona una opción interna.
 * 
 * @param {import('@playwright/test').Page} page - Página actual de Playwright
 * @param {string} menuText - Texto visible del menú principal (ej: "SwitchTo")
 * @param {string} optionText - Texto de la opción interna (ej: "Alerts")
 */
export async function openMenuAndSelect(page, menuText, optionText) {
  const menuLocator = page.locator('a.dropdown-toggle', { hasText: menuText });

  // Hover sobre el menú principal
  await menuLocator.hover();

  // Clic en la opción seleccionada
  await page.getByRole('link', { name: optionText }).click();
}

export async function openMenuAndSelectDoubleHover(page, primaryMenuText, subMenuText, optionText) {
  
  const primaryMenuLocator = page.locator('a.dropdown-toggle', { hasText: primaryMenuText }).first();
  await primaryMenuLocator.hover();

  const subMenuLocator = page.locator('a.dropdown-toggle', { hasText: subMenuText }).first();
  await subMenuLocator.hover();

  await page.getByRole('link', { name: optionText }).click();

}
