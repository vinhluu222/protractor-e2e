import { element, by, browser } from 'protractor';
import { AbstractPage } from './AbstractPage';

const USERNAME_TXTBX = `//*[@id = 'username']`;
const PASSWORD_TXTBX = `//*[@id = 'password']`;
const LOGIN_BTN = `//*[@type = 'submit']`;

class LoginPage extends AbstractPage {
    username = element(by.xpath(`//*[@id = 'username']`));

    async getPage(url) {
        browser.get(url);
    }

    async inputUsername(username) {
        this.waitToElementVisible(USERNAME_TXTBX);
        this.sendKeysToElement(USERNAME_TXTBX, username);

    }

    async inputPassword(password) {
        this.waitToElementVisible(PASSWORD_TXTBX);
        this.sendKeysToElement(PASSWORD_TXTBX, password);
    }

    async clickLoginBtn() {
        element(by.xpath(LOGIN_BTN)).click();
    }
}
module.exports = new LoginPage();
