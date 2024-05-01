function calcularMedia() {
    let notas = []; // Array para armazenar as notas
    
    // Solicitar as 4 notas bimestrais ao usuário
    for (let i = 1; i <= 4; i++) {
        let nota = prompt("Digite a nota do " + i + "º bimestre:");
        nota = parseFloat(nota); // Converter a entrada para número decimal
        notas.push(nota); // Adicionar a nota ao array
    }
    
    // Calcular a média das notas
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;
    
    // Mostrar o resultado da média
    alert("A média das notas bimestrais é: " + media.toFixed(2)); // Arredondar para 2 casas decimais
}
