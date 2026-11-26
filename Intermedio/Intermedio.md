# Curso Intermedio de JavaScript

Bienvenido a este repositorio de práctica y documentación del **Curso Intermedio de JavaScript**. Aquí encontrarás los ejercicios desarrollados a lo largo del curso, acompañados de explicaciones claras, conceptos clave y los fragmentos de código más esenciales para dominar las características avanzadas del lenguaje.

<details open>
<summary><b>Índice General (Tabla de Contenido)</b></summary>

<!--Funciones Avanzadas-->

- [01 - Advanced Functions (Funciones Avanzadas) en JavaScript](#01---advanced-functions-funciones-avanzadas-en-javascript)
  - [1. Ciudadanos de Primera Clase (*First-Class Citizens*)](#1-ciudadanos-de-primera-clase-first-class-citizens)
  - [2. Arrow Functions Avanzadas (Retorno Implícito y `this` Léxico)](#2-arrow-functions-avanzadas-retorno-implícito-y-this-léxico)
  - [3. IIFE (Expresión de Función Invocada Inmediatamente)](#3-iife-expresión-de-función-invocada-inmediatamente)
  - [4. Parámetros Rest y Operador Spread (`...`)](#4-parámetros-rest-y-operador-spread-)
  - [5. Closures (Clausuras)](#5-closures-clausuras)
  - [6. Recursividad](#6-recursividad)
  - [7. Funciones Parciales y Currying](#7-funciones-parciales-y-currying)
  - [8. Callbacks](#8-callbacks)

<!--Estructuras Avanzadas-->
- [02 - Advanced Structures (Estructuras Avanzadas) en JavaScript](#02---advanced-structures-estructuras-avanzadas-en-javascript)
  - [1. Arrays Avanzados: Métodos Funcionales (`forEach`, `map` y `filter`)](#1-arrays-avanzados-métodos-funcionales-foreach-map-y-filter)
  - [2. Arrays Avanzados: Manipulación (`flat` y `flatMap`)](#2-arrays-avanzados-manipulación-flat-y-flatmap)
  - [3. Arrays Avanzados: Ordenación (`sort` y `reverse`)](#3-arrays-avanzados-ordenación-sort-y-reverse)
  - [4. Arrays Avanzados: Búsqueda (`includes`, `find` y `findIndex`)](#4-arrays-avanzados-búsqueda-includes-find-y-findindex)
  - [5. Sets Avanzados: Operaciones de Conjuntos y Conversión](#5-sets-avanzados-operaciones-de-conjuntos-y-conversión)
  - [6. Maps Avanzados: Iteración y Conversión](#6-maps-avanzados-iteración-y-conversión)

<!--Objectos Avanzado-->
- [03 - Advanced Objects and Classes (Objetos Avanzados y Prototipos) en JavaScript](#03---advanced-objects-and-classes-objetos-avanzados-y-prototipos-en-javascript)
  - [1. Prototipos (`Object.getPrototypeOf`)](#1-prototipos-objectgetprototypeof)
  - [2. Herencia Prototípica (`Object.create`)](#2-herencia-prototípica-objectcreate)
  - [3. Funciones Constructoras y Métodos en el Prototipo](#3-funciones-constructoras-y-métodos-en-el-prototipo)
  - [4. Métodos Avanzados de Objetos (`assign`, `keys`, `values` y `entries`)](#4-métodos-avanzados-de-objetos-assign-keys-values-y-entries)


</details>


## 01 - Advanced Functions (Funciones Avanzadas) en JavaScript

En JavaScript, las funciones son **ciudadanos de primera clase** (*first-class citizens*), lo que significa que pueden tratarse como cualquier otro valor: asignarse a variables, pasarse como argumentos o devolverse desde otras funciones. Dominar sus patrones avanzados permite escribir código más modular y reutilizable.

### 1. Ciudadanos de Primera Clase (*First-Class Citizens*)

Una función puede almacenarse en una constante, enviarse como parámetro a otra función o ser el valor de retorno de esta.

```javascript
const greet = function(name){
    console.log(`hola ${name}`)
}

// Pasar una función como argumento
function processGreeting(greetFunction, name){
    greetFunction(name)
}

// Retornar una función
function returnGreeting(){
    return greet
}

processGreeting(greet, "Alexander")
const greet2 = returnGreeting()
greet2("Fernanda")
```

### 2. Arrow Functions Avanzadas (Retorno Implícito y `this` Léxico)

* **Retorno implícito**: Si el cuerpo tiene una sola expresión, se omiten las llaves `{}` y el `return`.
* **`this` léxico**: Las *arrow functions* no crean su propio contexto `this`, sino que heredan el del ámbito exterior donde fueron definidas.

```javascript
// Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(4, 5)) // 20

// Comportamiento de 'this'
const handler = {
    name: "Cristopher",
    greeting: function(){
        console.log(`Hola, ${this.name}`) // "Hola, Cristopher"
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`) // "Hola, undefined"
    }
}
```

### 3. IIFE (Expresión de Función Invocada Inmediatamente)

Es una función que se define y se ejecuta al instante, útil para aislar variables y evitar contaminar el ámbito global.

```javascript
// IIFE clásico
(function(){
    console.log("IIFE clásico")
})();

// IIFE con arrow function
(() => {
    console.log("IIFE con arrow function")
})();
```

### 4. Parámetros Rest y Operador Spread (`...`)

* **Parámetros Rest (`...args`)**: Agrupa un número indefinido de argumentos en un único **array**.
* **Operador Spread (`...array`)**: Expande los elementos de un array en argumentos individuales.

```javascript
// Rest: agrupa argumentos en un array
function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sum(1, 2, 3, 4, 5)) // 15

// Spread: desempaqueta un array en argumentos
const numbers =
function sumWithSpread(a, b, c){
    return a + b + c
}
console.log(sumWithSpread(...numbers)) // 6
```

### 5. Closures (Clausuras)

Ocurre cuando una función interna recuerda y mantiene el acceso a las variables de su función exterior, incluso después de que esta haya terminado de ejecutarse.

```javascript
function createCounter(){
    let counter = 0 // Estado privado persistente
    return function(){
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter() // Contador: 1
counter() // Contador: 2
```

### 6. Recursividad

Técnica en la que una función se llama a sí misma hasta cumplir un **caso base** (condición de parada) para evitar bucles infinitos.

```javascript
function factorial(n){
    if (n <= 1) return 1 // Caso base
    return n * factorial(n - 1) // Llamada recursiva
}

console.log(factorial(5)) // 120
```

### 7. Funciones Parciales y Currying

* **Aplicación Parcial**: Fija uno o varios argumentos y devuelve una función que espera los restantes.
* **Currying**: Transforma una función de múltiples argumentos en una secuencia anidada de funciones de **un solo argumento**.

```javascript
// Función Parcial
function partialSum(a){
    return function(b, c){
        return sum(a, b, c)
    }
}
const sumWith = partialSum(4)
console.log(sumWith(2, 3)) // 9

// Currying
function currySum(a){
    return (b) => (c) => sum(a, b, c)
}
console.log(currySum(1)(2)(3)) // 6
```

### 8. Callbacks

Es una función que se pasa como argumento a otra para ejecutarse una vez que se complete una tarea.

```javascript
function processData(data, callback){
    const result = sum(...data)
    callback(result)
}

// Usando una función nombrada
function showResult(result){
    console.log(`Resultado: ${result}`)
}
processData(, showResult)

// Usando una arrow function en línea
processData(, (result) => console.log(`En línea: ${result}`))
```

### CODIGO

- [Advanced Functions JavaScript](00-advanced-functions.js)


## 02 - Advanced Structures (Estructuras Avanzadas) en JavaScript

JavaScript ofrece métodos avanzados para transformar, filtrar y consultar **Arrays**, así como operaciones de conjuntos y conversiones entre **Sets**, **Maps** y **Objetos** para manipular colecciones de datos de forma declarativa y eficiente.

### 1. Arrays Avanzados: Métodos Funcionales (`forEach`, `map` y `filter`)

Permiten iterar y transformar colecciones sin modificar el arreglo original:

* **`forEach()`**: Ejecuta una función por cada elemento del array (no retorna un nuevo array).
* **`map()`**: Transforma cada elemento y devuelve un nuevo array con los resultados.
* **`filter()`**: Filtra y devuelve un nuevo array únicamente con los elementos que cumplen una condición.

```javascript
let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(el => console.log(el))            // Imprime cada número
let doubled = numbers.map(el => el * 2)           // [2, 4, 6, 8, 10, 12]
let evens = numbers.filter(el => el % 2 === 0)    // [2, 4, 6]
```

### 2. Arrays Avanzados: Manipulación (`flat` y `flatMap`)

* **`flat(profundidad)`**: Aplana sub-arrays anidados hasta el nivel de profundidad indicado.
* **`flatMap()`**: Aplica una función de mapeo a cada elemento y aplana el resultado un nivel automáticamente.

```javascript
// flat: aplana niveles de anidación
let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray.flat(3)) // [1, 2, 3, 4]

// flatMap: mapea y aplana en un solo paso
let phrases = ["Hola mundo", "Adiós JS"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words) // ["Hola", "mundo", "Adiós", "JS"]
```

### 3. Arrays Avanzados: Ordenación (`sort` y `reverse`)

* **`sort()`**: Ordena los elementos alfabéticamente por defecto. Para números, requiere una función comparadora `(a, b) => a - b`.
* **`reverse()`**: Invierte el orden actual de los elementos del array.

```javascript
// Ordenación numérica ascendente
let unsorted = [3, 4, 1, 6, 10]
let sorted = unsorted.sort((a, b) => a - b) // [1, 3, 4, 6, 10]

// Invertir el orden
sorted.reverse() // [10, 6, 4, 3, 1]
```

### 4. Arrays Avanzados: Búsqueda (`includes`, `find` y `findIndex`)

* **`includes()`**: Comprueba si un valor existe en el array (`true` o `false`).
* **`find()`**: Devuelve el **primer elemento** que cumple con la condición dada.
* **`findIndex()`**: Devuelve el **índice** del primer elemento que cumple con la condición.

```javascript
const nums = [10, 6, 4, 3, 1]

console.log(nums.includes(4))                       // true
console.log(nums.find(el => el % 2 === 0))          // 10 (primer par)
console.log(nums.findIndex(el => el % 2 === 1))     // 3 (índice del primer impar)
```

### 5. Sets Avanzados: Operaciones de Conjuntos y Conversión

Combinando `Set` con el operador *Spread* (`...`) y `filter()`, se pueden eliminar duplicados y realizar operaciones matemáticas de conjuntos:

```javascript
// Eliminar duplicados de un array
let cleanArray = [...new Set([1, 2, 2, 3, 3])] // [1, 2, 3]

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])

// Operaciones de conjuntos
const union = new Set([...setA, ...setB])                                     // Set {1, 2, 3, 4, 5}
const intersection = new Set([...setA].filter(el => setB.has(el)))            // Set {2, 3}
const difference = new Set([...setA].filter(el => !setB.has(el)))             // Set {1}

// Conversión e iteración
const arrayFromSet = [...setA] // [1, 2, 3]
setA.forEach(el => console.log(el))
```

### 6. Maps Avanzados: Iteración y Conversión

Los objetos `Map` pueden recorrerse directamente con `forEach` y convertirse fácilmente en **Arrays** u **Objetos literales** (y viceversa):

```javascript
let myMap = new Map([
    ["name", "Cristopher"],
    ["age", 19]
])

// Iteración (recibe primero el valor y luego la clave)
myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// Conversiones
const arrayFromMap = Array.from(myMap)               // [["name", "Cristopher"], ["age", 19]]
const objectFromMap = Object.fromEntries(myMap)      // { name: "Cristopher", age: 19 }
const mapFromObject = new Map(Object.entries(objectFromMap)) // Map { "name" => "Cristopher", ... }
```

### CODIGO

- [Advanced Structures JavaScript](02-advanced-structures.js)


## 03 - Advanced Objects and Classes (Objetos Avanzados y Prototipos) en JavaScript

A diferencia de otros lenguajes basados en clases tradicionales, JavaScript utiliza un modelo de **herencia prototípica**. Cada objeto posee un enlace interno hacia otro objeto llamado **prototipo**, del cual hereda propiedades y métodos, además de contar con métodos estáticos en `Object` para fusionar e inspeccionar sus datos.

### 1. Prototipos (`Object.getPrototypeOf`)

Todo objeto en JavaScript tiene un prototipo base al que se puede acceder mediante `Object.getPrototypeOf()`. Además, los objetos son dinámicos y permiten agregar nuevos métodos o propiedades en tiempo de ejecución.

```javascript
let person = {
    name: "Cristopher",
    age: 19,
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

// Obtener el prototipo del objeto
console.log(Object.getPrototypeOf(person))

// Agregar un método dinámicamente al objeto
person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}
person.sayAge() // "Tengo 19 años"
```

### 2. Herencia Prototípica (`Object.create`)

El método **`Object.create(prototipo)`** crea un nuevo objeto utilizando un objeto existente como su prototipo. El nuevo objeto hereda todas las propiedades y métodos del padre, pero sus propias modificaciones no afectan al objeto original.

```javascript
// 'programmer' hereda las propiedades y métodos de 'person'
let programmer = Object.create(person)
programmer.language = "JavaScript"

console.log(programmer.age)      // 19 (heredado de person)
console.log(programmer.language) // "JavaScript" (propio de programmer)
console.log(person.language)     // undefined (no afecta al padre)
programmer.greet()               // "Hola, soy Cristopher"
```

### 3. Funciones Constructoras y Métodos en el Prototipo

Antes de las clases de ES6, se utilizaban funciones constructoras junto con `new` para crear instancias. Al definir métodos directamente sobre `Constructor.prototype`, todas las instancias comparten una única copia del método en memoria.

```javascript
function Person(name, age){
    this.name = name
    this.age = age
}

// Método compartido por todas las instancias en el prototipo
Person.prototype.greet = function(){
    console.log(`Hola soy ${this.name}`)
}

let newPerson = new Person("Cristopher", 19)
newPerson.greet() // "Hola soy Cristopher"
```

### 4. Métodos Avanzados de Objetos (`assign`, `keys`, `values` y `entries`)

El objeto global `Object` proporciona utilidades estáticas para combinar objetos e inspeccionar su estructura en forma de arreglos:

* **`Object.assign(destino, fuente)`**: Copia las propiedades de uno o más objetos fuente dentro de un objeto destino.
* **`Object.keys()`**: Devuelve un array con todas las **claves** (nombres de propiedades) del objeto.
* **`Object.values()`**: Devuelve un array con todos los **valores** del objeto.
* **`Object.entries()`**: Devuelve un array de pares `[clave, valor]`.

```javascript
let personCore = { name: "Brais" }
let personDetails = { age: 19, alias: "Cristopher" }

// Fusionar objetos en uno solo
let fullPerson = Object.assign(personCore, personDetails)

console.log(Object.keys(fullPerson))    // ["name", "age", "alias"]
console.log(Object.values(fullPerson))  // ["Brais", 19, "Cristopher"]
console.log(Object.entries(fullPerson)) // [["name", "Brais"], ["age", 19], ["alias", "Cristopher"]]
```

### CODIGO

- [Advanced Objects and Prototypes JavaScript](04-advanced-objects.js)
