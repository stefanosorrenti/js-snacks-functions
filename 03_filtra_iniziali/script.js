/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

//lista dei nomi da cercare e stampare
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * ##Print a name only if it begins with the desired letter
 * This function allows you to search for a name only if it starts with the letter you want.
 * @param {array} array - Enter the array from which to search for names
 * @param {string} character - Enter the letter with which the names will be searched and printed
 * @returns {array} - Returns an array with a list of names starting with the desired letter
 */
function getNameByA(array, character) { 

    const onlyANames = [] //creo una varaibile d'appoggio per inserire il mio nuovo array

    for (i = 0; i <array.length; i++) { //ciclo ogni elemento per tutta la lunghezza dell'array inserito
        const element =array[i] //salvo in una variabile ogni elemento ciclato dell'aaray inserito.
        const firstChar = element[0] //salvo il una variabile il primo carattare di ogni elemento ciclato nell'array inserito

        if (firstChar == character) { //SE il carattere corrisponde alla lettere inserita dall'utente
            onlyANames.push(element); //pusho l'elemento nella variabile d'appoggio
    }

    
}
    return onlyANames //restituisco il valore della variabile d'appoggio come valore della funzione

}

// Invoca la funzione qui e stampa il risultato in console
console.log(getNameByA(names, 'A')); 



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]