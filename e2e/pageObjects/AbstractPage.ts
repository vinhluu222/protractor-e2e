import { element, by, protractor, browser } from 'protractor';

export class AbstractPage {
    sendKeysToElement = (locator: string, value: string) => {
        element(by.xpath(locator)).sendKeys(value);
    }

    waitToElementVisible = (locator) => {
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(locator))), 30000);
    }
}
