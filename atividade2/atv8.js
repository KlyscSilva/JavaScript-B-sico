/*

Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

*/


const array = ['10','13','25','30']
console.log(array.length);


switch (array) {

    case array[0,1,2,3] % 2 === 0:
        console.log("Pares");
        break;

    default:
        console.log("NaN");
        break;
}