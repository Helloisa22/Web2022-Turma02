// O que e Array

// Array unidimensional
//dois formatos de declarar arrays em JavaScript
const num1 = new Array(30, -1, 5, 3, 121)
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);
console.log(`terceiro elemento de num1: ${num1[2]}`);
console.log(`quinto elemento de num2: ${num2[5]}`);

// Arrays bidimensionais
console.clear();
const matrix = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350],
];

console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa o segundo elemento: ${matrix[0][1]}`);

console.clear()
//Alterar uma informação do Array
matrix[0][0] = 'pipoca'
console.log(matrix)

// Métodos de arrays
// Convertendo Array em String
console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);
let numArray2 = numArray.toString();
console.log(typeof numArray2);

// Propriedade: Tamanho do array

// Inserir e remover elemento no array

// Apagando um elemento em uma posição específica