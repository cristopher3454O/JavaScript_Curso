// 1. Crea una función que reciba dos números y devuelva su suma
// Aplicado: Arrow function en una sola línea (retorno implícito)
const suma = (a = 0, b = 0) => a + b;

console.log("Suma del 3 y 5: " + suma(3, 5));


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
// Aplicado: Arrow function, parámetro por defecto, y Math.max con el operador Spread (...)
let numeros = [1,2,3,4,5,6,6] // Corregida la doble coma

const regresarMayor = (lista = []) => Math.max(...lista);

console.log("El numero mayor del Array: " + regresarMayor(numeros));


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
// Aplicado: Arrow function y método de orden superior .filter() para contar
const devolverVocales = (palabra = "") => {
    const vocales = ["a", "e", "i", "o", "u"];
    // Convertimos la palabra en array de letras y filtramos solo las que sean vocales
    return palabra.toLowerCase().split("").filter(letra => vocales.includes(letra)).length;
};

let palabra = "cristopher";
console.log("Cantidad de vocales: " + devolverVocales(palabra));


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
// Aplicado: Arrow function y método de orden superior .map() en una sola línea
const devolverMayusculas = (lista = []) => lista.map(texto => texto.toUpperCase());

let minisculas = ["sf", "hola", "emh", "camote"];
console.log(devolverMayusculas(minisculas));


// 5. Crea una función que reciba un número y devuelva true si es par (corregido de primosPares)
// Aplicado: Arrow function concisa en una sola línea
const esPar = numero => numero % 2 === 0;

console.log("¿Es par el 5?: " + esPar(5));


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// Aplicado: Arrow function combinando .filter(), .includes() y un Set para evitar duplicados
const sumarArrayComun = (lista1 = [], lista2 = []) => {
    const comunes = lista1.filter(elemento => lista2.includes(elemento));
    return [...new Set(comunes)]; // Elimina los repetidos limpiamente
};

let lista1 = [3, 3, 4, "meh", "wow"];
let lista2 = [3, 7, 2, "meh"];
console.log(sumarArrayComun(lista1, lista2));


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
// Aplicado: Arrow function y el método de orden superior .reduce() junto a nuestra función esPar
const sumaPares = (lista = []) => {
    return lista.reduce((acumulador, numero) => esPar(numero) ? acumulador + numero : acumulador, 0);
};

let numerosSuma = [1,2,3,4,4,6,46,5,65]
console.log("Suma de pares: " + sumaPares(numerosSuma));


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
// Aplicado: Arrow function y método de orden superior .map()
const elevados = (lista = []) => lista.map(numero => numero ** 2);

let numerosBase = [1,2,3,4,5,6,7,8,9]
console.log(elevados(numerosBase));


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las letras en orden inverso
// Aplicado: Arrow function usando métodos encadenados de arrays (.split, .reverse, .join)
const inversoCadena = (texto = "") => texto.split("").reverse().join("");

console.log(inversoCadena("texto"));
