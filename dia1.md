# TDD JavaScript 1

Revisaremos cosas utiles que usan en el dia a dia en el testing.

Hay un patron Builder, que cuando tenemos que trabajar con objetos, que nos ayuda a que esos objetos sean creados automaticamente. El patron builder permite meter valores invalidos para probar y tratar varias cosas.
Es decir, este patron cada vez nos va a crear un objeto diferente que deberemos tratar para ir puliendo nuestros tests.

Es de mucha ayuda. Ejemplo, quieres testear un email, y cada vez va a generar un nuevo email pero con diferentes caracteres o ciertos compromisos que hacen que el test falle y te ayuda a darte cuenta que estas haciendo algo mal.

## Que es el testing?

Consiste en realizar sobre tu aplicacion para medir la calidad de la misma.

**Objetivos del testing**
- Encontrar bugs.
- Tener mas confianza en nuestro codigo.(saber no contiene errores, que el codigo esta comprobado en su mayor parte antes de ponerlo en prod)
- Nos ayuda a decidir si es adecuado a subir ciertas funcionalidades a produccion o, por el contrario, esperar mas tiempo y corregir los errores que se puedan tener.
- Evitar la aparicion de defectos en la aplicacion. Al hacer testing te acostumbras a escribir codigo de una manera mas limpia, ordenada y con una mayor calidad.

**El instructor nos hace una pregunta**
> Tenemos 2 personas y que han desarrollado la misma aplicacion una con 500 test, y una con 200 test, cual crees que es la aplicacion que esta mejor testeada la de 500 o de 200?

- Depende de la cobertura.
- Depende de la features que tenga la app, si tienes 500 features, debe tener 500 test.

El instructor dice: es como el codigo, tenemos una app con permisos, con varios tipos de usuario, administrador, super, basico, gratuito/invitado. Hacemos un test de notas o crear notas. Tomo el usuario master y hago un test de crear una nota con el usuario master. Luego creo otro test que si no le paso jwt falla, luego creo otro test que si en la peticion no le paso el nombre de la nota, mando un error 400 diciendo que es obligatorio que me manden el nombre.
Estaria bien testeada esta app? No, porque se deberia testear con todos los tipos de usuarios, probar todas las casuisticas importantes, ejm. si tenemos una funcion que es un switch que es convierte un numero a una cadena.

Son importantes los test, pero es importante hacer test de calidad, que apunten realmente a algo critico, al correcto funcionamiento de tu app, pero si es algo sencillo en algo que es muy sencillo para nosotros en lo que no debemos fallar, entonces no tiene valor para hacer test.
 
Como se puede ver, influye tambien el instinto de cada uno y tambien segun lo que diga tu equipo de desarrollo.

Que tipos de test existen? Pregunta el instructor?
- Test unitarios
- Test de integracion
- Karma hace test en distintos navegadores. Es un tipo de test, son test externos a la app, y solo testean la parte visual?

TDD -> Test driven development
BDD -> Behavior driven development

## Test externos

Test realizados por herramientas externas, que no pueden acceder al codigo. Comprueban la parte visual.

Se dividen en 2 tipos:

- Manuales: realizadas a mano, entrando a la app y siguiendo todos los pasos para comprobar una funcionalidad.
- Automaticas: grabamos una interaccion en la app y especificamos cuanto tiempo queremos que se vuelva a realizar esta comprobacion.

