const saudacao = (callback) => {
    const nome = "Duda Furtado"
    callback(nome)
}

const mensagem = (nome) => {
    console.log(`Olá ${nome}, como você está?`)
}

saudacao(mensagem)