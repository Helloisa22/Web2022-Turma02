/*Metodo ForEach() */
var frutas = ["Banana", "Maca", "Kiwi", "Melancia"]

/*Metodo ForEach() é utilizado para percorrer 
um array e aplicar alguma mudança ou configuração */
frutas.forEach(minhaFuncao)

function minhaFuncao(valor, indice){
    console.log(`O valor é ${valor}`)
    console.log(`O indice é ${indice}`)
}
