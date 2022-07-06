const microondas = (tempo) => {
    console.log('Iremos começar a esquentar');

    setTimeout(() => {
        console.log('A sua comida esquentou. Abra com cuidado e confira o resultado.')
    }, tempo)

}

microondas(4000)