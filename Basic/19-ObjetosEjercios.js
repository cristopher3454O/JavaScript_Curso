// 1. Crea un objeto con 3 propiedades
let objeto3Propiedades ={
    forma: "Cirulo",
    color: "Rojo",
    disponibilidad: true
}
// 2. Accede y muestra su valor
for (let key in objeto3Propiedades){
    console.log(key + ": "+ objeto3Propiedades[key])
}

// 3. Agrega una nueva propiedad
objeto3Propiedades.tamaño = "Grande";

// 4. Elimina una de las 3 primeras propiedades
delete objeto3Propiedades.color;


// 5. Agrega una función e invócala
objeto3Propiedades.describir = function(){
    return "HOLAAAAA"
}
console.log(objeto3Propiedades.describir())

// 6. Itera las propiedades del objeto
for ( let key in objeto3Propiedades){
    console.log(key + ": " + objeto3Propiedades[key])
}

// 7. Crea un objeto anidado
let anidacionDeObjetos = {
    nombre: "cristopher",
    edad: 18,

    trabajar: {
    nombreTrabajo: " Programador",
    exp: 2
}
}


// 8. Accede y muestra el valor de las propiedades anidadas
console.log(anidacionDeObjetos.trabajar.nombreTrabajo)

// 9. Comprueba si los dos objetos creados son iguales
let sonIguales = objeto3Propiedades === anidacionDeObjetos;
console.log(sonIguales)



// 10. Comprueba si dos propiedades diferentes son iguales
let propiedadIguales = objeto3Propiedades.nombre === anidacionDeObjetos.trabajar.nombreTrabajo;
console.log(propiedadIguales)