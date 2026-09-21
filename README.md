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