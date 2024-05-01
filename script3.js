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