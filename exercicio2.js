const calcularIMC = (altura, peso, callback) => {
    resultadoDoCalculo = peso / (altura * altura)
    callback(resultadoDoCalculo)
}

calcularIMC(1.60, 54, (resultadoDoCalculo) => {
    if (resultadoDoCalculo < 18) {
        console.log(`Valor do IMC: ${resultadoDoCalculo}`);
        console.log('Características de desnutrição');
    } else if (resultadoDoCalculo <= 25) {
        console.log(`Valor do IMC: ${resultadoDoCalculo}`);
        console.log('Características de um corpo normal');
    } else {
        console.log(`Valor do IMC: ${resultadoDoCalculo}`);
        console.log('Características de sobrepeso');
    }
})