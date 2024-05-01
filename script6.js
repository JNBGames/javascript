function calcularAreaCirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2); // Área = π * raio^2
    return area;
}
let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area1 = calcularAreaCirculo(raio);
alert("A área do círculo é: " + area1.toFixed(2));
