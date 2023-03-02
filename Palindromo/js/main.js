let parolaUtente = prompt ('inserisci una parola')

let risultato = numeroPalindromo (parolaUtente);
console.log(risultato)


function numeroPalindromo (parolaUtente) {

    let palindromo;
    let i = parolaUtente[0];
    let d = parolaUtente.length - 1;

    while (i <= parolaUtente.length - 1) {
     
        if (i == d) {
            i++;
            d--;
            console.log ('palindromo')
        } else {
            console.log = 'non è palindromno';
        };
        i++;
    }

}
