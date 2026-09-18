// Array

// Declaración
let myArray = []

// inicialización
myArray = [1,2,3,4]
console.log(myArray)

myArray[0] = "Te quiero"
myArray[1] = "Te amo"
myArray[2] = "Eres el amor "
myArray[3] = "De mi vida...."
console.log(myArray)

// Metodos comunes 

//push agrega
myArray.push("Camilo")
console.log(myArray)

// pop elimina el ultimo dato del arreglo
myArray.pop()
console.log(myArray)

console.log("Eliminado: "+  myArray.pop())

//Shif y unshift

//shif elimina el primer elemento del array
console.log("Primero eliminado: "+ myArray.pop())

//unshift
myArray.unshift("Regresa", "los dias son tristes", "Porqué?") //Pasa los elementos al principio
console.log(myArray)

//lenght
console.log("Longitud el arreglo: "+ (myArray.length))

//Clear
myArray = []
myArray.length = 0
console.log(myArray)

myArray = ["Te extraño", "te quiero","vuelve", "realmente ", "te quiero"]

//slice
let newArreglo =  myArray.slice(3,5) //Regresa un nuevo arreglo con los indices del 3 al 5
console.log(newArreglo)

// splice
newArreglo = myArray.splice(1,3)
console.log(newArreglo)

newArreglo = myArray.splice(1,2, "Amor?") //Agrega nueva entrada
console.log(myArray)
