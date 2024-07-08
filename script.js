function new_square () {
    let currentelement = document.createElement('div')
    currentelement.classList.add('square')
    return currentelement
}

function generatebombs (numbombs, max, min) {
    while (bombs.length < numbombs) {
        const bomb = Math.floor(Math.random() * max + min)
        if (!bombs.includes(bomb)) {
            bombs.push(bomb)
        }
    }
    return bombs
}
let bombs = []

const btn = document.getElementById('start')

const grid = document.getElementById('grid')

btn.addEventListener('click', function () {
    new_bombs = generatebombs(16, 100, 1)

    let square_count = 0

    grid.innerHTML = ''

    for (let i = 0; i < 100; i++) {
        let currentsquare = new_square()

        currentsquare.addEventListener('click', function () {
            if (bombs.includes(i + 1)) {
                this.classList.add('bomb')
                console.log(`Game Over! hai cliccato su una casella bomba! il tuo punteggio è di ${square_count}`)
             } else if (!this.classList.contains('clicked')) {
                 this.classList.add('clicked')
                 square_count++
                 console.log('hai selezionato la casella numero', i + 1)
             } else if (square_count === (100 - bombs.length)) {
                console.log(`Complimenti, hai vinto! sei riuscito a sfuggire a tutte le bombe! il tuo punteggio è di ${square_count}`)
             }
        })

        currentsquare.innerText = i + 1

        grid.append(currentsquare)
    }

})





