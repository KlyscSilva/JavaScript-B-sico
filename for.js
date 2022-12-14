/*Estrutura de Repetição - FOR

Este código imprimirá os números de 0 a 9 no console. 
O loop for é uma instrução de fluxo de controle que permite 
repetir um bloco de código um determinado número de vezes.
 Nesse caso, o loop será executado 10 vezes, com a variável i começando em 0 e incrementada em 1 cada vez que o loop for 
 executado. 
 A instrução console.log dentro do loop imprimirá o valor atual de i no console toda vez que o loop for executado.



*/

//for (let i = 0; i < 10 ; i++) {
   // console.log(i);
    //}

    
    //Este código imprimirá a string '<nome> está presente' no console para cada nome na matriz de nomes. 
    //A matriz de nomes é uma matriz de strings contendo cinco nomes. 
    //O loop for será executado uma vez para cada elemento da matriz, com a variável i começando em 0 e incrementada em 1 cada vez que o loop for executado. 
    //A instrução console.log dentro do loop imprimirá o nome atual da matriz de nomes, junto com a string 'está presente', no console toda vez que o loop for executado.



    const names = ['Bruna','Ana','Maria','Pedro','Kratos']


    for (let i = 0; i < names.length; i++) {
        console.log(`${names[i]} está presente`);
        
    }