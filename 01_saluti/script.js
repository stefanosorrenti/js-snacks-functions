/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */


//Inserisci il nome
const userName = prompt('Inserisci il tuo nome per essere salutato!');




// Dichiara la funzione qui.
/**
 * ##Say 'hello!'
 * This feature greets the user using his name
 * @param {string} promptName - the prompt that allows you to write the name must be inserted 
 * @returns {string} - returns the user's name + 'Hello'
 */

//La funzione deve salutare l'utente
function getHello(promptName) { // si inserisce il nome dell'utente

    const hello = `Ciao ${promptName}!` //la costante unisce 'ciao' è il nome dell'utente
    
    return hello //la funzione resitutisce la costante

}




// Invoca la funzione qui e stampa il risultato in console
console.log(getHello(userName));



//Risultato atteso se si passa 'Mario': // ciao Mario
