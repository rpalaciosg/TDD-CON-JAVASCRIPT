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