let parolaUtente = prompt ('inserisci una parola')

let risultato = numeroPalindromo (parolaUtente);
console.log (risultato)

function numeroPalindromo (parolaUtente) {

    let palindrome = false;
    let i = 0;
    let d = parolaUtente.length -1 ;

    while (i <= parolaUtente.length) {

        if (i > d) {
            palindrome = true;
            i = parolaUtente.length + 1;

        } else if ( i < parolaUtente.length && parolaUtente[i] == parolaUtente[d]) {
            i++;
            d--;
        } else {
            i = parolaUtente.length + 1
        }
    }

        if (palindrome == true) {
            console.log ('palindroma')
        } else {
            console.log ('non palindroma')
        }
        return palindrome;


}
