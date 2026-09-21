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

## 03 - Operadores en JavaScript

En JavaScript, los **operadores** son símbolos especiales que se utilizan para realizar operaciones en los valores y variables, asignar valores o comparar datos.

---

### 1. Operadores Aritméticos

Permiten realizar operaciones matemáticas básicas entre valores numéricos.

```javascript
let a = 10;
let b = 5;

console.log(a + b); // Suma (15)
console.log(a - b); // Resta (5)
console.log(a * b); // Multiplicación (50)
console.log(a / b); // División (2)

console.log(a % b); // Módulo o residuo de la división (0)
console.log(a ** b); // Exponente o potencia (10 elevado a la 5)
```

---

### 2. Incremento y Decremento

Operadores abreviados para sumar o restar una unidad ($1$) a una variable numérica.

```javascript
let a = 5;
let b = 5;

a++; // Incrementa a en 1
console.log(a); // 6

b--; // Decrementa b en 1
console.log(b); // 4
```

---

### 3. Operadores de Asignación

Sirven para almacenar un valor en una variable, combinando opcionalmente una operación aritmética.

```javascript
let myVariable = 2;
console.log(myVariable); // 2

myVariable += 2; // Equivalente a: myVariable = myVariable + 2
console.log(myVariable); // 4

myVariable -= 2; // myVariable = 4 - 2 = 2
myVariable *= 2; // myVariable = 2 * 2 = 4
myVariable /= 2; // myVariable = 4 / 2 = 2
myVariable %= 2; // myVariable = 2 % 2 = 0
myVariable **= 2; // myVariable = 0 ** 2 = 0
```

---

### 4. Operadores de Comparación

Evalúan dos valores y devuelven un booleano (`true` o `false`) según el resultado de la comparación.

```javascript
let a = 5;
let b = 10;

console.log(a > b);  // Mayor que -> false
console.log(a < b);  // Menor que -> true
console.log(a >= b); // Mayor o igual que -> false
console.log(a <= b); // Menor o igual que -> true

// Igualdad y Desigualdad por valor (con coerción de tipos)
console.log(a == 5);     // true
console.log(a == "5");   // true (convierte el string a número)
console.log(a != 6);     // Desigualdad por valor -> true

// Igualdad y Desigualdad Estricta (compara tanto valor como tipo de dato)
console.log(a === 5);    // true
console.log(a === "5");  // false (el tipo es diferente: number vs string)
console.log(a !== "5");  // Desigualdad estricta -> true

// Casos especiales de comparaciones de tipo flexible (coerción)
console.log(0 == false);     // true
console.log(1 == false);     // false
console.log(0 == "");        // true
console.log(0 == " ");       // true
console.log(0 == "Hola");    // false
console.log(0 === "");       // false (estricto no coerce tipos)
console.log(undefined == null);  // true
console.log(undefined === null); // false
```

---

### 5. Operadores Lógicos

Permiten combinar condiciones booleanas y evaluar expresiones complejas.

```javascript
// AND (&&) - Devuelve true solo si AMBAS expresiones son verdaderas
console.log(5 > 10 && 15 > 20); // false && false -> false
console.log(5 < 10 && 15 < 20); // true && true -> true
console.log(5 < 10 && 15 > 20); // true && false -> false

// OR (||) - Devuelve true si al menos UNA expresión es verdadera
console.log(5 > 10 || 15 > 20); // false || false -> false
console.log(5 < 10 || 15 > 20); // true || false -> true

// Combinación de operadores lógicos
console.log(5 > 10 && 15 > 20 || 30 < 40); // (false && false) || true -> true

// NOT (!) - Niega el valor booleano actual
console.log(!true);  // false
console.log(!false); // true
console.log(!(5 > 10 && 15 > 20)); // ¡Niega el resultado de la expresión interna! -> true
```

---

### 6. Operadores Ternarios

Es una alternativa compacta a la estructura condicional clásica `if-else`. Su sintaxis es:
`condicion ? valorSiEsVerdadero : valorSiEsFalso`

```javascript
const isRaining = true;

isRaining 
  ? console.log("Está lloviendo") 
  : console.log("No está lloviendo");
```