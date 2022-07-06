function guardarInformações(callback) {
    const nome = 'Carla Maria'
    const idade = 27
    callback(nome, idade)
}

function imprimirInformacoes(nome, idade) {
    if (idade) {
        const anoAtual = new Date().getFullYear()
        console.log(`${nome} com nascimento em ${anoAtual - idade}`)
    } else {
        console.log(nome)
    }
}

guardarInformações(imprimirInformacoes)