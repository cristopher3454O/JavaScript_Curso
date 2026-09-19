// Bucles

// for
for (let i = 1; i <= 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5]
for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while
let i = 0
while (i <= 5){
    console.log(`While ${i}`)
    i++

}

/*Bucle infinito
while(true)
*/

// do while
i = 0
do{
    console.log(`hola ${i}`)
    i++
} while (i < 5)

// for of
let myArray = ["Te extraño", "te quiero","vuelve", "realmente ", "te quiero"]

mySet = new Set(["Cristopher", "Alexander", "Breceda", "Lerma"])

myMap = new Map([
    ["Name","Cristopher"],
    ["Edad", "18"],
    ["Ciudad: ", "Mexico"]])

for (let valor of myArray){ // Funciona igual que un for-each
    console.log(valor)
}
for (let valor of mySet){ // Funciona igual que un for-each
    console.log(valor)
}
for (let valor of myMap){ // Funciona igual que un for-each
    console.log(valor)
}
//Break y continue
for (let i = 1; i <= 5; i++){
    if (i == 5){
        continue
    } else if (i == 7){
                console.log(`Hola ${i}`)
        break

    }
                    console.log(`Hola ${i}`)


}