/* Operadores TypeOf e delete



typeof é um operador JavaScript que retorna uma string indicando 
o tipo de uma determinada variável. Ele pode ser usado para determinar 
o tipo de um valor, função ou objeto.
 Por exemplo, 
 typeof 1 retornaria "number", typeof "Hello, world!" retornaria "string" 
 e typeof {} retornaria "objeto".

*/

const number = 100
const nameOne = "Matheus"

const myObject = {
    country: "Portugal",
    age: 25
}

delete myObject.age

console.log(myObject);

const frutas = ['pera','goiaba']
console.log(frutas.length);
console.log(frutas[0]);
/////////////////////////////////

console.log(typeof number);
console.log(typeof nameOne);
console.log(typeof myObject);
console.log(typeof frutas);


