const imprimirDados = (callback) => {
    callback()
}

imprimirDados(() => {
    console.log('A função callback está sendo executada mesmo sem argumentos/parametros')
})