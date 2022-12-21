/* FOR OF

O "for of" é uma estrutura de repetição usada em algumas linguagens de programação, incluindo JavaScript. 
Ele é semelhante ao "for in", mas é mais adequado para iterar sobre os elementos de um iterável, como uma string ou uma lista.
A sintaxe do "for of" em JavaScript é a seguinte:

for (variable of iterable) {
  // instruções a serem executadas para cada elemento do iterável
}

const arr = [1, 2, 3];
for (const elem of arr) {
  console.log(elem);
}

Isso irá imprimir os números 1, 2 e 3.

O "for of" é útil para iterar sobre os elementos de um iterável e realizar alguma ação para cada um deles. 

Ele é um dos vários tipos de estruturas de repetição disponíveis em JavaScript.

Ao contrário do "for in", que itera sobre as chaves de um objeto, o "for of" itera sobre os valores de um iterável. 
Além disso, o "for of" é mais seguro e eficiente do que o "for in", pois ele não itera sobre as propriedades herdadas de um objeto 
e não requer o uso de uma cláusula "if" para verificar se uma propriedade é própria.




*/

let myName = "Matheus"
let array = ['Maria', 'Joao', 'Pedro', 'Kratos']


for (const letter of myName) {
    console.log(letter);
}

for (const name of array) {
    console.log(name);
}