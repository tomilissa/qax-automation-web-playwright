## Locators Compra  

signInBtn = page.getByRole('button', { name: 'Sign in' });
signInEmail = page.locator('#login-form input[name="email"]')
signInPassword = page.locator('#login-form input[name="password"]');
searchBox = page.getByRole('textbox', { name: 'Search' });
productTitles = page.locator('.product-title a');
itemName = page.locator('h1[itemprop="name"]');
modal = page.locator('.modal-content');
productCard = page.locator('.product-miniature');
quickView = page.getByRole('link', { name: ' Quick view' }).first();
addToCartBtn =  page.getByRole('button', { name: ' Add to cart' });
quantityInput = page.locator('#quantity_wanted');
checkOutBtn = page.getByRole('link', { name: ' Proceed to checkout' });
finalcheckOutBtn = page.getByRole('link', { name: 'Proceed to checkout' });
continueBtn = page.getByRole('button', { name: 'Continue' });
termsCheckbox = page.locator('input[name="conditions_to_approve[terms-and-conditions]"]');
confirmOrderBtn = page.getByRole('button', { name: 'Order with an obligation to pay' });
orderConfirmationMsg = page.locator('#content-hook_order_confirmation h3.card-title');
