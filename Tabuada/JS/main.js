//Pegar o Span
let tabuada = document.querySelector('.my-span');
let pegarCaminho = document.querySelector('#numero');

const CalcularTabuada = () => {
    let guardaValor = pegarCaminho.value;

    // 2 x 2 = 4

    tabuada.innerHTML = `
                            ${guardaValor} x 0 = ${guardaValor * 0}
                            ${guardaValor} x 1 = ${guardaValor * 1}
                            ${guardaValor} x 0 = ${guardaValor * 0}
                            ${guardaValor} x 0 = ${guardaValor * 0}
                            ${guardaValor} x 0 = ${guardaValor * 0}
                            ${guardaValor} x 0 = ${guardaValor * 0}
                            ${guardaValor} x 0 = ${guardaValor * 0}
                            ${guardaValor} x 0 = ${guardaValor * 0}
                        `

    console.log(guardaValor)
}