function saudacao(callback) {
    const nome = "Duda Furtado"
    callback(nome)
}

saudacao(function (algumaCoisa) {
    console.log(`Olá ${algumaCoisa}, seja bem-vinda`)
})