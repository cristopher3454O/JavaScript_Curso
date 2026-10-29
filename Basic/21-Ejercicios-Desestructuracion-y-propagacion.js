// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("1. Usa desestructuración para extraer los dos primeros elementos de un array ")
let myArray = ["Cris", "Camila", "Sofia", "Maria"]
let [elementos1 , elementos2 , elementos3, elementos4] = myArray
console.log(elementos1)
console.log(elementos2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("2. Usa desestructuración en un array y asigna un valor predeterminado a una variable")
let [elementos5 , elementos6 , elementos7, elementos8, elementos9 = "sin nombre"] = myArray
console.log(elementos9)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("3. Usa desestructuración para extraer dos propiedades de un objeto")
// Creo mi objeto
let objeto = {
    comida: "sushi",
    restaurante : "Mares",
    direccion : "Calle #4 , Zacatecas"
}
let { comida, restaurante, direccion} = objeto
console.log(comida)
console.log(restaurante)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

console.log("4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes")
let {comida : comida1, direccion: direccion1} = objeto
console.log(comida1)
console.log(direccion1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("5. Usa desestructuración para extraer dos propiedades de un objeto anidado")
//Creo mi objeto aninado
let objetoAnidado = {
    carne: " fina",
    corte: "Sencillo",
    chef : "Profesional",
    cocinar: function(){
        console.log("El chef esta cocinando la carne")
    },
    chefInfo : {
        nombre : "Juanito",
        exp: 14,
        work: function(){
            console.log("El chef trabaja bastante!1")
        }
    }
}
let {carne : carne1, chefInfo: {nombre: chefName}} = objetoAnidado
console.log(carne1)
console.log(chefName)



// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("6. Usa propagación para combinar dos arrays en uno nuevo")
let arrayDos = [1,2,3,4]
let arrayPropagado = [...myArray , ...arrayDos]
console.log(arrayPropagado)
console.log("")
// 7. Usa propagación para crear una copia de un array
console.log("7. Usa propagación para crear una copia de un array")
let arrayCopeado =[...myArray]
console.log(arrayCopeado)

// 8. Usa propagación para combinar dos objetos en uno nuevo

//objeto nuevo
let nuevoObjeto = {
    me: "67",
    hola: "Adios"
}

let myObjetoPropagado = {...objetoAnidado, ...nuevoObjeto}
console.log(myObjetoPropagado)

// 9. Usa propagación para crear una copia de un objeto
console.log("9. Usa propagación para crear una copia de un objeto")
let copiaDeObejeto = {...nuevoObjeto}
 console.log(copiaDeObejeto)

// 10. Combina desestructuración y propagación

let chef = {
    nombre: "Juanito",
    exp: 14,
    pais: "México",
    especialidad: "Cortes de carne"
}

// Extraemos 'nombre' y agrupamos el RESTO de las propiedades con propagación (...)
let { nombre, ...elRestoDePropiedades } = chef

console.log(nombre)                  // Imprime: Juanito
console.log(elRestoDePropiedades)    // Imprime: { exp: 14, pais: 'México', especialidad: 'Cortes de carne' }
