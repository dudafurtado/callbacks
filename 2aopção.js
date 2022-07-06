function saudacao(callback) {
    const nome = "Duda Furtado"
    callback(nome)
}

function mensagem(nome) {
    console.log(`Olá ${nome}, como você está?`)
}

saudacao(mensagem)
// n precisa abrir parentese na função mensagem pq quando abre os parenteses vc quer que a função seja executada naquele momento
// a execução n é a da função callback e sim a primeira