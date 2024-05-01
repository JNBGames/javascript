function converterFPC(tempFahrenheit) {
    let tempCelsius = 5 * ((tempFahrenheit - 32) / 9);
    return tempCelsius;
}

// Chamar a função para executar o programa
let tempFahrenheit1 = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
let tempCelsius1 = converterFahrenheitParaCelsius(tempFahrenheit1);
alert("A temperatura em graus Celsius é: " + tempCelsius1.toFixed(2));
