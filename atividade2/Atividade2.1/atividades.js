
//Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"
const compare = 10

if (compare > 10) {
    console.log('O número é maior');
}
else if( compare >= 10) {
    console.log(' O número é igual');
}
else{
    console.log('O número é menor');
}

//Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const obj = {
    name: "Matheus",
    country : "Brasil",
    Nacionality : "Brasileiro"
}

if (obj.Nacionality === "Brasileiro" || obj.Nacionality === "Brasileira") {
    console.log("A pessoa é do Brasil");
}
else{
    console.log("NaN");
}

//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const random = Math.floor(Math.random() * (10 - 1) + 1)
const randomWin = Math.floor(Math.random() * (10 - 1) + 1)

console.log(random);
console.log(randomWin);

if (random === randomWin) {
    console.log("Vc ganhou");
}
else{
    console.log("Vc não ganhou");
}

//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const number1 = 155
const number2 = 80
const number3 = 9

if (number1 > number2 && number1 > number3) {
    console.log("O primeiro é o maior");
}
else if(number2 > number3 ){
    console.log("O segundo é o maior");
}
else{
    console.log("O terceiro é o maior");
}

if (number1 < number2 && number1 < number3) {
    console.log("O primeiro é o menor");
}
else if (number2 < number3){
    console.log("O segundo é o menor");
}
else{
    console.log("O terceiro é o menor");
}

//Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
//a pessoa deve ser maior de idade e brasileira para ser aprovada.

const person1 = {
    nome: "Atreus",
    idade: 25,
    sexo: "M",
    profissão: "Front End",
    nacionalidade: "Brasileiro"
}

const person2 = {
    nome: "Matreus",
    idade: 29,
    sexo: "M",
    profissão: "Back End",
    nacionalidade: "Brasileira"
}

const person3 = {
    nome: "Erica",
    idade: 13,
    sexo: "F",
    profissão: "Back End",
    nacionalidade: "Brasileira"
}

if (person3.idade >= 18 && (person3.nacionalidade === "Brasileiro" || person3.nacionalidade === "Brasileira")) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado(a)");
}

//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.


let num1 = 1
let num2 = 2
let num3 = 3

switch (num2) {
    case 1:
        console.log("Bom");
        break;

    case 2:
        console.log("Ruim");
        break;

    case 3:
        console.log("SuperBom");
        break;
        

        default:
        break;
}

//Faça um programa onde leia um numero e diga se ele é par ou impar.

let NumberOne = 10
console.log(NumberOne % 2 === 0);
console.log(NumberOne % 2 === 1);

if (NumberOne % 2 === 0) {
    console.log("Este é um número par");
}
else{
    console.log("Este é um número impar");
}

//Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
//- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => 
//TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const OneNumber = 20
const TwoNumber = 10
const TreeNumber = 30
const FourNumber = 40

if (OneNumber && TwoNumber && TreeNumber && FourNumber % 2 === 0) {
    console.log("Todos os números são pares");
}
else{
    console.log("Há números pares e ímpares");
}

//Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const NumLock = 25

if (NumLock % 2 === 0) {
    
    if(NumLock % 5 === 0) console.log("O número é par e divisivel por 5");
    else console.log("O número é par e não é divisível por 5");
}else{

    for (let i = 2; i < NumLock; i++)
    
    if (NumLock % i === 0) {
        console.log("impar, mas não é primo");
        break
        
    } else {
        if (i === NumLock - 1)
        console.log("é primo");
    }
}


