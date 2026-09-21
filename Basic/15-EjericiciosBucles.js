
// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <= 100; i++){
    suma+=i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++){
    if (i % 2 ===  0 ){
        console.log(i)
    }

}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myNombres = ["Cristopher", "Camilo", "Sofia", "Renata", "Jose"]
for (let valor of myNombres){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let myCadena = "cuentame"
let sumaVocales = 0
for (let valor of myCadena){
    let letra = valor.toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        sumaVocales++ }
}
console.log(`El total de vocales de la palabra ${myCadena} es = ${sumaVocales}`)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let multiplicacion = 1
let myNumeros = [1,2,3,4,5,6,7,8,9,1,2,4,6,7]
for (let valor of myNumeros){
    multiplicacion*=valor
}
console.log(multiplicacion)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i <= 10; i++){
    console.log(`${i} x 5 = ${i*5}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let CadenaNueva = "INVIERTEME"
let cadenaInvertida = ""
for (let i = 0; i < CadenaNueva.length; i++){

    cadenaInvertida += CadenaNueva.charAt(CadenaNueva.length -i-1)
    
}

console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci  = [0,1]

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci); 


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let misNumeros = [1,2,3,4,5,4,64,435,2,5,45,35]
let mayoresA10 = []; 

for (let numero of misNumeros) {
    if (numero > 10) {
        mayoresA10.push(numero); // Agrega el número al final del nuevo array
    }
}

console.log(mayoresA10); 
