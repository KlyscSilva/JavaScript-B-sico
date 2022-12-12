/*Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Ex: João e João, imprime true. João e Maria, imprime false.*/

let nameOne = "Joao"
let nameTwo = "Joao"

const result = (nameOne == nameTwo)

console.log(result)

/*Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. 
    Ex: João e João, imprime false. João e Maria, imprime true.
 */

let nome1 = "Joao"
let nome2 = "Maria"

const result2 = (nome1 !== nome2)

console.log(result2)

/*
Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. 
Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.
*/

const pessoa = ["Joao","Maria"] /* chamei o array */
const result3 = pessoa[0] == pessoa[1] /* estou informado que o array pessoa 0(joao) é diferente de pessoa1(maria) cujo são array */
console.log(result3)

/* Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. 
Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true. */

const name1 = ["Joao", "Maria"]
const result4 = name1[0] !== name1[1]
console.log(result4)
