## Locators Shadow

// Localizando elementos

// Shadow DOM

const shadowDOM = page.locator('#content');
shadowDOM.getByText('Hello Shadow DOM');


// IFrame
const myiFrame = page.frameLocator('#my-iframe')
myiFrame.getBytext('Nibh netus aliquet nam mattis vestibulum')


// PopUp

// Aceptar un alert

launchAlert = page.getByRole('button', { name: 'Launch Alert' }).click();


// Confirm: aceptar o cancelar

launchConfirm = page.getByRole('button', { name: 'Launch confirm' }).click();

// Prompt: Escribir texto y aceptar

launchPrompt = page.getByRole('button', { name: 'Launch prompt' }).click();


// Launch Modal
const modalBtn = page.getByRole('button', { name: 'Launch modal' }).click();

const modal = page.locator('#my-modal');

const modalTitle = modal.locator('.modal-title');