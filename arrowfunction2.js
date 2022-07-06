const saudacao = (callback) => {
    const nome = "Duda Furtado"
    callback(nome)
}

saudacao((nome) => {
    console.log(`Olá ${nome}, como você está?`)
})