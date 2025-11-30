https://practice.expandtesting.com/inputs

Link "PMP Practice" = page.getByRole('link', { name: 'PMP Practice' });
Link "Practice" = page.getByRole('link', { name: 'SUT'});
Dropdown "Demos" = page.getByRole('button', { name: 'Demos'});
Link "Examples" = page.getByRole('link', { name: 'Examples'});
Link "Apps" = page.locator('.dropdown-item[href="/#apps"]');
Link "APIs" = page.getByRole('link', { name: 'APIs'});
Link "Assertions" = page.getByRole('link', { name: 'Assertions'});
Link "Reports" = page.locator('.dropdown-item[href="/#reports"]');
Link "Tools" = page.getByRole('link', { name: 'Tools' });
Link "Tips" = page.getByRole('link', { name: 'Tips' });
Link "Test Cases" = page.locator(".nav-link.p-2[href='/test-cases']");
Link "API Testing" = page.locator(".nav-link.p-2[href='/notes/api/api-docs/']");
Link "About" = page.locator(".nav-link.p-2[href='/about']");
Link "Free ISTQB" = page.getByText('Free ISTQB');
Button "Display Inputs" = page.getByRole('button', { name: 'Display Inputs'});
Button "Clear Inputs" = page.getByRole('button', { name: 'Clear Inputs'});
Input "Number" = page.getByRole('textbox', { name: 'Input: Number'});
Input "Text" = page.getByRole('textbox', { name: 'Input: Text'});
Input "Password" = page.getByRole('textbox', { name: 'Input: Password'});
Input "Date" = page.locator("#input-date");
Link "Postman API Testing" = page.getByRole('link', { name: 'Postman API Testing', exact: true });
Link "Cypress test automation" = page.getByRole('link', { name: 'Cypress test automation', exact: true });


https://practice.expandtesting.com/login

Link "Home" = page.getByRole('link', { name: 'Home'});
Link "UI testing tools" = page.getByRole('link', { name: 'UI testing tools'});
Link "Here" = page.getByRole('link', { name: 'here'});
Textbox "Username" = page.getByRole('textbox',{ name: 'Username'});
Textbox "Password" = page.getByRole('textbox',{ name: 'Password'});
Button "Login" = page.getByRole('button', { name: 'Login', exact: true});
Link "Selenium WebDriver training" = page.getByRole('link', { name: 'Selenium WebDriver training', exact: true });
Link "Authentication methods explained" =  page.locator('div.container-fluid.mt-1.mb-3').getByRole('link', { name: 'Authentication methods explained', exact: true });
Link "Selenium automation framework" = page.locator("//div[@id='aswift_2_host']//div//div[@aria-label='Selenium automation framework']");


https://practice.expandtesting.com/register

Link "Home" = page.getByRole('link', { name: 'Home'});
Textbox "Username" = page.getByRole('textbox', { name: 'Username'});
Textbox "Password" = page.locator("#password");
Textbox "Confirm Password" = page.getByRole('textbox', { name: 'Confirm Password'});
Button "Register" = page.getByRole('button', { name: 'Register'});
Link "Expand Testing" = page.getByRole('link', { name: 'Expand Testing'});
Link "Selenium testing course" = page.getByRole('link', { name: 'Selenium testing course'});


https://practice.expandtesting.com/forgot-password

Textbox "E-mail" = page.getByRole('textbox', { name: 'E-mail'});
Button "Retrieve password" = page.getByRole('button', { name: 'Retrieve password'});


https://practice.expandtesting.com/otp-login

Textbox "Your Email Address" = page.getByRole('textbox', { name: 'Your Email Address'});
Button "Send OTP Code" = page.locator("#btn-send-otp");


https://practice.expandtesting.com/dynamic-table

Link "Testing practice platform" = page.getByRole('link', { name: 'Testing practice platform'});
Link "PMP certification practice" = page.locator("//div[@id='aswift_4_host']//div//div[@aria-label='PMP certification practice']")


https://practice.expandtesting.com/dynamic-pagination-table


Link "Previous" = page.getByRole('link', { name: 'Previous'});
Link "Next" = page.getByRole('link', { name: 'Next'});
Link "1" = page.getByRole('link', { name: '1'});
Link "2" = page.getByRole('link', { name: '2'});


https://practice.expandtesting.com/locators#google_vignette

Button "Add Item" = page.getByRole('button', { name: 'Add Item'});
Link "Contact" = page.getByRole('link', { name: 'Contact'});
Combobox "Choose a country" = page.getByRole('combobox', { name: 'Choose a country'});
Select country = page.locator('#countrySelect').getByRole('option', { name: 'Brazil' });
Textbox "Email for newsletter" = page.getByRole('textbox', { name: 'Email for newsletter'});
Textbox "Search the site" = page.getByRole('textbox', { name: 'Search the site'});
Textbox "Filter by tag" = page.getByRole('textbox', { name: 'Filter by tag'});
Button "Reload" = page.getByRole('button', { name: 'Reload'});


https://practice.expandtesting.com/my-browser

Button "Show Browser Information" = page.getByText('Show Browser Information', { exact: true});
Link "NURSING HOME JOBS" = page.locator('div.list_wrapper')
Link "NURSING HOME JOBS" = page.getByText('NURSING HOME JOBS', { exact: true});
