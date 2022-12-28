/*
 Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
 Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.



*/


const pessoas0 = {nome: "Matheus", idade:18, sexo:"M", profissão: "Deploy", nacionalidade:"Brasileiro" }
const pessoas1 = {nome: "Kratos", idade:15, sexo:"M", profissão: "Deploy", nacionalidade:"Frances" }
const pessoas2 = {nome: "Atreus", idade:38, sexo:"M", profissão: "Deploy", nacionalidade:"Ingles" }
const pessoas3 = {nome: "Freya", idade:28, sexo:"F", profissão: "Deploy", nacionalidade:"Turco" }
const pessoas4 = {nome: "Queise", idade:17, sexo:"F", profissão: "Deploy", nacionalidade:"Brasileira" }

if (pessoas0.idade >= 18 && pessoas0.nacionalidade === "Brasileiro" || pessoas0.nacionalidade === "Brasileira") {
    console.log("Aprovada");
}else {
    console.log("Não Aprovada");
}


if (pessoas4.idade >= 18 && (pessoas4.nacionalidade === "Brasileiro" || pessoas4.nacionalidade === "Brasileira")) {

    console.log("Aprovada");
}else {
    console.log("Não Aprovada");
}

