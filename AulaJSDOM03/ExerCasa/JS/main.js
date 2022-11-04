let tabuada = document.querySelector('.my-span'); // Pegar o Span
let reserva = document.querySelector('#numero'); // Pegar o numero dentro input

const Clique = () => {
    let numeroTabuada = reserva.value;
    tabuada.innerHTML = `   ${numeroTabuada} x 2 = ${numeroTabuada * 0}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 1}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 2}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 3}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 4}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 5}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 6} 
                            ${numeroTabuada} x 2 = ${numeroTabuada * 7}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 8}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 9}
                            ${numeroTabuada} x 2 = ${numeroTabuada * 10}`
    console.log(numeroTabuada)
}

/*Até aqui será com o aluno */
