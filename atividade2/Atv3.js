/* Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem. */


const random = (Math.floor)(Math.random() * (1 - 10) + 10)

for (let i = 1; i <=1 ; ++i) {
    const element = random ;
    console.log(element);
}

if (random && random) {
    console.log("Pessoa ganhou");
} else if(random || random) {
    console.log("Pessoa não ganhou");
}