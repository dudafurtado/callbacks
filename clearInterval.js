let apartirDe = 15

function contagemRegressiva() {
    console.log(apartirDe)
    apartirDe--

    if (apartirDe < 7) {
        clearInterval(theTimeIsOut)
    }
}

const theTimeIsOut = setInterval(contagemRegressiva, 1000);