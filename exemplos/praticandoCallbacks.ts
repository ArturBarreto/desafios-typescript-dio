function somarValoresNumericosTransformar(numero1: number, numero2: number, callback: (resultado: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function elevaAoQuadrado(numero: number): number {
    return numero * numero;
}

function elevaAoCubo(numero: number): number {
    return numero * numero * numero;
}

console.log(somarValoresNumericosTransformar(2,3,elevaAoQuadrado));
console.log(somarValoresNumericosTransformar(4,5,elevaAoCubo));