// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo

let mail = prompt("inserisci la tua mail");

const Jess = 'Jessica_fletcher@cabotcove.com';
const shield = 'blackwidow@avengers.it';
const alice_mail = 'charlies_angels@alice.it';
const hogwarts = 'harry.potter@diagonAlley.it';
const hobbit_town = 'frodo.baggins@lor.com';
const Mulan = 'Hua_Mulan@disney.cn';

const listMail = [Jess, shield, alice_mail, hogwarts, hobbit_town, Mulan];
console.log(listMail)

let test = 0;

for(let i=0; i<=listMail.lenght; i++) {

    if (mail == listMail[i]) {
        test = 1;
    }
}


if (test === 0) {
    alert('email non autorizzata');
} else {
    alert('email autorizzata');
}