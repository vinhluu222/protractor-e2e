import { browser, element, by } from 'protractor';

describe('Learning', () => {

    beforeAll(() => {
        browser.get('');
    });

    beforeEach(function () {
        const firstInput = element(by.model('first'));
        const secondInput = element(by.model('second'));
        const goBtn = element(by.id('gobutton'));
    });

    it('TC_01 - Web Element', () => {
        // Sendkeys
        /*   const addContactBtn = element(by.css('#add-contact'));
          addContactBtn.click();
          const nameTextbox = element(by.css('#contact-name'));
          nameTextbox.clear();
          nameTextbox.sendKeys('Vinh');
          nameTextbox.getAttribute('value').then(function (value) {
              console.log('Name input = ' + value);
          }); */

        // Submit
        // const createBtn = element(by.css('.create-button'));
        // createBtn.submit();

        // Get text
        const deleteAllContactBtn = element(by.css('.mat-raised-button.mat-primary>span'));
        deleteAllContactBtn.getText().then(function (text) {
            console.log('Text is ' + text);
            expect(text.trim()).toEqual('Delete All Contacts');
        });

    });
})