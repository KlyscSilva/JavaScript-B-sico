/* Operador de comparação

== -> Igual // Ele compara o valor , mas não compara o tipo do valor ex: string,number,sempre utiliza o 3x=
=== -> Totalmente igual // Ele verifica o tipo de dado!

!= -> Diferente // Ele compara o valor, mas não compara o tipo do valor!
!== -> Totalmente diferente// Ele verifica o tipo de dado!

*/

const firstPerson = "Jan";
const secondPerson = "Mam";
console.log(firstPerson === secondPerson);

const myNumberOne = 25;
const myNumberTwo = "25";

console.log(myNumberOne !== myNumberTwo); //Uma é number e outra String

console.log(myNumberOne != myNumberTwo); // Ele está comporando apenas os valores e não o tipo da váriavel

/* Operador de comparação 2

> --> MAIOR
>= --> MAIOR OU IGUAL
<  --> MENOR
<=  -> MENOR OU IGUAL

*/

let n1 = 2
let n2 = 20
console.log(n1 > n2);
console.log(n1 >= n2)
console.log(n1 < n2);
console.log(n1 <= n2);