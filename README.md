# Curso de JavaScript
Bienvenido a mi repositorio de apuntes de JavaScript. Esta guía recopila los fundamentos del curso tomado de JS de mourdeDev

<details open>
<summary><b> Indice General (Tabla de contenido) </b></summary>

- [HelloWord](#00-helloword)
-  [01 - Variables en JavaScript](#01---variables-en-javascript)
   - [La palabra clave var](#1-la-palabra-clave-var)
   - [La palabra clave let](#la-palabra-clave-let)
   - [La palabra clave const (Constantes)](#la-palabra-clave-const-constantes)

<!--TIPOS DE DATOS -->
- [02 - Tipos de Datos en JavaScript](#02---tipos-de-datos-en-javascript)
  - [1. String (Cadenas de Texto)](#1-string-cadenas-de-texto)
  - [2. Números (Number)](#2-números-number)
  - [3. Booleanos](#3-booleanos)
  - [4. Undefined](#4-undefined)
  - [5. Null](#5-null)
  - [6. Symbol](#6-symbol)
  - [7. BigInt](#6-symbol)
  - [8. Operador Typeof](#8-operador-typeof)

<!--OPERADORES -->
- [03 - Operadores en JavaScript](#03---operadores-en-javascript)
  - [1. Operadores Aritméticos](#1-operadores-aritméticos)
  - [2. Incremento y Decremento](#2-incremento-y-decremento)
  - [3. Operadores de Asignación](#3-operadores-de-asignación)
  - [4. Operadores de Comparación](#4-operadores-de-comparación)
  - [5. Operadores Lógicos](#5-operadores-lógicos)
  - [6. Operadores Ternarios](#4-operador-ternario)


<!--CADENAS DE TEXTO STRING-->
- [06 - Strings (Cadenas de Texto) en JavaScript](#1-string-cadenas-de-texto)
  - [1. Declaración y Concatenación](#1-declaración-y-concatenación)
  - [2. Propiedades y Acceso a Caracteres](#2-propiedades-y-acceso-a-caracteres)
  - [3. Métodos Comunes en Strings](#3-métodos-comunes-en-strings)
  - [4. Templates Literals (Plantillas de Texto)](#4-templates-literals-plantillas-de-texto)


<!--ESTRUCTURAS CONDICIONALES-->
-[08 - Estructuras Condicionales en JavaScript](#08---estructuras-condicionales-en-javascript)
  - [1. Condicional if](#1-condicional-if)
  - [2. Condicional if - else](#2-condicional-if---else)
  - [3. Condicional Anidado if - else if - else](#3-condicional-anidado-if---else-if---else)
  - [4. Operador Ternario](#4-operador-ternario)
  - [5. Condicional switch](#5-condicional-switch)

- [Estructuras de Datos](#estructuras-de-datos)
  - [10 - Arrays (Arreglos) en JavaScript](#10---arrays-arreglos-en-javascript)
  -[1. Declaración e Inicialización](#1-declaración-e-inicialización)
  - [2. Métodos Comunes para Modificar Arrays](#2-métodos-comunes-para-modificar-arrays)
    - [Agregar y Eliminar al Final (push y pop)](#agregar-y-eliminar-al-final-push-y-pop)
    - [Agregar y Eliminar al Inicio (shift y unshift)](#agregar-y-eliminar-al-final-push-y-pop)
  - [3. Propiedad de Longitud y Limpieza](#3-propiedad-de-longitud-y-limpieza)
  - [4. Métodos Avanzados de Manipulación (slice y splice)](#4-métodos-avanzados-de-manipulación-slice-y-splice)

- [11 - Sets (Conjuntos) en JavaScript](#11---sets-conjuntos-en-javascript)
  - [1. Declaración e Inicialización](#1-declaración-e-inicialización-set)
  - [2. Métodos Comunes (Agregar y Eliminar)](#2-métodos-comunes-agregar-y-eliminar)
  - [3. Comprobación de Existencia y Tamaño](#3-comprobación-de-existencia-y-tamaño)
  - [4. Conversiones entre Set y Array](#4-conversiones-entre-set-y-array)
  - [5. Característica Principal: Elementos Únicos](#5-característica-principal-elementos-únicos)
  
- [12 - Maps Maps (Mapas) en JavaScript](#12---maps-mapas-en-javascript)
  - [1. Declaración e Inicialización Map](#1-declaración-e-inicialización-map)
  - [2. Métodos Comunes (Agregar, Buscar y Eliminar)](#2-métodos-comunes-agregar-buscar-y-eliminar)
  - [3. Comprobación de Existencia y Tamaño](#3-comprobación-de-existencia-y-tamaño)
  - [4. Métodos de Iteración (Keys, Values y Entries)](#4-métodos-de-iteración-keys-values-y-entries)
  - [5. Limpieza Total del Map](#5-limpieza-total-del-map)



</details>


## 00-HelloWord

Para imprimir mensajes en la terminal, utilizamos la función `console.log()`:

```javascript
console.log("¡Hola, mundo!");
```

#### CODIGO
- [HolaMundo.js](./Basic/00-HelloWord.js)

## 01 - Variables en JavaScript

En JavaScript, para declarar variables utilizamos tres palabras clave principales: `var`, `let` y `const`.

###  La palabra clave `var`
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

#### CODIGO
- [Operadores](./Basic/04-Operadores.js)

## 06 - Strings (Cadenas de Texto) en JavaScript

Un **String** (o cadena de texto) es uno de los tipos de datos primitivos en JavaScript, utilizado para representar y manipular texto. Se pueden delimitar utilizando comillas simples (`''`), comillas dobles (`""`), o comillas invertidas o templates literals (`` ``).

### 1. Declaración y Concatenación

Podemos unir (concatenar) cadenas de texto utilizando el operador `+`.

```javascript
let nombre = "Cristopher";
let edad = "Tengo 18 años y me llamo:  " + nombre +  "!";
console.log(edad);

// typeof: Muestra el tipo de dato de la variable
console.log(typeof edad); // string
```

### 2. Propiedades y Acceso a Caracteres

Los strings tienen propiedades como `.length` para conocer su longitud y permiten acceder a caracteres específicos mediante índices (comenzando desde el $0$).

```javascript
// Longitud total de la cadena de texto
console.log(edad.length);

// Acceso a un carácter en específico por su índice
console.log(edad[3]); // Devuelve la letra en la posición 3
```

### 3. Métodos Comunes en Strings

JavaScript proporciona una serie de funciones integradas (métodos) para transformar y buscar dentro de las cadenas de texto.

```javascript
// Transformaciones de mayúsculas y minúsculas
console.log(edad.toUpperCase()); // Convierte todo a MAYÚSCULAS
console.log(edad.toLowerCase()); // Convierte todo a minúsculas

// Búsqueda y validación
console.log(edad.indexOf("me llamo")); // Retorna el índice donde inicia la coincidencia
console.log("Incluye me llamo?: " + edad.includes("llamo")); // Retorna true o false si existe el texto

// Manipulación y extracción
console.log("Solo desde el indice 1 al 15: " + edad.slice(1, 15)); // Extrae una porción de la cadena
console.log("Reemplazar 'me llamo' por 'remplace': " + edad.replace("me llamo", "remplace"));
```

### 4. Templates Literals (Plantillas de Texto)

Las plantillas de cadenas (delimitadas por backticks \` \`) permiten la interpolación de variables de forma limpia y soportan múltiples líneas sin necesidad de caracteres de escape especiales.

```javascript
let message = `Hola amigos
como estan? 
Buenos DIAAAAAS
`;

let email = "Cristo@gmail.com";

console.log(message);

// Interpolación de variables: forma moderna y limpia de concatenar mensajes
console.log(`Cristopher ${message}`);
```

#### CODIGO
- [Strings (Cadenas de Texto)](./Basic/06-String.js)


## 08 - Estructuras Condicionales en JavaScript

Las estructuras condicionales nos permiten tomar decisiones dentro de nuestro código, ejecutando diferentes bloques de instrucciones según se cumplan o no determinadas condiciones lógicas.

En JavaScript, disponemos de sentencias como `if`, `if-else`, `else-if`, la estructura `switch` y los operadores ternarios.

---

### 1. Condicional `if`

Evalúa una condición. Si el resultado es verdadero (`true`), se ejecuta el bloque de código contenido en su interior.

```javascript
let edad = 18;

if (edad === 18) {
    console.log("¡Tienes exactamente 18 años!");
}
```

---

### 2. Condicional `if - else`

Permite definir un bloque de código alternativo que se ejecutará en caso de que la condición principal sea falsa (`false`).

```javascript
let edad = 15;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
```

---

### 3. Condicional Anidado `if - else if - else`

Se utiliza cuando necesitamos evaluar múltiples condiciones de forma secuencial. Si ninguna de las condiciones anteriores se cumple, se ejecutará por defecto el bloque `else`.

```javascript
let edad = 16;

if (edad === 18) {
    console.log("Tienes 18 años.");
} else if (edad === 16) {
    console.log("Tienes 16 años.");
} else {
    console.log("No tienes ni 16 ni 18 años.");
}
```

---

### 4. Operador Ternario

Es una alternativa compacta y elegante al `if-else` tradicional para evaluar expresiones sencillas de tipo booleano. Su sintaxis es:
`condición ? valorSiEsVerdadero : valorSiEsFalso`

```javascript
let edad = 18;
const message = (edad === 18) ? "La edad es 18" : "La edad no es 18";

console.log(message);
```

---

### 5. Condicional `switch`

Ideal para evaluar una única expresión frente a múltiples posibles valores fijos (como números o caracteres). Es una alternativa más limpia a tener muchos `else if` seguidos. 

*Nota: La instrucción `break` es fundamental para detener la ejecución una vez que se encuentra la coincidencia.*

```javascript
let day = 1;
let dayName = "";

switch (day) {
    case 0:
        dayName = "Lunes";
        break;
    case 1:
        dayName = "Martes";
        break;
    case 2:
        dayName = "Miércoles";
        break;
    default: 
        dayName = "Día no válido";
        break;
}

console.log(dayName); // Martes
```

#### CODIGO
- [Condicionales](./Basic/08-Condicionales.js)

# Estructuras de Datos

## 10 - Arrays (Arreglos) en JavaScript

Un **Array** (o arreglo) es una estructura de datos que nos permite almacenar múltiples elementos (de diferentes tipos de datos como números, strings, booleanos, etc.) en una sola variable, organizados de manera secuencial mediante índices numéricos que comienzan desde el $0$.

## 1. Declaración e Inicialización

Podemos declarar un array vacío y posteriormente asignarle o modificar sus valores.

```javascript
// Declaración de un array vacío
let myArray = [];

// Inicialización con valores numéricos
myArray = [1, 2, 3, 4];
console.log(myArray);

// Modificación de elementos mediante sus índices
myArray[0] = "Te quiero";
myArray[1] = "Te amo";
myArray[2] = "Eres el amor ";
myArray[3] = "De mi vida....";
console.log(myArray);

```

## 2. Métodos Comunes para Modificar Arrays

JavaScript cuenta con métodos integrados para añadir o eliminar elementos fácilmente de un arreglo.

### Agregar y Eliminar al Final (`push` y `pop`)
* **`push()`**: Agrega uno o más elementos al final del array.
* **`pop()`**: Elimina y devuelve el último elemento del array.

```javascript
// Agregar un elemento al final
myArray.push("Camilo");
console.log(myArray);

// Eliminar el último elemento
myArray.pop();
console.log(myArray);

console.log("Eliminado: " + myArray.pop());

```

### Agregar y Eliminar al Inicio (`shift` y `unshift`)
* **`shift()`**: Elimina y devuelve el primer elemento del array.
* **`unshift()`**: Agrega uno o más elementos al principio del array.

```javascript
// Eliminar el primer elemento (Nota: usando pop en el ejemplo original, pero el concepto de shift elimina el inicio)
console.log("Primero eliminado: " + myArray.shift());

// Agregar elementos al principio del array
myArray.unshift("Regresa", "los días son tristes", "¿Por qué?");
console.log(myArray);

```

## 3. Propiedad de Longitud y Limpieza

* **`length`**: Permite conocer cuántos elementos contiene el arreglo.
* **Limpiar un array**: Se puede vaciar asignando un array vacío `[]` o fijando su `length = 0`.

```javascript
// Longitud del arreglo
console.log("Longitud del arreglo: " + myArray.length);

// Formas de limpiar / vaciar el array
myArray = [];
myArray.length = 0;
console.log(myArray);

```

## 4. Métodos Avanzados de Manipulación (`slice` y `splice`)

```javascript
myArray = ["Te extraño", "te quiero", "vuelve", "realmente", "te quiero"];

// slice(): Regresa un nuevo arreglo con una porción extraída (sin modificar el original)
let newArreglo = myArray.slice(3, 5); // Desde el índice 3 hasta antes del 5
console.log(newArreglo);

// splice(inicio, cantidad): Elimina elementos a partir de un índice
newArreglo = myArray.splice(1, 3);
console.log(newArreglo);

// splice con reemplazo o inserción: (inicio, cantidadAEliminar, nuevoElemento)
newArreglo = myArray.splice(1, 2, "Amor?");
console.log(myArray);

```

#### CODIGO
- [Array JavaScript](./Basic/10-Arrays.js)

## 11 - Sets (Conjuntos) en JavaScript

Un **Set** (conjunto) es una estructura de datos coleccional similar a un array, con la gran diferencia de que **no permite almacenar elementos duplicados** y los elementos no están indexados por posiciones numéricas fijas.

### 1. Declaración e Inicialización Set

Podemos declarar un Set vacío o inicializarlo directamente pasando un iterable (como un array).

```javascript
// Declaración de un Set vacío
let mySet = new Set();
console.log(mySet);

// Inicialización con valores iniciales
mySet = new Set(["Cristopher", "Alexander", "Breceda", "Lerma"]);
console.log(mySet);

```

### 2. Métodos Comunes (Agregar y Eliminar)

* **`add()`**: Agrega un nuevo elemento al final del Set.
* **`delete()`**: Elimina un elemento específico. Retorna `true` si el elemento existía y fue eliminado con éxito, o `false` en caso contrario.

```javascript
// Agregar un nuevo elemento
mySet.add("Fernanda");
console.log(mySet);

// Eliminar un elemento específico
mySet.delete("Cristopher"); 
console.log(mySet);

/* ¿El elemento fue eliminado?
   - Regresa true: Sí lo eliminó porque existía.
   - Regresa false: No se eliminó porque no existe.
*/
console.log(mySet.delete("Breceda")); // true (o false si ya no está)

```

### 3. Comprobación de Existencia y Tamaño

* **`has()`**: Permite verificar si un elemento específico se encuentra dentro del Set (`true` o `false`).
* **`size`**: Propiedad (no es una función) que devuelve la cantidad de elementos que contiene el Set.

```javascript
// Comprobar si existe un elemento
console.log(mySet.has("Cristopher")); // false (fue eliminado antes)
console.log(mySet.has("Lerma"));      // true

// Conocer la longitud o tamaño del Set
console.log(mySet.size);

```

### 4. Conversiones entre Set y Array

Es muy común transformar colecciones entre arrays y sets según las necesidades de nuestro código.

```javascript
// Convertir un Set a un Array (usando Array.from)
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un Array a un Set
mySet = new Set(myArray);
console.log(mySet);

```

### 5. Característica Principal: Elementos Únicos

Los Sets **no admiten valores duplicados**. Si intentas añadir un elemento que ya existe, este será ignorado y el tamaño del Set no cambiará.

```javascript
mySet.add("Alexander");
mySet.add("Alexander");
mySet.add("Alexander");

console.log(mySet); // Solo aparecerá una vez "Alexander"

```

### CODIGO

- [Sets](./Basic/11-Sets.js)

## 12 - Maps (Mapas) en JavaScript

Un **Map** (mapa) es una estructura de datos que almacena colecciones de elementos organizados en pares de **clave-valor**. A diferencia de los objetos comunes, las claves en un Map pueden ser de cualquier tipo de datos (funciones, objetos o cualquier valor primitivo) y mantienen el orden original de inserción de los elementos.

### 1. Declaración e Inicialización Map

Podemos declarar un Map vacío o inicializarlo directamente pasando un iterable que contenga sub-arrays con la estructura `[clave, valor]`.

```javascript
// Declaración de un Map vacío
let myMap = new Map();
console.log(myMap);

// Inicialización con valores iniciales
myMap = new Map([
    ["Name", "Cristopher"],
    ["Edad", "18"],
    ["Ciudad: ", "Mexico"]
]);
console.log(myMap);
```

### 2. Métodos Comunes (Agregar, Buscar y Eliminar)

* **`set()`**: Agrega un nuevo par clave-valor si la clave no existe, o actualiza (modifica) el valor si la clave ya se encuentra en el Map.
* **`get()`**: Recupera el valor asociado a una clave específica. Si la clave no existe en el Map, devuelve `undefined`.
* **`delete()`**: Elimina un elemento por su clave. Retorna `true` si el elemento existía y fue eliminado, o `false` en caso contrario.

```javascript
// set: Agregar nuevos valores o modificar mediante su clave
myMap.set("Name", "Alexander"); // Modifica el valor de "Name"
myMap.set("Alias", "Chino");     // Agrega una nueva clave-valor
console.log(myMap);

// get: Buscar valores por su clave
console.log(myMap.get("Name"));      // Muestra: Alexander
console.log(myMap.get("Alexander")); // Muestra: undefined (se debe buscar por clave, no por valor)

// delete: Eliminar un elemento por su clave
myMap.delete("Name");
console.log(myMap);
```

### 3. Comprobación de Existencia y Tamaño

* **`has()`**: Permite verificar si una clave específica existe dentro del Map, devolviendo un valor booleano (`true` o `false`).
* **`size`**: Propiedad (no es una función) que devuelve la cantidad total de pares clave-valor que contiene el Map.

```javascript
// has: Comprobar si existe una clave
console.log(myMap.has("Alias")); // Regresa: true

// size: Conocer la longitud o tamaño del Map
console.log(myMap.size);
```

### 4. Métodos de Iteración (Keys, Values y Entries)

Los Maps nos ofrecen métodos nativos para extraer partes específicas de su colección en forma de iteradores.

* **`keys()`**: Devuelve todas las claves del Map.
* **`values()`**: Devuelve todos los valores del Map.
* **`entries()`**: Devuelve un iterador con todos los pares `[clave, valor]`.

```javascript
// keys: Obtener todas las claves
console.log(myMap.keys());

// values: Obtener todos los valores
console.log(myMap.values());

// entries: Obtener los pares clave-valor
console.log(myMap.entries());
```

### 5. Limpieza Total del Map

* **`clear()`**: Elimina absolutamente todos los elementos del Map de un solo golpe, dejándolo completamente vacío.

```javascript
// clear: Vaciar el mapa por completo
myMap.clear();
console.log(myMap); // Muestra: Map(0) {}
```
### CODIGO
- [Maps](./Basic/12-Maps.js)

## 13 - Loops (Bucles) en JavaScript

Un **Loop** (o bucle) es una estructura de control que nos permite repetir un bloque de código múltiples veces de manera automática, siempre y cuando se cumpla una condición específica. Son fundamentales para recorrer colecciones de datos y evitar la repetición manual de código.

### 1. El Bucle `for` Tradicional

El bucle `for` se utiliza cuando sabemos de antemano cuántas veces queremos que se ejecute el código. Consta de tres partes: inicialización, condición e incremento/decremento.

```javascript
// Bucle for básico para contar del 1 al 5
for (let i = 1; i <= 5; i++){
    console.log(`Hola ${i}`)
}

// Recorrer un Array utilizando su propiedad de longitud (.length)
const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}
```

### 2. El Bucle `while`

El bucle `while` repite un bloque de código mientras una condición específica sea verdadera (`true`). Es ideal cuando no sabemos con certeza cuántas iteraciones serán necesarias.

```javascript
// Bucle while básico
let i = 0
while (i <= 5){
    console.log(`While ${i}`)
    i++
}

/* Bucle infinito: ¡Cuidado! Ocurre si la condición nunca se vuelve falsa
while(true) {
    // Código que se ejecutaría sin detenerse
}
*/
```

### 3. El Bucle `do while`

Es muy similar al `while`, con la gran diferencia de que el bloque de código **siempre se ejecuta al menos una vez**, ya que la condición se evalúa al final del ciclo.

```javascript
// Bucle do while
i = 0
do {
    console.log(`hola ${i}`)
    i++
} while (i < 5)
```

### 4. El Bucle `for of`

El bucle `for of` es una forma moderna y simplificada (similar a un *for-each*) para recorrer los valores de objetos iterables como **Arrays**, **Sets** y **Maps**, sin necesidad de controlar manualmente los índices o contadores.

```javascript
// Definición de las colecciones de datos
let myArray = ["Te extraño", "te quiero", "vuelve", "realmente ", "te quiero"]
let mySet = new Set(["Cristopher", "Alexander", "Breceda", "Lerma"])
let myMap = new Map([
    ["Name", "Cristopher"],
    ["Edad", "18"],
    ["Ciudad: ", "Mexico"]
])

// Recorrer un Array con for of
for (let valor of myArray){
    console.log(valor)
}

// Recorrer un Set con for of
for (let valor of mySet){
    console.log(valor)
}

// Recorrer un Map con for of (obtiene pares [clave, valor])
for (let valor of myMap){
    console.log(valor)
}
```

### 5. Control de Bucles (`break` y `continue`)

JavaScript nos permite alterar el flujo normal de cualquier bucle utilizando dos palabras clave:
* **`continue`**: Salta la iteración actual y avanza directamente a la siguiente evaluación del bucle.
* **`break`**: Rompe el bucle de inmediato, deteniendo por completo su ejecución.

```javascript
// Uso de break y continue dentro de un for
for (let i = 1; i <= 5; i++){
    if (i == 5){
        continue // Salta el resto del código para el número 5
    } else if (i == 7){
        console.log(`Hola ${i}`)
        break // Detiene el bucle por completo
    }
    console.log(`Hola ${i}`)
}
```

### CODIGO

- [Loops JavaScript](./Basic/14-Bucles.js)
