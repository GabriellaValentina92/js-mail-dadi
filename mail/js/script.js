// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo


let Jess = 'Jessica_fletcher@cabotcove.com';
let shield = 'blackwidow@avengers.it';
let alice_mail = 'charlies_angels@alice.it';
let hogwarts = 'harry.potter@diagonAlley.it';
let hobbit_town = 'frodo.baggins@lor.com';
let Mulan = 'Hua_Mulan@disney.cn';

let listMail = [Jess, shield, alice_mail, hogwarts, hobbit_town, Mulan];
console.log(listMail)

let mail = prompt("inserisci la tua mail");

let Emailtrovata = false;

for( let i = 0; i < listMail.lenght; i++) {

    if (mail == listMail[i]){
        Emailtrovata = true;
    }
}

if (Emailtrovata) {
    alert('email non autorizzata');
} else {
    alert('email autorizzata');
}