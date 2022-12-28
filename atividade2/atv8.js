/*

Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

*/

const numberOne = 10
const numberTwo = 20
const numberTree = 30
const numberFour = 40

if (numberOne && numberTwo && numberTree && numberFour % 2 === 0) {
    console.log("Todos São Pares");
}
else{
    console.log("Há números pares e ímpares");
}


