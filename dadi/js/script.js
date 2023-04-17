// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


/* Generare numero random per giocatore da 1 a 6
   generare numero random per computer da 1 a 6
   vincitore: numero più alto.

   // Prima di partire a scrivere codice poniamoci qualche domanda:
    // Che ci sia un array da qualche parte?
    // Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/ 

let min = 1
let max = 6

let player = (Math.floor(Math.random() * (max - min + 1) ) + min);
console.log (player)
let pc_player = (Math.floor(Math.random() * (max - min + 1) ) + min);
console.log (pc_player)

if (player > pc_player) {
    console.log('il numero più alto è:' + player);
} else {
    console.log('il numero più alto è:' + pc_player);
}


