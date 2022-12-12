/*
Object 


propriedade : valor

marca : samsung
cor: preta
tamanho : 75
nome: Rodolfo
idade: 26
altura: 1.7m

Sempre que for de uma propriedade para outra utilizar a vírgula(,)
*/

const pessoa = {

    name:"Matheus",
    idade: 26,
    sexo:"male",
    height:1.7,
    endereco: "St Enix"
}

const pessoa2 = {

    name:"Erick",
    idade: 16,
    sexo:"male",
    height:1.8,
    endereco: {
        street:"vinte e um",
        numero: 18,
        pais: "Brazil"
    }

}

console.log(pessoa)
console.log(pessoa2.endereco.pais)
console.log(pessoa2.name)