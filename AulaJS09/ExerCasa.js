const number = [17, 43, 8, 4, 97, 56, 29, 45]
number.forEach(imparPar)

function imparPar(valor){
    if(valor%2 == 0){
        console.log(`${valor} Esse número é par`)
    }else{
        console.log(`${valor} Esse número é impar`)
    }
}