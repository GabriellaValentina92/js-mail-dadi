// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo

let mail = prompt("inserisci la tua mail");

const gmail = 'pincopanco95@gmail.com';
const shield = 'blackwidow@avengers.it';
const alice_mail = 'charlies_angels@alice.it';
const hogwarts = 'harry.potter@diagonAlley.it';
const hobbit_town = 'frodo.baggins@lor.com';
const Mulan = 'Hua_Mulan@disney.cn';

const listMail = [gmail, shield, alice_mail, hogwarts, hobbit_town, Mulan];
console.log(listMail)

const test = 'true'
const test1 = 'false'

for(i = listMail; i < listMail.lenght;  i++) {
    if (listMail[i] == test) {
        alert('Il tuo indirizzo mail è registrato!')
    } else if (listMail[i] == test1) {
        alert('Siamo spiacenti, la tua mail non è valida o non è registrata!')
    }
}