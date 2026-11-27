// Clases avanzadas


class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}
const person = new Person("Cris", 19)
person.greet()

person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}

person.sayAge()

// Abstración
console.log("")
console.log("== Abstración ==")

class Animal{
    constructor(name){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }
    makeSound(){
        throw new Error("Este método tiene ser implementado por la subclases")
    }
}

// Error
// const animal = new Animal("Cris")
// console.log(animal)

// Polimofirsmo
console.log("")
console.log("== Polimofirsmo ==")

class Cat extends Animal{
    makeSound(){
        console.log("Miau!")
    }
}
class Dog extends Animal{
    makeSound(){
        console.log("Guaag!")
    }
}

const cat = new Cat("CrisGato")
console.log(cat)
cat.makeSound()

const dog = new Dog("CrisPerro")
console.log(dog)
dog.makeSound()

console.log("")
// Mixins
console.log("== Mixins ==")

const FlyMixin = {
    fly(){
        console.log(`${this.name} esta volando`)
    }
}

class Bird extends Animal {}
class Dragon extends Animal {}

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("CrisPajaro")

console.log(bird.name)
bird.fly()


const dragon = new Dragon("CrisDragon")
console.log(dragon.name)
dragon.fly()

// Patron Singleton
console.log("")
console.log("== Patrón Singleton ==")

class Session{
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Cristopher")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("Alexander")
console.log(session3.name)
console.log(session2 === session3)



// Symbol
console.log("")
console.log("== Symbol ==")

const ID = Symbol("id")

class User{
    constructor(name){
        this.name = name
        this[ID] = Math.random(1,10)
    }
    getId(){
        return this[ID]
    }
}

const user = new User("Fernanda")
console.log(user.name)
console.log(user.ID)
console.log(user.getId())


// instanceof
console.log("")
console.log("== Instanceof ==")

class Car {}
const car = new Car()

console.log(car instanceof Car)


// Create
console.log("")
console.log("== Create ==")

const anotherCar = Object.create(Car.prototype)
console.log(anotherCar instanceof Car)


// Proxy
console.log("")
console.log("Proxy")

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)