**Ejemplo con Selenium**
[Selenium](https://www.selenium.dev/)

Creamos un ejemplo con selinum, creamos la carpeta `Ejemplos/selenium-test`, abrimos el terminal y dentro hacemos `npm init`

> Yarn es un gestor de paquetes como npm, para instalarlo solo hacemos `npm install -g yarn`, con esto tendriamos el gestor de paquetes, que seria lo mismo que npm.

El instructor explica que la sintaxis de `yarn` le parece mas facil y que es mas rapido. Ejemplo, es los mismo hacer:
`yarn add jest` que `npm install --save jest`

Bueno, continuando con selenium, buscando en google `selenium webdriver npm`, nos aparecera este link https://www.npmjs.com/package/selenium-webdriver

Entonces primero en la seccion de Navegadores, debemos descargar el driver segun el navegador que vamos a usar. En este caso googlechrome y firefox, los descomprimios y lo abrimos.

Descargamos el driver necesario para elnavegador que usemos.
Luego instalamos el paquete npm:
```npm
	npm install selenium-webdriver
```

```yarn
	yarn add selenium-webdriver
```

Una vez instalado nos vamos a crear el fichero `Ejemplos/selenium-test/index.js`     

```js
	const { By, Key, until, webdriver } = require('selenium-webdriver');
	const chrome = require('selenium-webdriver/chrome');
	const chromeDriver = 'C:\Users\Richard\Downloads\chromedriver';

	(async function example() {
		chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver).build())

		const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
		try {
			await driver.get('http://www/google.co//ncr');
			await drive.findElement(By.name(name: 'q')).sendKeys(args: 'Keepcoding');
			await driver.wait(until.titleIs(title:'Keepcoding - Google Search'), 1000);
		} catch (e) {
			await driver.quit();
		}
	})();
```

**Selenium** es una libreria para hacer test externos. Por lo tanto la forma de hacer un test externo de nuestra app, es probar nuestra app desde afuera. 

- Basica mente hemos hecho un `get()` esto nos devolvera una pagina web.
	`await driver.get('http://www/google.co//ncr');`

- Y en `await drive.findElement(By.name(name: 'q')).sendKeys(args: 'Keepcoding');`  estamos buscando un elemento que tenga un atributo 'name' que sea 'q' y le estamos diciendo que le mande 'Keepcoding'."

- Despues `await driver.wait(until.titleIs(title:'Keepcoding - Google Search'), 1000);` que espere hasta que el titulo de la pagina en la que estamos sea 'Keepcoding - Google Search', porque aui no igualamos a ninguna variable? Ps xq lo esta haciendo en un navegador, yo no necesito el codigo del html, lo que estoy haciendo es una navegacion en directo!!

Entonces ejecutamos el codigo con `node index.js`  en realidad lo que hace este scrip es abrir chrome, buscar keepcoding, y cuando el name o titulo de la pagina sea 'keepcodign - google search' cerrar.

Con selenium podemos hacer muchas cosas, lo que queramos, ejecutar clicks, hacer bucles, etc. Un ejemplo es si es que quiero descargar videos, y la pagina solo me lo permite hacer manual ingresando a un link y dandole click en descargar, entonces el instrutor dice se puede hacer un script ue recorra los links de todos los links decarga, ejecutamos click para descargar, luego un retroceso de pagina y asi sucesivamente, esto nos evitara hacer el mismo proceso manual para muchos de los videos.

Alguien pregunta si Selenium es parecido a una herramienta de chrome que se llama puppeter.

Han saldo muchas herramientas, como [cucumber.io](https://cucumber.io/), [puppeteer](https://github.com/puppeteer/puppeteer). 
Hay herramientas visuales de testing externo que no son con codigo, como [Ghost Inspector](https://ghostinspector.com/), que da una interterfaz web y tu le dices crear test, y tu le pasas la url de la web a testear, y vas a ir viendo la ejecucion, y vas a poder capturar los eventos que haces, es mas simple si, pero es menos poderoso que selenium, en el caso de los scripts selenium te perite hacer eso, mientras estas herramientas no lo tienen.

El instructor menciona que Selenium es mas potente y mas facil de usar con Python, pero es 

**Ejercicio con Selenium**

Vamos a realizar una practica y podemos ver la [selenium documentation](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/).

- Vamos a ir a la pagina plataforma.keepcoding.io, vamos a detectar el boton 'Catalogo de Cursos' y haga click.
- Ir al url de login, rellenar los campos de usuario y contraseña con cualquier email o contraseña.
