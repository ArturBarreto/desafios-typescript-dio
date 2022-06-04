"use strict";
function somarValoresNumericosTransformar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function elevaAoQuadrado(numero) {
    return numero * numero;
}
function elevaAoCubo(numero) {
    return numero * numero * numero;
}
console.log(somarValoresNumericosTransformar(2, 3, elevaAoQuadrado));
console.log(somarValoresNumericosTransformar(4, 5, elevaAoCubo));
