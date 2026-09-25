// objetos

// Sintaxis de un objeto

let persona = {
    name: "Cristopher",
    age: 18,
    alias: "Chino"

}

// Acceso a propiedades

// notacion por punto
console.log(persona.name)

// Notacion Corchetes
console.log(persona["name"])

// Modficiación propiedas

persona.name = "Alexander"
console.log(persona.name)

persona.age = "37"
console.log(persona.age)

// Eliminación propiedades

delete persona.age
console.log(persona)

// modificacion propiedades

persona.email = "cris@gmail.com"
persona["age"] = 37

console.log(persona.email)
console.log(persona)


// metodos (funciones )
let persona2 = {
    name: "Cristopher",
    age : 18,
    alias: "Camilo",
    walk: function(){
        console.log("la persona camina")

    }
}
persona2.walk()

// Andación de objetos

let persona3 = {
    name: "Cristopher",
    age : 18,
    alias: "Camilo",
    walk: function(){
        console.log("la persona camina")

    },
    job: {
        name: "Progamador",
        exp: 15,
            work: function(){
        console.log("la persona trabaja")
    }
}
}
persona3.job.work()

// Igualdad de object
let persona4 = {
    name: "Cristopher",
    age: 18,
    alias: "Chino"

}

console.log(persona.name == persona4.name)

// iteración

for (let key in persona4){
    console.log(key +": " + persona4[key])
}

function Person(name, age) {     // Deberua ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Cristopher", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)
