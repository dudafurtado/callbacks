const acontecimento = () => {
    console.log('Hora de imprimir')
}

console.log('primeira')
acontecimento()
console.log('depois da função')
console.log('antes do setTimeout')
setTimeout(() => {
    console.log('o time out está acontecendo')
}, 4000)
console.log('último sinal dps do setTimeout')