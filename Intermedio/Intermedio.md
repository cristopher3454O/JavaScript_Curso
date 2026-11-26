# Curso Intermedio de JavaScript

Bienvenido a este repositorio de práctica y documentación del **Curso Intermedio de JavaScript**. Aquí encontrarás los ejercicios desarrollados a lo largo del curso, acompañados de explicaciones claras, conceptos clave y los fragmentos de código más esenciales para dominar las características avanzadas del lenguaje.

<details open>
<summary><b>Índice General (Tabla de Contenido)</b></summary>

- [01 - Advanced Functions (Funciones Avanzadas) en JavaScript](#01---advanced-functions-funciones-avanzadas-en-javascript)
  - [1. Ciudadanos de Primera Clase (*First-Class Citizens*)](#1-ciudadanos-de-primera-clase-first-class-citizens)
  - [2. Arrow Functions Avanzadas (Retorno Implícito y `this` Léxico)](#2-arrow-functions-avanzadas-retorno-implícito-y-this-léxico)
  - [3. IIFE (Expresión de Función Invocada Inmediatamente)](#3-iife-expresión-de-función-invocada-inmediatamente)
  - [4. Parámetros Rest y Operador Spread (`...`)](#4-parámetros-rest-y-operador-spread-)
  - [5. Closures (Clausuras)](#5-closures-clausuras)
  - [6. Recursividad](#6-recursividad)
  - [7. Funciones Parciales y Currying](#7-funciones-parciales-y-currying)
  - [8. Callbacks](#8-callbacks)

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
