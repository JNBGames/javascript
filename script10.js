function converterCelsiusParaFahrenheit(tempCelsius) {
    let tempFahrenheit = (tempCelsius * 9/5) + 32;
    return tempFahrenheit;
}

// Chamar a função para executar o programa
let tempCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
let tempFahrenheit = converterCelsiusParaFahrenheit(tempCelsius);
alert("A temperatura em graus Fahrenheit é: " + tempFahrenheit.toFixed(2));