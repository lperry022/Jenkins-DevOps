const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function testIndexPage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000'); 

        let title = await driver.getTitle();
        assert.strictEqual(title, 'Scam News Articles'); 
        console.log('Title is: ' + title);

        let header = await driver.wait(until.elementLocated(By.css('h1')), 10000);
        assert.ok(header, 'Header element is present');

        let headerText = await header.getText();
        assert.strictEqual(headerText, 'Latest Scam News Articles'); 
        console.log('Header text is: ' + headerText);

    } catch (error) {
        console.error('Test failed: ', error);
    } finally {
        await driver.quit();
    }
})();
