// clases en JS

class Person {
    constructor (name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}
// Sintaxis
let person = new Person("Cris", 28,"el ing")
let person2 = new Person("Sofia", 12, "soficita")

console.log(person)
console.log(person2)

console.log(typeof person)
//valores por defecto

console.log("valores por defecto")

class DefaultPerson {
    constructor(name = "sin nombre", age = 0, alias = "sin alias"){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}
let person3 = new DefaultPerson("Cami", 34)
console.log(person3)


// Acceso a propiedades
console.log(" Acceso a propiedades")

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "PEDRO"

console.log(person3.alias)

 // Funciones en clases
 console.log(" Funciones en clases")

 class PersonaWithMethod {
    constructor(name , age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    walk(){
        console.log("La persona camina. ")
    }
 }

 let person4 = new PersonaWithMethod("Cristopher", 12,"El chinote")
 person4.walk();


//  Propiedades privadas

console.log(" Propiedades privadas")
console.log()

class PrivatePerson {
    #bank 
     // # para colocar atributos privados
    constructor (name, age , alias , bank){
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }
    pay(){
        this.#bank
    } 
}
let person5 = new PrivatePerson("Chikis ", 21, "Angry", "DSFDFG13454TGDF")

/* No podemos acceder con console.log(persona5.bank)
persona5.bank = " new DSFDFG13454TGDF" */

console.log(person5)
console.log()

 // Getters y Setters
console.log("Getters y Setters")

class GetSetPerson{
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
    }
    get name(){
        return this.#name
    }
    set bank(bank){
        this.#bank = bank;
    }
    get bank(){
        return this.#bank
    }
}
let person6 = new GetSetPerson("Angry", 21, "chikis", "ERTYUIO")
console.log(person6)
console.log(person6.name)
console.log(person6.bank)


person6.bank = "new ASDFGHJK"
console.log("Valor cambiado usando get y set :" , person6.bank)

  // Herencia 

  console.log()
 console.log(" Herencia ")

 class Animal {
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("El animal emite un sonido generico")
    }

 }
 class Dog extends Animal{
    sound(){
        console.log("!Guaaag!")
    }
    run(){
        console.log("El perro corre")
    }
    love(){
        console.log("El perro quiere sentirse amado")
    }
 }
 class Fish extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }
    swim(){
        console.log("El pez nada")
    }
 }

 let myDog = new Dog("CrisDog")
 myDog.run();
 myDog.sound();
 myDog.love();




