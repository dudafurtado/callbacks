const imprimirDados = (callback) => {
    const nome = "JK"
    const idade = "24"
    callback(nome, idade)
}

imprimirDados((nome, idade) => {
    console.log('A função callback está sendo executada')

    if (nome) {
        console.log(`O idol de kpop mais jovem do grupo BTS é ${nome}.`)
    }

    if (idade) {
        console.log(`Ele tem ${idade} anos de idade.`)
    }
})