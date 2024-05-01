function calcularSalario(valorHora, horasTrabalhadas) {
    let salarioTotal = valorHora * horasTrabalhadas;
    return salarioTotal;
}

// Chamar a função para executar o programa
let valorHora = parseFloat(prompt("Digite quanto você ganha por hora:"));
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let salario = calcularSalario(valorHora, horasTrabalhadas);
alert("Seu salário total no mês é: " + salario.toFixed(2));
