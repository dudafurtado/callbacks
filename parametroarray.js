const encontrarFruta = (arrayFrutas, callback) => {
    for (let fruta of arrayFrutas) {
        if (callback(fruta)) {
            console.log(`A fruta que estavamos procurando era ${fruta} e foi achada com sucesso`);
        }
    }

    console.log(`Não foi possível encontrar ${callback.fruta} no array de frutas`);
}

const arrayFrutas = ['maça', 'banana', 'morango', 'melancia', 'melão']

encontrarFruta(arrayFrutas, (fruta) => {
    return fruta === 'morango'
})