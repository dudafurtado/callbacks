const tabuada = (numero, calcular) => {
    // criada a function tabuada, dois parametros são passados, sendo eles, um número que precisara ser expreso quando a função for chamada  
    calcular(numero)
    // o 2 segundo parametro é uma função callback ao qual essa linha define que é uma função por conta dos parenteses e é colocado dentro dela os parametros que para chegar na função calcular foi preciso colocar dentro da função tabuada
}

tabuada(5, (numero) => {
    // 5 é o parametro numero e o 2 segundo argumento é a definição da função calcular com o parametro numero dentro dela para que os devidos calculos possam acontecer
    for (let d = 0; d < 11; d++) {
        // um loop que ira de 0 a 10 multiplicando o numero definido como argumento pelo index d que está no momento
        console.log(`${numero} x ${d} = ${numero * d}`)
        // essa é a impressão da multiplicação do número passado como augumento e do loop começando pelo 0 
    }
})



