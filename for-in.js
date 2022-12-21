/*
O "for in" é uma estrutura de repetição usada em algumas linguagens de programação, incluindo Python e JavaScript. 
Ele permite iterar sobre os elementos de uma estrutura de dados, como uma lista ou um dicionário.

Em JavaScript, a sintaxe é um pouco diferente:

for (variable in object) {
  // instruções a serem executadas para cada elemento do objeto
}

const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

Isso irá imprimir "a: 1", "b: 2" e "c: 3".

Em ambas as linguagens, o "for in" é útil para percorrer os elementos de uma estrutura de dados e realizar alguma ação para cada um deles. 
Ele é um dos vários tipos de estruturas de repetição disponíveis em Python e JavaScript.

*/



const student = {
    name: "Theu",
    age: 26,
    genre: "male",
}

for (let value in student) {

    console.log(value);
    console.log(student[value]);
    console.log(`${value}:${student[value]}`)

}