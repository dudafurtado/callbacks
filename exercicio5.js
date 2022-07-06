const microondasSegundaVersao = (tempo) => {
    console.log('Iremos começar a esquentar');

    let numero = 0

    const contagem = () => {
        console.log(numero)
        numero++

        if (numero > tempo / 1000) {
            console.log('A sua comida esquentou. Abra com cuidado e confira o resultado.')
            clearInterval(endereco)
        }

    }

    const endereco = setInterval(contagem, 1000)
}

microondasSegundaVersao(10000)