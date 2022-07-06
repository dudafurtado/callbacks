const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

// cada rodada tem duração de 10 segundos = 10000 milisegundos, ou seja,
// console.log(nome de cada jogador)
// tempo de cada jogador set interval é jogadores/tempo da rodada

const jogo = (jogadores, temporizador) => {
    // funçãoo principal
    temporizador(jogadores)
}

let quantosJogadores = 0
for (let d = 0; d < jogadores.length; d++) {
    quantosJogadores++
}
let tempoRodada = 10000
const tempoDeCadaJogador = tempoRodada / quantosJogadores

let jogador = 0

const idSetInteral = setInterval(() => {
    jogo(jogadores, (jogadores) => {
        // instruções da função callback dentro do set interval
        console.log(`${jogadores[jogador]}`)

        jogador++

        if (jogador > jogadores.length - 1) {
            console.log("A rodada terminou!")
            clearInterval(idSetInteral)
        }
    })
}, tempoDeCadaJogador);