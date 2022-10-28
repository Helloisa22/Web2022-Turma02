//Metodo querySelector
let paragrafo = document.querySelector('p');

paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = "Mudei o texto aqui");

// Somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

// EVENTOS
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = "#CEFBBA";
}

// Metodo querySelectorAll
let listaLi = document.querySelectorAll('li');
for(pipoca = 0; pipoca < listaLi.length; pipoca++){
    listaLi[pipoca].style.border = '1px solid  #0000FF'
    listaLi[pipoca].style.padding = '3px'
}

//  Busca por ID utilizando metodo forEach()
let myLi = document.querySelectorAll('#my-li')
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui'))

//busca por classe
let myItem = document.querySelectorAll('.item')
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'))