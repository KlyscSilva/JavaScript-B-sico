/* Operador ternário ou condicional

? se
: se não

O operador ternário é uma maneira concisa de escrever instruções if simples e pode ser usado para tornar seu código mais legível e fácil de entender. No entanto, para instruções if mais complexas, geralmente é melhor usar a sintaxe if completa.
O operador ternário usa três operandos: uma expressão condicional, uma expressão verdadeira e uma expressão falsa. Ele primeiro avalia a expressão condicional. Se a expressão condicional for verdadeira, o operador retorna o valor da expressão verdadeira; caso contrário, ele retorna o valor da expressão falsa.

*/

const rain = false;

// variavel = umbrela // a esquerda do tenario é a condição
const umbrela = rain ? "Levar guarda-chuva" : "deixar guarda-chuva";

console.log(umbrela);



// Preciso transferir um dinheiro

const balance = true // ter saldo
const isNotBlocked = true // minha conta não pode esta bloqueada
const accountExist = true // a conta deve ser existente

const transferOk =  balance && isNotBlocked&& accountExist ? "Realizado" : "Negado"

console.log(transferOk);

// Boas vindas após login

const userLoggedIn = true;
const message = userLoggedIn ? "Bem vindo!" : "Por favor, faça login"

console.log(message);