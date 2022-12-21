//[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const num1 = 55
const num2 = 25
const num3 = 30


if (num1 > num3 && num1 > num2) {
    console.log(num1 + ' ' + 'é o maior Numero!');
    }
    else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' ' + 'é o maior Numero!');
    }
    else if (num3 > num1 && num3 > num2)  {
    console.log(num3 + ' ' + 'é o maior Numero!');
    }
    else if(num1 < num3 && num1 < num2){
        console.log(num1 - '' - 'é o menor número');
    }
    else if(num2 < num1 && num2 < num3){
        console.log(num2 - ' ' - 'é o menor número');
    }else {
        console.log(num3 - '' - 'é o menor número');
    }
