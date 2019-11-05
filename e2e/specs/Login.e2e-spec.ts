import { browser } from 'protractor';


describe('Login function', () => {
    const loginPage = require('../pageObjects/LoginPage');


    beforeAll(() => {
        browser.ignoreSynchronization = true;
    });

    it('TC01_Login', async () => {
        await browser.get('https://the-internet.herokuapp.com/login');
        await loginPage.inputUsername('tomsmith');
        await loginPage.inputPassword('SuperSecretPassword!');
        await loginPage.clickLoginBtn();

        await browser.sleep(5000);

    });

});
