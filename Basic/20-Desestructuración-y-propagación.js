let myArray = [1,2,3,4]

let persona = {
    name: "cristopher",
    age : 18,
    alias : "chino"
}


let myValue = myArray[1]
console.log(myValue)

let myName = persona.name
console.log(myName)


// Destructuración - Capacidad de extraer valores 
//  y asignarlo a variables de manera concisca

// Destructuració

//sintaxis de arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)


// sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)


console.log("ESPACIO")
// Ignorar elementos de Array
let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// sintaxis objects
console.log("Destructuración de obejtos")
let { name, age, alias} = persona
console.log(name)
console.log(age)
console.log(alias)


//sintaxis objects con valores predeterminados


