// Prototipos

console.log("Prototipos")

let person = {
    name : "Cristopher",
    age : 19,
    greet(){
        console.log(`Hola, soy ${this.name} `)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

// Herenciaaa
console.log()
console.log("Herencia")

let progammer = Object.create(person)
progammer.language = "JavaScript"

progammer.name = "Cristopher"
console.log(person.name)
console.log(person.language)

console.log(progammer.name)
console.log(progammer.age)
console.log(progammer.language)
progammer.greet()
progammer.sayAge()
console.log()
// Metodos estaticos y de instancia
console.log("Metodos estaticos y de instancia")
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log(`Hola soy ${this.name}`)
}

let newPerson = new Person("Cristopher", 19)
newPerson.greet()

console.log()

// Metodos avanzados
console.log("Metodos avanzados")

// Assign

console.log("Assign")

let personCore = {name : "Brais"}
let personDetails = {age : 19, alias: "Cristopher"}

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log("Keys, value, entries")

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))