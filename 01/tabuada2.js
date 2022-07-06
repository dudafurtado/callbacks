const tabuada = (numero, deZeroADez) => {
    deZeroADez(numero)
}

let numeroCrescente = 0

const multiplicacoes = setInterval(() => {
    tabuada(5, (numero) => {
        console.log(`${numero} x ${numeroCrescente} = ${numero * numeroCrescente}`)
        numeroCrescente++

        if (numeroCrescente > 10) {
            clearInterval(multiplicacoes)
        }
    })
}, 1000);
