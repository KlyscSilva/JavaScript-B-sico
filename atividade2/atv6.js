const mensagens = {
    0: "Sem mérito",
    1: "Muito fraco",
    2: "Fraco",
    3: "Abaixo da média",
    4: "Mediano",
    5: "Acima da média",
    6: "Bom",
    7: "Muito bom",
    8: "Excelente",
    9: "Muito excelente",
    10: "Perfeito"
  };
  
  // Loop para ler as notas dos jurados
  for (let i = 0; i < 5; i++) {
    // Pede para o usuário digitar a nota
    let nota = prompt("Digite a nota do jurado: ");
  
    // Verifica se a nota está entre 0 e 10
    if (nota < 0 || nota > 10) {
      console.log("Nota inválida. Digite uma nota entre 0 e 10.");
    } else {
      // Exibe a mensagem correspondente à nota
      console.log(mensagens[nota]);
    }
  }