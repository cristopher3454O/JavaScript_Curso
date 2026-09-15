## 00-HelloWord

Para imprimir mensajes en la terminal, utilizamos la función `console.log()`:

```javascript
console.log("¡Hola, mundo!");
```

#### CODIGO
- [HolaMundo.js](./Basic/00-HelloWord.js)

## 01 - Variables en JavaScript

En JavaScript, para declarar variables utilizamos tres palabras clave principales: `var`, `let` y `const`.

### 1. La palabra clave `var`
Es la forma tradicional (y más antigua) de declarar variables. Permite sobrescribir su valor y no arroja errores de compilación si intentas usarla antes de declararla (debido al comportamiento conocido como *hoisting*).

```javascript
var helloWord = "Hola JavaScript";
console.log(helloWord); // Imprime: Hola JavaScript

// Podemos sobrescribir su valor después sin problemas:
helloWord = "Estoy sobrescribida con var";
console.log(helloWord);
```
### La palabra clave `let`
Es la forma moderna y recomendada para variables cuyos valores van a cambiar. Al igual que var, permite sobrescribir los datos, pero con un control más estricto y seguro. No se puede acceder a ella antes de declararla.

```javascript
let mensajeModerno = "Aprendiendo let";
console.log(mensajeModerno);

// Modificamos su valor:
mensajeModerno = "Nuevo valor asignado a let";
console.log(mensajeModerno);
```
### La palabra clave `const` (Constantes)
Se utiliza para valores que no deben cambiar a lo largo de la ejecución del programa. No podemos sobrescribir sus datos ni reasignarlos una vez declarados.

```javascript
const URL_BASE = "[https://api.midominio.com](https://api.midominio.com)";
console.log(URL_BASE);

// Si intentaras hacer esto, marcaría un error:
// URL_BASE = "[https://otra-url.com](https://otra-url.com)";
```
#### CODIGO
- [01-Variables.js](./Basic/01-Variables.js)




