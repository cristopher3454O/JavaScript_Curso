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
let {nombre2, edad2, alias2, email = "cristo@gmail.com"} = persona
console.log(nombre2) //no existe
console.log(edad2) //no existe
console.log(alias2) //no existe
console.log(email)

//sintaxis object con nuevos nombres de variables
console.log("sintaxis object con nuevos nombres de variables")
let { alias: alias3, name : name3, age: age3} = persona
console.log(name3)
console.log(age3)
console.log(alias3)

//Object anidados
console.log("Object anidados")

console.log("Object anidados")
let persona3 = {
    name : "Cristopher",
    age : 18,
    alias : "Chino",
    walk: function (){
        console.log("La persona camina")
    },
    job : {
        name: "Estudiante, proximamente Ing",
        exp: 1,
        work: function (){
            console.log(`la persona de${this.age} años de experencia trabaja. `)
        }
    }
}

let {name: name4, job: {name : jobName}} = persona3
console.log(name4)
console.log(jobName)

// Propagacion


console.log("Propagación")

//sintaxis arrays
console.log("sintaxis arrays")

let myArray2 = [...myArray, 5, 6]
console.log(myArray2)

// Copia de Arrays
console.log("Copia de Arrays")

let myArray3 = [...myArray]
console.log(myArray3)

// combinacion de Arrays

console.log("combinacion de Arrays")

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// sintaxis objects
console.log("sintaxis objects")

let persona4 = {...persona, email: "cris@gmail.com"}
console.log(persona4)


// Copia de Objcets

console.log("Copia de Objcets")


let persona5 = {...persona}
console.log(persona5)












