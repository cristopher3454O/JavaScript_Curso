// 1. Utiliza map, filter y reduce para crear 
// un ejemplo diferente al de la lección
let carritoCompras = [
    {nombre: "Laptop", precio: 23, disponibildad : true},
    {nombre: "Camote", precio: 234, disponibildad : true},
    {nombre: "Azucar", precio: 35, disponibildad : false},
    {nombre: "Pollo", precio: 43, disponibildad : false},
]


// Utlizacion de filter
let productosDisponibles = carritoCompras.filter(element => element.disponibildad === true)
console.log(productosDisponibles)

// Map
let productosFalseATrue = carritoCompras.map(element => {
    return {
        nombre : element.nombre,
        precio : element.precio,
        disponibildad : element.disponibildad === false ?  true:  element.disponibildad
    }
})
console.log(productosFalseATrue)

// Reduce

let precioTotal = carritoCompras.reduce((acumulador, element )=>{
    return acumulador + element.precio;
}, 0);


console.log("Carrito completo:")
console.log(carritoCompras)
console.log("Valores de disponibilidad cambiados a true")
console.log(productosFalseATrue)
console.log(`El precio total del carrito es: ${precioTotal}`)


// 2. Dado un array de números, crea uno nuevo}
//  con dichos números elevados al cubo y filtra 
// sólo los números pares

let myArray = [10,2,3,4,5,6,7,9,7,6,54,3,3,2,5,6,3,6,3,67,2,7,2,7,2]
let myArrayEleveado = myArray.map(element => element ** 2)
console.log(myArrayEleveado)

let myArrayPares = myArrayEleveado.filter(element => element % 2 === 0)
console.log(myArrayPares)

// 3. Utiliza flat y flatMap para
//  crear un ejemplo diferente al de la lección

let cosasQueNoTeDije = [" :) hola",["te sigo",["Pensado :)",["cada dia :) :)"]]]]
console.log(cosasQueNoTeDije)
let cosasQueNoTeDijeFlat = cosasQueNoTeDije.flat(4)
console.log(cosasQueNoTeDijeFlat)

let carasACorazones = cosasQueNoTeDijeFlat.flatMap( cambio => cambio.replace(":)", "<3"))
console.log(carasACorazones)


// 4. Ordena un array de números de mayor a menor

let myArray2 = [6,2,3,4,3,1,7,8,9,10]
let arrayMayorAMenor = myArray2.reversemyArray2.sort((a,b) => b -a)
console.log(arrayMayorAMenor)


// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario