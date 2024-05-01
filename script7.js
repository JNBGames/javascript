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