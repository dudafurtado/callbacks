const somar = (primeiroValor, segundoValor, funcaoCallback) => {
    const calculo = primeiroValor + segundoValor
    funcaoCallback(calculo)
}

somar(240, 789, (calculo) => {
    console.log(`${calculo} é o resultado do calculo`);
})