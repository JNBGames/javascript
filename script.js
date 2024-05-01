function aloMundo() {
    alert("Alô Mundo");
}

// Chamar a função para exibir a mensagem
aloMundo();




function exibirNumero() {
    // Solicitar um número ao usuário
    let numero = prompt("Digite um número:");
    
    // Exibir a mensagem com o número informado
    alert("O número informado foi " + numero);
}






function calcularSoma() {
    // Solicitar o primeiro número ao usuário
    let numero1 = prompt("Digite o primeiro número:");
    
    // Solicitar o segundo número ao usuário
    let numero2 = prompt("Digite o segundo número:");
    
    // Converter os números de string para números inteiros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    // Calcular a soma dos dois números
    let soma = numero1 + numero2;
    
    // Imprimir o resultado da soma
    alert("A soma dos números é: " + soma);
}




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



function metrosParaCentimetros(metros) {
    let centimetros = metros * 100; // 1 metro = 100 centímetros
    return centimetros;
}
let metros = parseFloat(prompt("Digite o valor em metros:"));
let resultado = metrosParaCentimetros(metros);
alert(metros + " metros equivalem a " + resultado + " centímetros.");




function calcularAreaCirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2); // Área = π * raio^2
    return area;
}
let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area1 = calcularAreaCirculo(raio);
alert("A área do círculo é: " + area1.toFixed(2));



function calcularAreaQuadrado(lado) {
    let area = Math.pow(lado, 2); // Área = lado^2
    return area;
}

// Definir a função para mostrar o dobro da área
function mostrarDobroArea(area) {
    let dobroArea = area * 2;
    alert("O dobro da área do quadrado é: " + dobroArea);
}

// Chamar as funções para executar o programa
let lado = parseFloat(prompt("Digite o lado do quadrado:"));
let area = calcularAreaQuadrado(lado);
mostrarDobroArea(area);




function calcularSalario(valorHora, horasTrabalhadas) {
    let salarioTotal = valorHora * horasTrabalhadas;
    return salarioTotal;
}

// Chamar a função para executar o programa
let valorHora = parseFloat(prompt("Digite quanto você ganha por hora:"));
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let salario = calcularSalario(valorHora, horasTrabalhadas);
alert("Seu salário total no mês é: " + salario.toFixed(2));



function converterFPC(tempFahrenheit) {
    let tempCelsius = 5 * ((tempFahrenheit - 32) / 9);
    return tempCelsius;
}

// Chamar a função para executar o programa
let tempFahrenheit1 = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
let tempCelsius1 = converterFahrenheitParaCelsius(tempFahrenheit1);
alert("A temperatura em graus Celsius é: " + tempCelsius1.toFixed(2));



function converterCelsiusParaFahrenheit(tempCelsius) {
    let tempFahrenheit = (tempCelsius * 9/5) + 32;
    return tempFahrenheit;
}

// Chamar a função para executar o programa
let tempCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
let tempFahrenheit = converterCelsiusParaFahrenheit(tempCelsius);
alert("A temperatura em graus Fahrenheit é: " + tempFahrenheit.toFixed(2));