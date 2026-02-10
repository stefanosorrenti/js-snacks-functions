/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)


//HUMAN CODE
-chiedo il nome
-creo una funzione
-inserico il nome preso dall'utente nella funzione
SE l'orario è compreso tra le 6 e le 13
    -return Buongiorno + nome
ALTRIMENTI SE l'orario è compreso tra le 13 e le 17
    -return Buonpomeriggio + nome

ALTRIMENTI 
    -return Buonasera + nome
*/

const userName = prompt('Inserisci il tuo nome per essere salutato!');

const  currentHours= new Date().getHours()
//console.log(currentHours);

// Dichiara la funzione qui.





// Dichiara la funzione qui.
/**
 * ##Say 'hello!'
 * This feature greets the user using his name
 * @param {string} promptName - the prompt that allows you to write the name must be inserted 
 * @returns {string} - returns the user's name + 'Hello'
 */

//La funzione deve salutare l'utente
function getHello(promptName) { // si inserisce il nome dell'utente

    const  currentHours= new Date().getHours()
    
    let hello; //la costante unisce 'ciao' è il nome dell'utente `Ciao ${promptName}!`
    
    if (currentHours < 13 && currentHours >= 5) {
        
        hello = `Ciao ${promptName}, buongiorno!`
        
    } else if (currentHours >= 13 && currentHours <= 17) {
        hello = `Ciao ${promptName}, buon pomeriggio!`
    } else {
        
        hello = `Ciao ${promptName}, buonasera!`
    }
    
   
    return hello
}


console.log(getHello(userName));


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.