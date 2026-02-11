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
 * ##Say good morning, good evening, or good afternoon.
 * This feature greets you and wishes you a good day based on the current time. 
 * @param {string} promptName - the prompt that allows you to write the name must be inserted 
 * @returns {string} - returns the user's name + 'hello' + good morning/good afternoon/good evening 
 */

//La funzione deve salutare l'utente
function getHello(promptName) { // si inserisce il nome dell'utente

    const  currentHours= new Date().getHours() //inserisco ua constante che mi resituisce  l'ora corrente (solo ora)
    
    let hello; //creo la variabile d'appoggio
    if (currentHours < 13 && currentHours >= 5) { //SE la costante con l'orario è minore di 13 E maggiore/uguale di 5
        
        hello = `Ciao ${promptName}, buongiorno!` //hello restituisce Ciao + nome dell'utente + buongiorno
        
    } else if (currentHours >= 13 && currentHours <= 17) {//ALTRIEMNTI SE la costante con l'orario è maggiore/uguale di 13 E minore/uguale di 17
        hello = `Ciao ${promptName}, buon pomeriggio!` //hello restituisce Ciao + nome dell'utente + buon pomeriggio!
    } else { //ALTRIMENTI
        
        hello = `Ciao ${promptName}, buonasera!`//hello restituisce Ciao + nome dell'utente + buonsare!
    }
    
   
    return hello //la funzione assume il valore della variabile hello
}



// Invoca la funzione qui e stampa il risultato in console

console.log(getHello(userName));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.