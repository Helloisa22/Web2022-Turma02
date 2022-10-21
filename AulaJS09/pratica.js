/* forEach() percorre todo o array e executa uma mudança ou apresenta uma informação pré estabelecida pela logica do codigo */
const fruits = ['apple', 'mango', 'banana', 'pineapple'];
fruits.forEach(callFruits)

function callFruits(value, index){
    console.log(`value: ${value}`)
    console.log(`index: ${index}`)
}

/* Com matriz de Objetos*/
const verb = [
    {
        id: 1,
        nameVerb: "Work",
        isVerb: true,
    },

    {
        id: 2,
        nameVerb: "Mean",
        isVerb: false,
    },

    {
        id: 3,
        nameVerb: "Want",
        isVerb: true,
    }
]

verb.forEach((teste) => console.log(teste.nameVerb))

/*Método map() */
var number = [10, 60, 17, 20, 40, 50, 70];
const newArray = number.map(Math.sqrt);
console.log("Array Antigo")
console.log(number);
console.log("Novo Array")
console.log(newArray);

/*Utilizando Arrow Function */
const newArray2 = verb.map((cont) => {
    return cont.nameVerb;
})
console.log(newArray2)


/*Método filter() com uma Arrow Function*/
var number2 = [2, 3, 5, 10, 90, 76]
const newArray3 = number2.filter((cont2) => {
    return cont2 < 8;
})

console.log(newArray3)

const newArray4 = verb.filter((cont3) => {
    return cont3.isVerb === true;
})

console.log('Retorna apenas os objetos que são verbos')
console.log(newArray4)

/*Método find() vamos retornar e utilizar o metodo filter direto no console.log */
console.log(
    newArray5 = verb.find((cont4) => {
        return cont4.nameVerb === "Mean";
    })
)

