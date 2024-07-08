L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

soluzione

1.aggiungo al html un elemento con classe grid x
2.dichiaro una funzione x
3.dichiaro una variabile dentro la funzione a cui assegno la creazione di un elemento "div" che conterra il quadrato x
4.assegno la classe square all'elemento precedentemente creato x
5.restituisco il quadrato contenuto nella variabile creata precedentemente x
6.creo un bottone nell html x
7.recupero il bottone dal dom x
6.recupero l'elemento aggiundo poc'anzi che conterra la griglia x
9.assegno un evento click al bottone x
7.eseguo un ciclo for di 100 iterazioni per creare una griglia 10x10 x
8.dichiaro una variabile "currentsquare" a cui assegno la funzione x
9.aggiungo un evento click al quadrato x
10. aggiungo la classe clicked a cui aggiungo 2 metodi: "this" e "toggle" x
11.assegno a "currentsquare" un incremento + 1 x
12.appendo il quadrato creato dentro la griglia x


Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

soluzione

1.creo una funzione "generatebombs" x
2.a questa funzione aggiungo come parametri numbombs, max, min x
2.creo un array x
2.dentro questa funzione creo un ciclo while dentro cui andrò a generare un numero casuale da 1 a 100 tramite il metodo Mathfloor e utilizzando i parametri x
3.applico una condizione per verificare se il numero generato fa già parte dell'array, se così non dovesse essere allora il numero verrà pushato fino ad avere un array di 16 numeri x
4.dentro l'evento click del quadrato, creo una variabile contatore, che mi andrà a sommare man mano le celle selezionate, che determineranno poi il mio punteggio finale x
5.dentro il for all'interno dell'evento click del quadrato, creo una condizione in cui verifico se l'array contenente i numeri delle bombe include lo stesso numero cliccato dall'utente.
6.se è vero, allora mostrerò un messaggio di gameover:"Game Over! hai cliccato su una casella bomba! il tuo punteggio è di (numero quadrati cliccati)
7.altrimenti se il quadrato contiene la classe "clicked" allora aumento il contatore di unoù
8.altrimenti se il contatore è uguale a 100 - il numero di bombe presenti (16), allora mostrerò un messaggio di vittoria:"Complimenti, hai vinto! sei riuscito a sfuggire a tutte le bombe! il tuo punteggio è di (numero quadrati cliccati)

