// Sistema controllo di Pari e dispari
let sceltaOddEven;
let i = 0;

while (i < 1) {
    sceltaOddEven = prompt ('Scegli Pari o Dispari');
    if (sceltaOddEven == 'Pari') {
        i++;
    }else if (sceltaOddEven == 'Dispari') {
        i++;
    };

  
};

//Sistema di scelte dell'utente e numero casuale del computer
let pariDispariUser = sceltaOddEven;
let numeroUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
let computer = numerocasuale (); 

console.log (numeroUser);
console.log  (computer);

function numerocasuale () {
    const random = Math.floor (Math.random() * (5)) + 1;
    return random;
};


let somma = numeroUser + computer;
console.log ('somma = ' + somma);

let risultato = evenOdd (somma);

function evenOdd (somma) {

    let risultato;

    if (somma % 2 == 0) {
        console.log ('Il numero è pari!');
        risultato = 'Pari'
    } else {
        console.log ('Il numero è dispari');
        risultato = 'Dispari'
    };

    return risultato;
};

//Esito (se vittoria o sconfitta)

if (risultato == 'Pari' && pariDispariUser == 'Pari') {
    console.log ('Hai vinto!');
} else if (risultato == 'Dispari' && pariDispariUser == 'Dispari'){
    console.log ('Hai vinto!');
} else {
    console.log ('Hai perso!')
};


 

