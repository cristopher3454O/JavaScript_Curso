// 1. Crea una función que retorne a otra función
console.log(" 1. Crea una función que retorne a otra función")

function saludoMagico(saludo){
    return function(nombre){
        return `${saludo} ${nombre}`
    }
}
const saludo = saludoMagico("Holaaaaa")
console.log(saludo("Fernanda"))

console.log()


// 2. Implementa una función currificada que multiplique 3 números
console.log("2. Implementa una función currificada que multiplique 3 números")

function mult(a,b,c){
    return a * b * c
}

function multiplicacionCurry(a){
    return function (b){
        return function (c){
            return mult(a,b,c)
        }
    }
}

console.log(multiplicacionCurry(4)(4)(4))
console.log()

// 3. Desarrolla una función recursiva que calcule 
// la potencia de un número elevado a un exponente
console.log("3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente")

function exponente(base, exp){
    if (exp === 0){
        return 1;
    } 
    return base * exponente(base, exp -1)
    
}
console.log(exponente(3,4))
console.log()

// 4. Crea una función createCounter()
//  que reciba un valor inicial y retorne
// un objeto con métodos para increment(),
//  decrement() y getValue(), utilizando un 
// closure para mantener el estado

console.log(" 4. Crea una función createCounter()\n" +
            "que reciba un valor inicial y retorne\n" +
            "un objeto con métodos para increment(),\n" +
            "decrement() y getValue(), utilizando un\n" +
            "closure para mantener el estado");

            console.log()

function createCounter(valorInicial){
    let Contador = valorInicial
    return {
        increment : function(){
            Contador++;
            return console.log("Incremento:",this.getValue())

        },
        decrement : function(){
            Contador--;
            return console.log("Decremento:",this.getValue())
        },
        getValue : function(){
            return Contador;
        },
        reset : function(){
            return Contador = valorInicial;

        }
    }
}
let ContadorNuevo = createCounter(10);

ContadorNuevo.increment()
ContadorNuevo.decrement()
ContadorNuevo.decrement()
ContadorNuevo.decrement()
console.log("Valor hasta el momento ",ContadorNuevo.getValue())
console.log("Valor restablecido de nuevo: ",ContadorNuevo.reset())
    


console.log()
console.log("5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier")

// 5. Crea una función sumManyTimes(multiplier, ...numbers)
//  que primero sume todos los números 
// (usando parámetros Rest) 
// y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers){
    let suma = 0
    for ( let number of numbers){
        suma+=number
    }
    let SumaTotal = suma * multiplier;
    return SumaTotal;
}

const numeros = [1,2,3,4,5,6,7]
console.log(`Resultado :  ${sumManyTimes(2, ...numeros)} `)




// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico