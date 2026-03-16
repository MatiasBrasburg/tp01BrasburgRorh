let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);
function concatInvert (texto1, texto2){
let returnValue = texto1 + texto2;
let texto1Invertido = returnValue.split('').reverse().join('');

//el split lo pasa a char, el reverse lo invierte y el join lo pasa a string devuleta y invertido
return texto1Invertido;
}