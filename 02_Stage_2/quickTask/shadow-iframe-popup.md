Localizando elementos

## Shadow DOM
page.locator('#content').getBytext('Hello Shadow DOM')


## IFrame
page.frameLocator('#my-iframe').getBytext('Nibh netus aliquet nam mattis vestibulum')

## PopUp

page.on('dialog', async dialog => {
        console.log(`Mensaje recibido: ${dialog.message()}`);
        expect(dialog.message()).toBe('Hello world!');
        await dialog.accept();
    });