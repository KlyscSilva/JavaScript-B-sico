/*
 Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
 Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.



*/


const pessoas = { 

    obj1 : {

        name: "Silva",
        idade: 26,
        sexo: "m",
        profissao: "suporte web",
        nacionalidade:"brasileira",
    
    },
    
    obj2 : {
    
        name: "Queise",
        idade: 27,
        sexo: "f",
        profissao: "advogada",
        nacionalidade:"brasileira",
    
    
    },
    
    obj3 : {
    
        name: "Atreus",
        idade: 16,
        sexo: "m",
        profissao: "guerreiro",
        nacionalidade:"noruega",
    
    
    },
    
    obj4 : {
    
        name: "Kratos",
        idade: 50,
        sexo: "m",
        profissao: "hunter",
        nacionalidade:"grego",
    
    
    },
    
    obj5 : {
    
        name: "Freya",
        idade: 60,
        sexo: "f",
        profissao: "vendendora",
        nacionalidade:"brasileira",
    
    
    },

}






if (pessoas.nacionalidade === "brasileira" && pessoas.idade >= 18) {
    console.log("Aprovada");
}else{
    console.log("Não aprovada");
}
