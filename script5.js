function metrosParaCentimetros(metros) {
    let centimetros = metros * 100; // 1 metro = 100 centímetros
    return centimetros;
}
let metros = parseFloat(prompt("Digite o valor em metros:"));
let resultado = metrosParaCentimetros(metros);
alert(metros + " metros equivalem a " + resultado + " centímetros.");
