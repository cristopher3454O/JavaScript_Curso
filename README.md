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



## 02 - Tipos de Datos en JavaScript

En JavaScript existen los tipos de datos primitivos, los cuales incluyen: `String` (Cadenas de texto), `Number` (Números), `Boolean` (Booleanos), `Undefined`, `null`, `Symbol` y `BigInt`.

### 1. String (Cadenas de Texto)
Como su nombre lo indica, son datos en los cuales podemos guardar cadenas de texto, como nombres, correos electrónicos o cualquier frase.

```javascript
let nombre = "Cristopher";
```


###  2. Números (Number)
Son aquellos datos en los cuales podemos almacenar tanto números enteros como decimales.

```javascript
let edad = 18 // entero
let altura = 1.12 // decimal
```

### 3. Booleanos
Son tipos de datos lógicos que solo pueden almacenar dos valores: verdadero (true) o falso (false).

```javascript
let esEstudiante = true
let esProfesor = false
```

### 4. Undefined
Representa a una variable que ha sido declarada pero aún no se le ha asignado un valor o no está definida.

```javascript
let undefineIsValue = undefined
```

###  5. Null
Representa la ausencia intencional de cualquier valor u objeto. Es un valor nulo asignado de manera consciente.

```javascript
let nullValue = null

```

### 6. Symbol
Se utiliza para crear identificadores únicos que no pueden ser repetidos, ideales para propiedades de objetos privadas o únicas.

```javascript
let miSymbol = Symbol("mysymbol");

```

### 7. BigInt
Se utiliza para representar números enteros extremadamente grandes que superan el límite seguro del tipo `Number`.

```javascript

let miBigInt = BigInt(3456787564334);
let miBigInt2 = 23456789n; // Otra forma de declararlo con la 'n' al final

```
### 8. Operador Typeof
Podemos utlizar typeof para ver que tipo de datos estamos utlizando:

```javascript
console.log(typeof nombre); // Imbrimirá: string
console.log(typeof edad);   // Imprimirá: number

```

#### CODIGO
- [02-DataType.js](./Basic/02-DataTypes.js)
