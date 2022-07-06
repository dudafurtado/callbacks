const alarme = "18:45:00";
let tempoAlarmandoEmSegundos = 10;

const format = require('date-fns/format')

const despertador = (alarme) => {
    let agora = format(new Date(), '18:44:50')
    let quantosBeeps = 0

    const verificadorHora = () => {
        if (agora === alarme) {

            console.log('Beep beep!');
            quantosBeeps++

            if (quantosBeeps === tempoAlarmandoEmSegundos) {
                clearInterval(idSetInterval)
            }
        } else {
            agora = format(new Date(), '18:45:00');
        }
    }

    const idSetInterval = setInterval((verificadorHora), 1000);

}

despertador(alarme)