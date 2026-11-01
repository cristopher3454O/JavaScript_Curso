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

<!--LOOPS JAVA SCRIPT-->
- [Estructuras de Control y Lógica](#estructuras-de-control-y-lógica)
  - [13 - Loops (Bucles) en JavaScript](#13---loops-bucles-en-javascript)
    - [1. El Bucle for Tradicional](#1-el-bucle-for-tradicional)
    - [2. El Bucle while](#2-el-bucle-while)
    - [3. El Bucle do while](#3-el-bucle-do-while)
    - [4. El Bucle for of](#4-el-bucle-for-of)
    - [5. Control de Bucles (break y continue)](#5-control-de-bucles-break-y-continue)

- [Modularidad y Objetos](#modularidad-y-objetos)
  - [14 - Functions (Funciones) en JavaScript](#14---functions-funciones-en-javascript)
    - [1. Declaración e Inicialización Básica](#1-declaración-e-inicialización-básica)
    - [2. Tipos de Funciones (Parámetros, Anónimas y Arrow)](#2-tipos-de-funciones-parámetros-anónimas-y-arrow)
    - [3. Parámetros por Defecto](#3-parámetros-por-defecto)
    - [4. Retorno de Valores](#4-retorno-de-valores)
    - [5. Funciones Anidadas y de Orden Superior](#5-funciones-anidadas-y-de-orden-superior)
    - [6. Recorrido de Colecciones con forEach](#6-recorrido-de-colecciones-con-foreach)
  - [15 - Objects (Objetos) en JavaScript](#15---objects-objetos-en-javascript)
    - [1. Sintaxis y Creación de un Objeto](#1-sintaxis-y-creación-de-un-objeto)
    - [2. Acceso y Modificación de Propiedades](#2-acceso-y-modificación-de-propiedades)
    - [3. Eliminación de Propiedades](#3-eliminación-de-propiedades)
    - [4. Métodos y Anidación de Objetos](#4-métodos-y-anidación-de-objetos)
    - [5. Comparación, Iteración y Constructores Básicos](#5-comparación-iteración-y-constructores-básicos)
  - [16 - Destructuring and Spread (Destructuración y Propagación) en JavaScript](#16---destructuring-and-spread-destructuración-y-propagación-en-javascript)
    - [1. Desestructuración de Arrays (Arreglos)](#1-desestructuración-de-arrays-arreglos)
    - [2. Desestructuración de Objetos](#2-desestructuración-de-objetos)
    - [3. Destructuración en Objetos Anidados](#3-destructuración-en-objetos-anidados)
    - [4. Operador de Propagación (Spread Operator) en Arrays](#4-operador-de-propagación-spread-operator-en-arrays)
    - [5. Operador de Propagación en Objetos](#5-operador-de-propagación-en-objetos)
  - [17 - Classes (Clases) en JavaScript](#17---classes-clases-en-javascript)
    - [1. Sintaxis, Instanciación y Valores por Defecto](#1-sintaxis-instanciación-y-valores-por-defecto)
    - [2. Acceso, Modificación y Funciones (Métodos)](#2-acceso-modificación-y-funciones-métodos)
    - [3. Propiedades Privadas](#3-propiedades-privadas)
    - [4. Métodos de Acceso (Getters y Setters)](#4-métodos-de-acceso-getters-y-setters)
    - [5. Herencia y Reutilización de Código](#5-herencia-y-reutilización-de-código)

- [Gestión de Errores](#gestión-de-errores)
  - [18 - Errors and Exceptions (Errores y Excepciones) en JavaScript](#18---errors-and-exceptions-errores-y-excepciones-en-javascript)
    - [1. Captura de Errores (try-catch)](#1-captura-de-errores-try-catch)
    - [2. El Bloque finally](#2-el-bloque-finally)
    - [3. Lanzamiento Manual de Errores (throw)](#3-lanzamiento-manual-de-errores-throw)
    - [4. Capturar Múltiples Tipos de Errores (instanceof)](#4-capturar-múltiples-tipos-de-errores-instanceof)
    - [5. Creación de Excepciones Personalizadas](#5-creación-de-excepciones-personalizadas)

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


## 14 - Functions (Funciones) en JavaScript

Una **Función** es un bloque de código reutilizable y estructurado que realiza una tarea específica o calcula un valor. Se define una sola vez y puede ser ejecutado (o "llamado") en cualquier parte de nuestro programa las veces que sea necesario.

### 1. Declaración e Inicialización Básica

Una función tradicional se declara utilizando la palabra clave `function`, seguida de un nombre único y un bloque de código entre llaves.

```javascript
// Inicialización de una función básica
function myFunc(){
    console.log("Hola función")
}

// Llamamos a la función múltiples veces (usando un bucle)
for (let i = 0; i <=5; i++){
    myFunc()
}
```

### 2. Tipos de Funciones (Parámetros, Anónimas y Arrow)

JavaScript ofrece diferentes formas de estructurar y escribir funciones dependiendo de la necesidad:

* **Con Parámetros**: Permiten pasarle datos de entrada a la función para que trabaje de forma dinámica.
* **Funciones Anónimas**: Funciones que no tienen un nombre propio y se almacenan directamente dentro de una variable.
* **Arrow Functions (Funciones Flecha)**: Una sintaxis moderna y compacta que omite la palabra `function`. Si solo ejecutan una línea, pueden omitir también las llaves `{}`.

```javascript
// Función con parámetros
function myfuncParametros(name){
    console.log(`Holaaa ${name}`)
}
myfuncParametros("Cristopher")

// Funciones anónimas
const myFunc2 = function(name){
    console.log(`Holaaa ${name}`)
}
myFunc2("Alexxandeer")

// Arrow Function tradicional (con llaves)
const myFunc3 = (name) => {
    console.log(`Holaaa ${name}`)
}

// Arrow Function compacta (en una sola línea)
const myFunc4 = (name) => console.log(`Holaaa ${name}`)

myFunc3("Camilo")
myFunc4("breceda")
```

### 3. Parámetros por Defecto

Cuando llamamos a una función y omitimos argumentos, los parámetros toman el valor de `undefined`, lo que puede romper operaciones matemáticas. Para evitarlo, podemos asignarles valores por defecto directamente en la firma de la función.

```javascript
// Problema al omitir parámetros (resultado NaN)
function sum(a, b) {
    console.log(a + b)
}
sum(5, 10) // 15
sum(5)     // NaN (5 + undefined)
sum()      // NaN

// Solución con parámetros por defecto
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}
defaultSum()             // 0
defaultSum(5)            // 5
defaultSum(5, 10)        // 15
defaultSum(undefined, 5) // 5 (undefined activa el valor por defecto)
```

### 4. Retorno de Valores

Las funciones pueden procesar datos y devolver un resultado al flujo principal del programa utilizando la palabra clave `return`. Cuando un `return` se ejecuta, la función finaliza de inmediato.

```javascript
// Retorno de valores
function mult(a, b){
    return a * b
}
let result = mult(3, 5)
console.log(result) // Muestra: 15
```

### 5. Funciones Anidadas y de Orden Superior

* **Funciones Anidadas**: Funciones declaradas dentro de otra función. La función interna está protegida y solo es accesible desde el ámbito de la función externa.
* **Funciones de Orden Superior**: Funciones que reciben otra función como argumento o devuelven una función como resultado.

```javascript
// Funciones anidadas
function extern(){
    console.log("Hola externo")
    function internal(){
        console.log("Interno")
    }
    internal() // Se ejecuta adentro
}
extern()

// Funciones de orden superior
function applyFunc(func, parametro){
    func(parametro)
}
applyFunc(myFunc4, "Funcion de orden superior")
```

### 6. Recorrido de Colecciones con `forEach`

El método `forEach` es una función de orden superior integrada en JavaScript que permite iterar rápidamente sobre los elementos de Arrays, Sets y Maps pasando una función callback (ya sea anónima o tipo flecha).

```javascript
// Definición de las colecciones de datos
const myArray = [1, 2, 3, 4]
const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

// forEach en Array usando función anónima
myArray.forEach(function (value) {
    console.log(value)
})

// forEach en Array usando Arrow Function
myArray.forEach((value) => console.log(value))

// forEach en Set
mySet.forEach((value) => console.log(value))

// forEach en Map (obtiene los valores)
myMap.forEach((value) => console.log(value))
```

### CODIGO

- [Functions JavaScript](./Basic/16-Funciones.js)


## 15 - Objects (Objetos) en JavaScript

Un **Objeto** es una estructura de datos que nos permite almacenar colecciones de datos complejos organizados en pares de **clave-valor** (conocidos como propiedades y métodos). A diferencia de los arrays que usan índices numéricos, los objetos utilizan nombres de propiedades (strings) para organizar y acceder a la información.

### 1. Sintaxis y Creación de un Objeto

Un objeto se crea utilizando llaves `{}` y declarando propiedades dentro de él mediante la estructura `clave: valor`.

```javascript
// Sintaxis de un objeto básico
let persona = {
    name: "Cristopher",
    age: 18,
    alias: "Chino"
}
```

### 2. Acceso y Modificación de Propiedades

JavaScript nos permite interactuar con los datos de un objeto utilizando dos sintaxis diferentes:

* **Notación por punto (`.`)**: Es la forma más común y legible de acceder o modificar propiedades.
* **Notación por corchetes (`[]`)**: Útil cuando el nombre de la propiedad se encuentra dentro de una variable o contiene caracteres especiales.

```javascript
// Acceso a propiedades
console.log(persona.name)     // Notación por punto
console.log(persona["name"])  // Notación por corchetes

// Modificación de propiedades existentes
persona.name = "Alexander"
console.log(persona.name)

persona.age = "37"
console.log(persona.age)

// Agregar nuevas propiedades dinámicamente
persona.email = "cris@gmail.com"
persona["age"] = 37
console.log(persona)
```

### 3. Eliminación de Propiedades

Podemos remover por completo una propiedad de un objeto utilizando el operador `delete`.

```javascript
// Eliminación de una propiedad
delete persona.age
console.log(persona) // El objeto ya no incluye la clave 'age'
```

### 4. Métodos y Anidación de Objetos

* **Métodos**: Son funciones declaradas dentro de un objeto que definen las acciones o comportamientos que este puede realizar.
* **Anidación (Objetos Anidados)**: Un objeto puede contener a otros objetos dentro de sus propiedades para representar estructuras de datos más complejas.

```javascript
// Objeto con un método (función integrada)
let persona2 = {
    name: "Cristopher",
    age : 18,
    alias: "Camilo",
    walk: function(){
        console.log("la persona camina")
    }
}
persona2.walk() // Ejecución del método

// Anidación de objetos
let persona3 = {
    name: "Cristopher",
    age : 18,
    alias: "Camilo",
    walk: function(){
        console.log("la persona camina")
    },
    job: {
        name: "Progamador",
        exp: 15,
        work: function(){
            console.log("la persona trabaja")
        }
    }
}
persona3.job.work() // Acceso al método del objeto anidado
```

### 5. Comparación, Iteración y Constructores Básicos

* **Igualdad**: Al comparar propiedades primitivas se evalúa su valor. Al comparar objetos completos, se evalúa su referencia en memoria (dos objetos con datos idénticos no son iguales si ocupan espacios de memoria distintos).
* **Iteración (`for...in`)**: Estructura de control especial diseñada para recorrer todas las claves de un objeto.
* **Funciones Constructoras**: Una forma clásica en JavaScript para instanciar múltiples objetos con una misma estructura antes de la llegada de las clases de ES6.

```javascript
let persona4 = {
    name: "Cristopher",
    age: 18,
    alias: "Chino"
}

// Comparación de propiedades específicas
console.log(persona.name == persona4.name)

// Iteración de claves y valores con for...in
for (let key in persona4){
    console.log(key + ": " + persona4[key])
}

// Función constructora tradicional (Debería ser una clase moderna)
function Person(name, age) {
    this.name = name
    this.age = age
}

let person5 = new Person("Cristopher", 37)
console.log(person5)
console.log(person5.name)

// Comprobación de tipo de dato
console.log(typeof person5) // Muestra: "object"
console.log(typeof person4) // Muestra: "object"
```

### CODIGO

- [Objects JavaScript](./Basic/18-Objetos.js)

## 16 - Destructuring and Spread (Destructuración y Propagación) en JavaScript

La **Destructuración** es una expresión de JavaScript que permite desempacar valores de arrays o propiedades de objetos en variables distintas de forma concisa. Por otro lado, el **Operador de Propagación (`...`)** (o Spread Operator) permite expandir elementos de un iterable (como un array u objeto) donde se esperan múltiples elementos o propiedades.

### 1. Desestructuración de Arrays (Arreglos)

Permite extraer elementos de un array basándose en su posición secuencial e índices numéricos.

```javascript
let myArray = [1, 2, 3, 4]

// Sintaxis básica de extracción por posición
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0) // 1
console.log(myValue4) // undefined (no existe en el array original)

// Sintaxis con valores predeterminados (evita los valores undefined)
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue9) // 0 (toma el valor por defecto)

// Ignorar elementos dejando espacios vacíos entre comas
let [myValue10, , , myValue13] = myArray
console.log(myValue10) // 1
console.log(myValue13) // 4
```

### 2. Desestructuración de Objetos

Permite extraer propiedades de un objeto utilizando directamente el nombre de sus claves. El orden de las variables no importa.

```javascript
let persona = {
    name: "cristopher",
    age : 18,
    alias : "chino"
}

// Sintaxis básica usando las mismas llaves de la propiedad
let { name, age, alias } = persona
console.log(name)  // "cristopher"
console.log(alias) // "chino"

// Sintaxis con valores predeterminados e intento de uso de claves incorrectas
let { nombre2, edad2, alias2, email = "cristo@gmail.com" } = persona
console.log(nombre2) // undefined (la propiedad "nombre2" no existe en el objeto original)
console.log(email)   // "cristo@gmail.com" (toma el valor por defecto)

// Sintaxis asignando nuevos nombres a las variables extraídas (claveOriginal: variableNueva)
let { alias: alias3, name : name3, age: age3 } = persona
console.log(name3)  // "cristopher"
console.log(alias3) // "chino"
```

### 3. Destructuración en Objetos Anidados

Para extraer propiedades de objetos que se encuentran dentro de otros objetos, se debe seguir la ruta de la estructura declarando la anidación durante el desempaque.

```javascript
let persona3 = {
    name : "Cristopher",
    age : 18,
    alias : "Chino",
    walk: function () { console.log("La persona camina") },
    job : {
        name: "Estudiante, próximamente Ing",
        exp: 1,
        work: function () { console.log(`la persona de ${this.age} años de experiencia trabaja.`) }
    }
}

// Extracción de propiedad interna del objeto anidado 'job'
let { name: name4, job: { name : jobName } } = persona3
console.log(name4)   // "Cristopher"
console.log(jobName) // "Estudiante, próximamente Ing"
```

### 4. Operador de Propagación (Spread Operator) en Arrays

El operador de propagación (`...`) permite desempaquetar, duplicar y combinar elementos de arreglos de manera rápida sin modificar los valores originales.

```javascript
// Agregar elementos expandiendo el array original
let myArray2 = [...myArray, 5, 6]
console.log(myArray2) // [1, 2, 3, 4, 5, 6]

// Crear una copia exacta independiente en memoria
let myArray3 = [...myArray]
console.log(myArray3) // [1, 2, 3, 4]

// Combinación o concatenación de múltiples arrays en uno nuevo
let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)
```

### 5. Operador de Propagación en Objetos

De la misma manera que con los arrays, permite clonar las propiedades de un objeto y añadir o actualizar claves en una sola línea.

```javascript
// Agregar propiedades o modificar un objeto en una copia nueva
let persona4 = { ...persona, email: "cris@gmail.com" }
console.log(persona4)

// Crear una copia idéntica del objeto
let persona5 = { ...persona }
console.log(persona5)
```

### CODIGO

- [Destructuración y Propagación](./Basic/20-Desestructuración-y-propagación.js)


## 17 - Classes (Clases) en JavaScript

Una **Clase** es una plantilla o molde de programación orientada a objetos (POO) que se utiliza para crear múltiples objetos con la misma estructura y comportamiento. Introducidas en ES6, las clases en JavaScript encapsulan datos (propiedades) y código para manipularlos (métodos), funcionando como una envoltura sobre el sistema de prototipos tradicional.

### 1. Sintaxis, Instanciación y Valores por Defecto

Para definir una clase utilizamos la palabra clave `class` acompañada de un método especial llamado `constructor`, el cual se ejecuta automáticamente al crear una nueva instancia con el operador `new`.

```javascript
class Person {
    constructor (name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

// Instanciación de objetos usando la sintaxis 'new'
let person = new Person("Cris", 28, "el ing")
let person2 = new Person("Sofia", 12, "soficita")

console.log(person)
console.log(typeof person) // Muestra: "object"

// Clases con parámetros por defecto en el constructor
class DefaultPerson {
    constructor(name = "sin nombre", age = 0, alias = "sin alias"){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}
let person3 = new DefaultPerson("Cami", 34)
console.log(person3) // El alias tomará "sin alias" por defecto
```

### 2. Acceso, Modificación y Funciones (Métodos)

Al igual que con los objetos literales, podemos leer o reescribir propiedades utilizando la notación por punto o corchetes, así como invocar las funciones definidas dentro del cuerpo de la clase.

```javascript
// Acceso y modificación de propiedades
console.log(person3.alias)
console.log(person3["alias"])
person3.alias = "PEDRO" // Modificación del valor

// Declaración y uso de métodos en una clase
class PersonaWithMethod {
    constructor(name , age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    walk(){
        console.log("La persona camina. ")
    }
}

let person4 = new PersonaWithMethod("Cristopher", 12, "El chinote")
person4.walk() // Ejecución del método
```

### 3. Propiedades Privadas

JavaScript permite proteger u ocultar propiedades para que no puedan ser leídas ni modificadas directamente desde fuera de la clase. Esto se logra anteponiendo el símbolo **`#`** al nombre del atributo (tanto al declararlo al inicio de la clase como dentro del constructor).

```javascript
class PrivatePerson {
    #bank // Declaración obligatoria de la propiedad privada

    constructor (name, age , alias , bank){
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }
    pay(){
        this.#bank // Accesible únicamente desde dentro de la clase
    } 
}
let person5 = new PrivatePerson("Chikis ", 21, "Angry", "DSFDFG13454TGDF")

/* Intentar acceder o cambiar la propiedad privada causará un error:
console.log(person5.bank) 
person5.bank = "new bank" */
```

### 4. Métodos de Acceso (Getters y Setters)

Los **Getters (`get`)** y **Setters (`set`)** permiten interceptar la lectura y escritura de propiedades (comúnmente privadas), actuando como puentes controlados para validar o transformar la información simulando que accedemos a un atributo normal.

```javascript
class GetSetPerson{
    #name; #age; #alias; #bank;

    constructor(name, age, alias, bank){
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
    }
    // Getter: Devuelve el valor simulando ser una propiedad de lectura
    get name(){
        return this.#name
    }
    // Setter: Asigna un nuevo valor simulando ser una asignación de propiedad
    set bank(bank){
        this.#bank = bank;
    }
    get bank(){
        return this.#bank
    }
}
let person6 = new GetSetPerson("Angry", 21, "chikis", "ERTYUIO")
console.log(person6.name) // Llama al método 'get name()' sin usar paréntesis

person6.bank = "new ASDFGHJK" // Llama al método 'set bank()' de manera implícita
console.log("Valor cambiado usando get y set :", person6.bank)
```

### 5. Herencia y Reutilización de Código

La herencia permite crear una clase hija a partir de una clase padre utilizando la palabra clave `extends`. La clase hija hereda todas las propiedades y métodos del padre, pudiendo añadir los suyos propios o usar `super()` para invocar y pasarle parámetros al constructor del padre.

```javascript
// Clase Padre (Base)
class Animal {
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("El animal emite un sonido genérico")
    }
}

// Clase Hija que extiende de Animal y redefine comportamientos (Polimorfismo)
class Dog extends Animal{
    sound(){
        console.log("!Guaaag!") // Sobrescribe el método del padre
    }
    run(){
        console.log("El perro corre")
    }
    love(){
        console.log("El perro quiere sentirse amado")
    }
}

// Clase Hija que añade nuevas propiedades llamando al constructor padre con super()
class Fish extends Animal{
    constructor(name, size){
        super(name) // Invoca obligatoriamente al constructor de Animal
        this.size = size
    }
    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog("CrisDog")
myDog.run()
myDog.sound() // Imprime "!Guaaag!" en lugar del mensaje genérico
myDog.love()
```

### CODIGO

- [Clases JavaScript](./Basic/22-Clases.js)


## 18 - Errors and Exceptions (Errores y Excepciones) en JavaScript

Una **Excepción** es un error que ocurre durante la ejecución de un programa (tiempo de ejecución) e interrumpe el flujo normal de las instrucciones. JavaScript nos proporciona mecanismos estructurados para capturar estos fallos de forma segura, evitando que toda la aplicación colapse.

### 1. Captura de Errores (`try-catch`)

El bloque `try` envuelve el código que podría fallar. Si ocurre un error, la ejecución de ese bloque se detiene inmediatamente y el control pasa al bloque `catch`.

```javascript
let myObject

// try-catch básico
try {
    // Código que se intenta ejecutar
    console.log(myObject.email) // Lanza error porque myObject es undefined
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Se ejecuta únicamente si algo falla en el try
    console.log("Se ha producido un error")
}

// Captura del objeto de error para acceder a sus detalles (.message)
try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}
```

### 2. El Bloque `finally`

El bloque `finally` se añade al final de una estructura `try-catch` y contiene código que **siempre se ejecutará**, sin importar si el programa se completó con éxito o si se capturó una excepción.

```javascript
try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Este código se ejecutará siempre !!")
}
```

### 3. Lanzamiento Manual de Errores (`throw`)

Podemos forzar el lanzamiento de una excepción de forma manual utilizando la palabra clave `throw`, deteniendo el flujo del programa a menos que sea capturado por un `try-catch`. Se suelen lanzar objetos del sistema como `Error`, `TypeError`, entre otros.

```javascript
// Ejemplo de lanzamiento manual básico
// throw new Error("Se ha producido un error")

function sumIntegers(a, b) {
    // Lanzar un TypeError si los argumentos no son de tipo 'number'
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esa operación solo suma números")
    }
    // Lanzar un Error genérico si los números no son enteros
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma números ")
    }
    // Lanzar un error personalizado si alguno de los números es cero
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumaaar", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers("5, 10")) // Lanza excepción por el string
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}
```

### 4. Capturar Múltiples Tipos de Errores (`instanceof`)

Dentro de un único bloque `catch`, podemos identificar qué clase de error ocurrió utilizando el operador `instanceof` para reaccionar de forma específica según el tipo de fallo.

```javascript
try {
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error: ", error.message)
    }
}
```

### 5. Creación de Excepciones Personalizadas

Podemos extender la clase nativa `Error` mediante herencia (`extends`) para construir nuestros propios tipos de errores con propiedades y métodos adicionales exclusivos para nuestra aplicación.

```javascript
// Creación de una clase de error propia
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message) // Pasa el mensaje al constructor de la clase Error
        this.a = a
        this.b = b
    }
    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10)) // Detonará nuestra excepción personalizada
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    // Validación de seguridad para asegurar que el método existe antes de invocarlo
    if (error instanceof SumZeroIntegerError) {
        error.printNumbers()
    }
}
```

### CODIGO

- [Exceptions JavaScript](./Basic/24-Expeciones.js)


## 19 - Console Methods (Métodos de la Consola) en JavaScript

El objeto **`console`** en JavaScript proporciona acceso a la consola de depuración del navegador o del entorno de ejecución (como Node.js). Aunque el método más popular es `console.log()`, existen múltiples funciones integradas que nos permiten dar formato a los mensajes, agrupar información, medir tiempos de ejecución y rastrear el flujo de nuestro código de manera profesional.

### 1. Mensajes Informativos y de Estado

Permiten enviar mensajes a la consola clasificados por su nivel de importancia o severidad, facilitando el filtrado en las herramientas de desarrollo.

* **`console.log()`**: Imprime un mensaje general de depuración.
* **`console.error()`**: Muestra un mensaje de error crítico, usualmente resaltado en color rojo.
* **`console.warn()`**: Emite un mensaje de advertencia o precaución, usualmente en color amarillo.
* **`console.info()`**: Muestra información adicional o de carácter informativo técnico.

```javascript
// log
console.log("Hola Java Script")

// Error
console.error("Esto es un mensaje de Error")
console.error("Error al intentar quererla ")

// Warn
console.warn("Este es un mensaje de advertncia")

// info
console.info("Este es un mensaje de informacion adicional")
```

### 2. Visualización Estructurada (`table` y `group`)

* **`console.table()`**: Transforma colecciones de datos complejas (como matrices bidimensionales o arrays de objetos) en una tabla interactiva muy fácil de leer.
* **`console.group()` y `console.groupEnd()`**: Agrupa un conjunto de logs bajo un bloque desplegable, organizando la salida de la consola por categorías.

```javascript
// Table con una matriz bidimensional (Array de Arrays)
let data = [
    ["Cris", 18 ],
    ["Fernanda", 21]
]
console.table(data)

// Table con un Array de Objetos (crea columnas por propiedad)
data = [
    {name : "Cris", age: 18 },
    {name : "Fernanda", age: 21}
]
console.table(data)

// group: Agrupación jerárquica de logs relacionados
console.group("Usuarios")
console.log("Nombre : Cristopher")
console.log("Edad: 37")
console.groupEnd() // Cierra el grupo actual
```

### 3. Temporizadores de Rendimiento (`time` y `timeEnd`)

Permiten medir con precisión cuántos milisegundos tarda en ejecutarse un bloque de código. Se inicia con `console.time("etiqueta")` y se finaliza con `console.timeEnd("etiqueta")` usando exactamente el mismo identificador. Se pueden solapar múltiples contadores en paralelo.

```javascript
// time: Iniciando el temporizador 2
console.time("Tiempo de ejecucion 2")

for (let i = 0; i < 1000; i++){}

// Iniciando el temporizador 1 mientras el 2 sigue corriendo
console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {}

// Finaliza y muestra la duración total del temporizador 2
console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {}

// Finaliza y muestra la duración total del temporizador 1
console.timeEnd("Tiempo de ejecución 1")
```

### 4. Diagnóstico, Contadores y Rastreo (`assert`, `count` y `trace`)

* **`console.assert()`**: Escribe un mensaje de error en la consola **únicamente si la condición evaluada es falsa (`false`)**. Si es verdadera, no hace nada.
* **`console.count()`**: Muestra la cantidad de veces que se ha invocado esa línea con una etiqueta específica. Se puede reiniciar a cero con `console.countReset()`.
* **`console.trace()`**: Muestra la pila de llamadas (*stack trace*) que se ejecutaron hasta llegar a ese punto exacto, indicando qué función llamó a cuál.

```javascript
// assert: Solo enviará error si eres menor de 18 años
let age = 17
console.assert(age >= 18, "El usario debe ser mayor a 18 años")

// count: Registro y conteo de incidencias
console.count("click") // click: 1
console.count("click") // click: 2
console.count("click") // click: 3
console.countReset("click") // Reinicia el contador de "click"
console.count("click") // click: 1

// trace: Seguimiento de la pila de ejecución de funciones
function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecución") // Muestra que fue llamada por funcA()
}

funcA()
```

### 5. Limpieza de Consola

* **`console.clear()`**: Borra por completo todo el historial acumulado en la pantalla de la consola de depuración.

```javascript
// Limpiar la pantalla de la consola
// console.clear()
```

### CODIGO

- [Console Methods JavaScript](./Basic/26-Console-methods.js)
