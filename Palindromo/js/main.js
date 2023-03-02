let parolaUtente = prompt ('inserisci una parola')

let risultato = numeroPalindromo ();
console.log(risultato)


function numeroPalindromo () {

    let palindromo;
    let i = 0;

    while (i < 1) {
        if (parolaUtente.length = 2 && parolaUtente[0] == parolaUtente[1]) {
            console.log ('palindromo');
            i++
        }else if (parolaUtente.length = 3 && parolaUtente[0] == parolaUtente[2]) {
            console.log ('palindromo');
            i++;
        }else if (parolaUtente.length = 4 && parolaUtente[0] == parolaUtente[3] && parolaUtente[1] == parolaUtente[2]) {
            console.log ('palindromo');
            i++;
        }else if (parolaUtente.length = 5 && parolaUtente[0] == parolaUtente[4] && parolaUtente[1] == parolaUtente[3]) {
            console.log ('palindromo');
            i++;
        }else if (parolaUtente.length = 6 && parolaUtente[0] == parolaUtente[5] && parolaUtente[1] == parolaUtente[4] && parolaUtente[2] == parolaUtente[3]) {
            console.log ('palindromo');
            i++;
        }else if (parolaUtente.length = 7 && parolaUtente[0] == parolaUtente[6] && parolaUtente[1] == parolaUtente[5] && parolaUtente[2] == parolaUtente[4]) {
            console.log ('palindromo');
            i++;
        }else if (parolaUtente.length = 8 && parolaUtente[0] == parolaUtente[7] && parolaUtente[1] == parolaUtente[6] && parolaUtente[2] == parolaUtente[5] && parolaUtente[3] == parolaUtente[6]) { 
            console.log ('palindromo');
            i++;
        } else {
            console.log ('non palindromo')
        }
        ;
    };

}
