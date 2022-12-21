/* Faça um programa que gere um número aleatório entre 1 e 10, 

esse número é o número 'ganhador'. 
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem. */


const random = Math.floor(Math.random() * (10 - 1) + 1)
const randomWin = Math.floor(Math.random() * (10 - 1) + 1)


console.log(random);
console.log(randomWin);

if (random === randomWin) {
    console.log("Pessoa ganhou");
} else {
    console.log("Pessoa não ganhou");
}