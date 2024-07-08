function new_square () {
    let currentelement = document.createElement('div')
    currentelement.classList.add('square')
    return currentelement
}

function generatebombs (numbombs, max, min) {
    const bombs = []
    while (bombs.length < numbombs) {
        const bomb = Math.floor(Math.random() * max + min)
        if (!bombs.includes(bomb)) {
            bombs.push(bomb)
        }
    }
}

const btn = document.getElementById('start')

const grid = document.getElementById('grid')

btn.addEventListener('click', function () {
    let square_count = 0
    for (let i = 0; i < 100; i++) {
        let currentsquare = new_square()

        currentsquare.addEventListener('click', function () {
            this.classList.add('clicked')
            console.log('hai selezionato la casella numero', i + 1, )

            if (bombs.includes(i)) {
                this.classList.add('bomb')
                console.log(`Game Over! hai cliccato su una casella bomba! il tuo punteggio è di ${square_count}`)
            }
        })

        currentsquare.innerText = i + 1

        grid.append(currentsquare)
    }

})





