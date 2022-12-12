/*
Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false
*/

const userOne = {

    name: "Joao",
    idade: 26,
    pais: "Brazil"
}

const userTwo = {

    name: "Maria",
    idade: 25,
    pais: "Brazil"
}

const result = userOne.name == userTwo.name
console.log(result)
