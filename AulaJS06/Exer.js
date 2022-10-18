/*
    Crie um Array Unidimensional com as seguintes informações.
    HTML, 1993, CSS, 1996, Bootstrap, 2011, JS, 1995, React, 2013, Java, 1995
    No console.log retorne as seguintes informações
    Retorne todo o array
    Tamanho do Array;
    Retorne apenas a informação JS
    transforme o array em uma String e retorne o tipo no console
    Troque o separador (,) pelo separador / e retorne a mundaça no console
    Adicione a informação IOS no inicio do Array e faça o retorno do novo array com a quantidade de posições atualizadas
*/

var array1 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(array1);
console.log(array1.length);
console.log(array1[6]);
var x = array1.toString();
console.log(typeof x);
var J = array1.join(" / ");
console.log(J);
var y = array1.unshift("IOS");
console.log(array1)
console.log(y);

/* 
    Crie um Array bidimensionais com as seguintes informações.
    HTML, 1993, CSS, 1996, Bootstrap, 2011, JS, 1995, React, 2013, Java, 1995
    Esse array devera conter três dimensões sendo assim deve conter três linhas com 4 posições cada linha
    No console.log retorne as seguintes informações
    Retorne todo o array
    Tamanho do Array;
    Retorne apenas o ano 2013
    Troque a informação JS por JavaScript
    Remova a informação Java
    Insere a informação pipoca no final do array
*/ 

var array = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995],
]

console.log(array)
console.log(array.length)
console.log(array[2][1])
var c = array[1][2] = "JavaScript"
console.log(array)
delete array[2][2]
console.log(array)
var w = array.push("pipoca")
console.log(array)