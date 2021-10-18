
/**
 * Ejercicio 1 : Selenium
 * Vamos a ir a la pagina plataforma.keepcoding.io, vamos a detectar el botón 'Catalogo de Cursos' y haga click.
 */
const { By, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeDriver = '/home/richard/Downloads/chromedriver_linux64/chromedriver';


(async function ejercicio1() {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver).build());

    const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    try {
        await driver.get('https://keepcoding.io/');
        // await driver.findElement(By.arguments('Cursos'));   
        await driver.find_element_by_css_selector('span:contains("Cursos")').click();
        await driver.wait(2000);
    } catch (e) {
        await driver.quit();
    }
})();