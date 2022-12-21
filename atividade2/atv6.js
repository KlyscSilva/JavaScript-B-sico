/* [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.*/

 


const number = 25

//  Quanto é o resto da divisão de: number por %2 == 0 isso vai me retornar se o número é par ou impar, pois se o resto for '0' é par ou '1' é impar
if(number % 2 == 0){
  console.log("Par");
}else{
  console.log("Impar");
}
///////////////////////////////



const number2 = 7
let divisor = 0

for (let i = 1; i < number2; i++) 

if (number2 % 2 === 0) {
  console.log("Par");
}

else if (number2 % 2 === 1){
  console.log("impar");
}
else if (number2 % i == 0)
    divisor++;

else if(divisor==2){
  console.log("primo");
}else{
  console.log("Nan");
}


