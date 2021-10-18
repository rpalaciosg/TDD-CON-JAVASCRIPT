/**
 * Ejercicio 2 - Selenium
 * Ir al url de login, rellenar los campos de usuario y contraseña con cualquier email o contraseña.
 */

const { By, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeDriver = '/home/richard/Downloads/chromedriver_linux64/chromedriver';

(async function ejercicio2() {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver).build());

    const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    try {
        await driver.get('https://plataforma.keepcoding.io/');
        // await driver.findElement(By.arguments('/sing-in')).click();
        await driver.find_element_by_css_selector('a[href=/sign_in]').click();
        await driver.wait(2000);
    } catch (e) {
      await driver.quit();
    }
})();