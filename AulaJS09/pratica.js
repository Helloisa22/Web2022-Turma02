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
