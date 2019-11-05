import { browser, element, by } from 'protractor';

describe('Learning',()=>{

    beforeAll(()=>{
        browser.get('');
    });

    it('TC_01 - Web Element',()=>{
        const addContactBtn = element(by.css('#add-contact'));
        

    });
})