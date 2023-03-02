let numeroUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
let computer = numerocasuale (); 

console.log (numeroUser);
console.log  (computer);

function numerocasuale () {
    const random = Math.floor (Math.random() * (5)) + 1;
    return random;
};


//Condizione di vittoria = Pari vince l'utente, dispari vince il computer

let somma = numeroUser + computer;
console.log ('somma = ' + somma);

let vincitore = evenOdd (somma);

function evenOdd (somma) {

    if (somma % 2 == 0) {
        console.log ('il numero è ' + somma + ' il vincitore sei tu!');
    } else {
        console.log ('il numero è ' + somma + ' il vincitore è il computer')
    };

};
 

