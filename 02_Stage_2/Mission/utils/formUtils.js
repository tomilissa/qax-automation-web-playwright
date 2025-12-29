export async function fillText(formGroup, labelText, value) {
  await formGroup
    .filter({ hasText: labelText })
    .getByRole('textbox')   // toma el único input dentro de esa sección
    .fill(value);
}
export async function fillTextByLabel(formGroup, labelText, fieldName, value) {
  await formGroup
    .filter({ hasText: labelText })
    .getByRole('textbox', { name: fieldName })
    .fill(value);
}

export async function fillInputInside(formGroup, labelText, selector, value) {
  await formGroup
    .filter({ hasText: labelText })
    .locator(selector)
    .fill(value);
}

export async function selectCheckboxByLabel(formGroup, labelText, index = 0) {
  await formGroup
    .filter({ hasText: labelText })
    .locator('input[type="checkbox"]')
    .nth(index)
    .check();
}

export async function selectFromDropdown(selector, value) {
  await selector.selectOption(value);
}

export async function select2Search(selector, searchValue, finalValue) {
  await selector.click();
  await selector.page().locator('input[type="search"]').fill(searchValue);
  await selector.page().getByRole('treeitem', { name: finalValue }).click();
}