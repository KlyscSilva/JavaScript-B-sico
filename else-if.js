const ageAdult = 12 

if (ageAdult >= 18 && ageAdult <=21)  {
    console.log("Liberado para festa - KID");
    
}else if(ageAdult <= 17 ){
    console.log("Menor de idade, não liberado");
} else{
    console.log("Entrada Liberada - VIP");
}
/////////////////////////////////////////////

// abaixo utilizei uma variavel de nome const temperature e seu valor
// depois criei um condição if alegando se está entre 36 a 39 - saudavel
// abaixo criei uma nova condição else if que se o valor acima passar de 39 - vai me
//retornar uma messagem dizendo - está com febre
// ao final caso o valor da variavel não seja compativel
// com nenhuma das condições dentro do if e else if
// ele vai me retornar uma mensagem diferente, alegando temperatura baixa


const temperature = 25

if(temperature >= 36 && temperature <= 39){
    console.log("Saudável");
} else if (temperature > 39) {
    console.log("Está com Febre")
}
else{
    console.log("Temparatura baixa");
}