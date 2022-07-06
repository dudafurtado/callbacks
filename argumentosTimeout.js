const imprimirNaTela = (nome, idade) => {
    console.log(`E aí, ${nome}. Qual é a boa dos ${idade} anos?`)
}

setTimeout(imprimirNaTela, 2000, 'Judy', 26)