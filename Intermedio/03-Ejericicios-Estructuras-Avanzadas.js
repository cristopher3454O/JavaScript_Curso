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
let arrayMayorAMenor = myArray2.sort((a, b) => b - a);
console.log(arrayMayorAMenor)


// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos


const primerSet = new Set (["cristopher", "te amo", "regresa"])
const segundoSet = new Set (["Fernanda", "te amo", "regresa"])

const union = new Set([...primerSet,...segundoSet])
console.log(union)

const interseccion = new Set([...primerSet].filter(element => segundoSet.has(element)))
console.log(interseccion)

const diferencia = new Set([...primerSet].filter(element => !segundoSet.has(element)))
console.log(diferencia)

const unionCompletaSet = new Set([...union,...interseccion,...diferencia])
console.log(unionCompletaSet)
// 6. Itera los resultados del ejercicio anterior

unionCompletaSet.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información
//  se usuarios (nombre, edad y email) e itera los datos

let listaUsuarios = [
    new Map([
    ["Nombre", "Cristopher"],
    ["Edad",19],
    ["Email","cris654@gmail.com"]      
]),
    new Map([
    ["Nombre", "chikis"],
    ["Edad",21],
    ["Email","chkis654@gmail.com"]      
]),
    new Map([
    ["Nombre", "Feranda"],
    ["Edad",21],
    ["Email","pollito654@gmail.com"]      
]),
    new Map([
    ["Nombre", "Camilo"],
    ["Edad",1],
    ["Email","ckihkis654@gmail.com"]      
]),
];

listaUsuarios.forEach((usuarioMap, index) =>{
console.log(`--- Usuario ${index + 1} ---`);
    usuarioMap.forEach((value, key ) =>{
        console.log(`${key}: ${value}`);
    });
});
// 8. Dado el mapa anterior, crea un array con los nombres

let myArrayNombres =[]

listaUsuarios.forEach((usuarioMap) =>{
    if (usuarioMap.has("Nombre")){
        myArrayNombres.push(usuarioMap.get("Nombre"))
    }
});
console.log()
console.log("Muestra solos los nombres")
myArrayNombres.forEach(element => console.log(element))

// 9. Dado el mapa anterior, 
// obtén un array con los email
//  de los usuarios mayores de edad 
// y transfórmalo a un set
console.log("Muesta solo correos mayores")
let myArrayCorreos = []
listaUsuarios.forEach((UsuariosMap) => {
    if(UsuariosMap.has("Edad")){
        temporal = UsuariosMap.get("Edad")
        if(temporal >= 18 ){
            if(UsuariosMap.has("Email")){
                myArrayCorreos.push(UsuariosMap.get("Email"))
            } else {
                console.log("No hay nada we")
            }
        } else {
            return
        }
    }
}) ;

let convertidoASet = new Set(myArrayCorreos)
convertidoASet.forEach(element => console.log(element))

// 10. Transforma el mapa en un objeto,
//  a continuación, transforma el objeto en
//  un mapa con clave el email de cada usuario 
// y como valor todos los datos del usuario

let listaObjetos = listaUsuarios.map(usuarioMap => Object.fromEntries(usuarioMap));
console.log("Lista de objetos:", listaObjetos);

let mapaPorEmail = new Map(
    listaObjetos.map(objeto => [objeto.Email, objeto])
);

console.log("Nuevo Map organizado por email:");
console.log(mapaPorEmail);

console.log("\nBuscando a Feranda por su correo:");
console.log(mapaPorEmail.get("pollito654@gmail.com"));