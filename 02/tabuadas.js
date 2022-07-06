const tabuada = (arrayDeNumerosParametro, deZeroADez) => {
    // eu passei dois parametros na função "tabuada", para que o 1 primeiro argumento seja a variavel array que eu criei fora da função, ao qual, possuem os números que futuramente eu vou pegar um por um através do indice e multiplicar pel o setInterval que vai de 0 a 10.
    deZeroADez(arrayDeNumerosParametro)
    // essa informação é o mesmo que: 
    // const deZeroADez = () => {}
    // é uma forma simplificada de dizer que o 2 segundo parametro é uma função e a partir daí eu digo que o 1 primeiro parametro da função tabuada também precisa ser um argumento da função deZeroADez, pois será utilizado na impressão da tabuada.
}

arrayDeNumerosVariavel = [1, 5, 2]

// as variaveis com let precisam ser colocadas fora da função pois quando repetidas dentro da função são zeradas em todas as rodadas. o que atrapalharia na impressão certa da multiplicação.
let numeroCrescente = 0
// numeroCrescente é a variavel que o setInterval vai utilizar para ir de 0 a 10.
let indice = 0
// indice são os index dos elementos do arrayDeNumerosVariavel.

const multiplicacoes = setInterval(() => {
    // a inteção de usar setInterval é de que a função ira se repetir continuamente, e o responsável por interromper é uma condição (if) e dentro dela o metódo clearInterval. E a cada volta que da a situações acontecendo para os valores serem diferentes e a impressão não ser a mesma.
    // foi utilizado uma função fantasma, pois ela sempre será executada sem depender dos paarmetros existirem ou não.
    tabuada(arrayDeNumerosVariavel, (arrayDeNumerosVariavel) => {
        // essa é a forma de chamar a função tabuada, criada anteriormente. quando chamada, a primeira coisa a ser lida são os parametros, então o 1 primeiro argumento é o arrayDeNumerosVariavel que será usado nas intruções da função deZeroADez. e o 2 segundo argumento é o parametro deZeroADez passado no lugar de arrayDeNumerosParametro.
        // após analisar os parametros e os levar em consideração a maquina entra dentro da função tabuada onde a instrução é seguir a função callback deZeroADez e por isso essa parte começa a ser executada.
        console.log(`${arrayDeNumerosVariavel[indice]} x ${numeroCrescente} = ${arrayDeNumerosVariavel[indice] * numeroCrescente}`)
        // a primeira execução é baseada nos valores das variaveis numeroCrescentes = 0 e indice = 0 setados com os primeiros valores possíveis
        // imprimindo então o indice 0 / index 0 do arrayDeNumerosVariavel junto com o primeiro valor de numeroCrescente
        numeroCrescente++
        // como a multiplicação do primeiro index do array com o numero 0 acabou de ser impressa na tela, é preciso aumentar o númeroCrescente, ou seja, o numero que o primeiro valor do array está sendo multiplicado, para que quando a funcão for executada novamente atráves do setInterval n repita a mesma multiplicação

        if (numeroCrescente > 10) {
            // a função desse primeiro if é verificar o valor que o indice do array está sendo multiplicado para que quando chegue na última multiplicação da tabuada (x 10) possamos pular para o próximo indice do array e multiplicar novamente de 0 a 10
            indice++

            if (indice > arrayDeNumerosVariavel.length - 1) {
                // esse if existe para que quando o valor do indice chegar ao ultimo index existente do variavel arrayDeNumerosVariavel ele possa parar de executar
                clearInterval(multiplicacoes)
                // o metódo clearInterval serve para parar de executar a repetição do setInterval
            }

            numeroCrescente = 0;
            // se a situação entrou nessa condição então é pq o numeroCrescente chegou ao 10 (máximo) e como ainda é preciso imprimir as multiplicações com os outros valores do array então a gnt reseta o número que um valor do array está sendo multiplicado com
            console.log('----')
            // essa é a barra de separação de um bloco de multiplicação para outro
        }


    })
}, 900);
// tempo de intervalo entre um e outro setInterval
