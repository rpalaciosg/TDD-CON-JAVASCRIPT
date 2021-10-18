const { By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
// const chromeDriver = 'C:\Users\Richard\Downloads\chromedriver.exe';
// const chromeDriver = 'C:/Users/Richard/Downloads/chromedriver.exe';
const chromeDriver = '/home/richard/Downloads/chromedriver_linux64/chromedriver';

(async function example() {
	chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver).build());

	const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

	try {
		await driver.get('http://www.google.com/ncr');
		// await driver.findElement(By.name( name: 'q')).sendKeys(args: 'Keepcoding');
		await driver.findElement(By.name('q')).sendKeys('Keepcoding');
		// await driver.wait(until.titleIs( title: 'Keepcoding - Google Search'), 1000);
        await driver.wait(until.titleIs('Keepcoding - Google Search'), 1000);
	} catch (e) {
		await driver.quit();
	}
})();