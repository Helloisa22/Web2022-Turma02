/*Criando array unidimensional */
var array1 = ["Marcelo", 15, "Colin", 47, true]
console.log(array1);
console.log(array1[3]);
console.clear()
array1[3] = 80;
console.log(array1)

/*Array Bidimensional */
var array2 = [
    ["pipoca", 10, false],
    ["String", 20, true],
    ["Margarina", 12, false]
]
console.log(array2);
console.log(array2[2][0]);
console.clear()
array2[1][0] = "Salsicha";
console.log(array2);


console.clear()
/*Array de Objeto Carro */
var carro = ["Uno", 1998, "0km", false, 2];
/*Tranformando array em String */
var x = carro.toString();
console.log(typeof x)
console.log(typeof carro)
console.log(carro)
console.log(x)

/*Transform array em string e add um 
novo separador */
console.clear()
var y = carro.join(" ? ")
console.log(carro)
console.log(x)
console.log(y)
/*Retorna o tamanho do array */
console.log(carro.length)
console.clear()

/*Retira o elemento no final do array */
// var t = carro.pop()
// console.log(carro)
// console.log(t)
// console.clear()

/* Insere uma informação no final do array*/
console.clear()7
var u = carro.push('Lego');
console.log(carro)
console.log(u)

/*Remove o elemento no inicio do array */
console.clear()
var p = carro.shift();
console.log(carro)
console.log(p)

/*Adiciona a informação no inicio do Array */
console.clear()
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)
/*Apagar um elemento do Array
em uma posição pré selecionada */
delete carro[1]
console.log(carro)