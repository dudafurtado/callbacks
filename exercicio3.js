function resultadosEncontrados(arrayDeObjetos, callback) {
    let lista = []
    let indice = 0

    for (let informacoes = 0; informacoes < arrayDeObjetos.length; informacoes++) {
        if (callback(arrayDeObjetos[informacoes])) {
            lista[indice] = arrayDeObjetos[informacoes]
            indice++
        }
    }

    return lista
}

// console.log(`A pessoa desenvolvedora ${informacoes.nome} trabalha com a stack ${informacoes.stack}}`)

const arrayDeObjetos = [
    {
        nome: 'Jorge',
        stack: 'front'
    },
    {
        nome: 'Alice',
        stack: 'back'
    },
    {
        nome: 'Juliana',
        stack: 'front'
    }
]

const informacaoFinal = resultadosEncontrados(arrayDeObjetos, (item) => {
    return item.stack === 'front'
})

console.log(informacaoFinal)