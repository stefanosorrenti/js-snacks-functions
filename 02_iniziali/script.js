/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

//Lista di nomi da cui ricavarci il primo carattare per ogni nome.
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



/**
 * ##First character
 * This function allows you to retrieve the first character of each name
 * @param {array} array - Enter the array you want to analyze
 * @returns {array} - returns an array with the first characters of each name
*/


// Dichiara la funzione qui. 
function getFirstChar(array) {

    const firstChar = [] //creo una varaibile d'appoggio per inserire il mio nuovo array

    for (i = 0; i < array.length; i++) { //ciclo ogni elemento per tutta la lunghezza dell'array inserito

        const char = array[i] //salvo in una variabile ogni elemento ciclato dell'aaray isnerito.
        firstChar.push(char[0]) //pusho nella variabile d'appoggio ogni primo carattere di ogni primo elemento ciclato dell'array inserito

    }

    return firstChar //la funzione restituisce l'array pushato

}

/* //ARROW FUCNTION

const getFirstChar = (array) => {

    const firstChar = [] //creo una varaibile d'appoggio per inserire il mio nuovo array

    for (i = 0; i < array.length; i++) { //ciclo ogni elemento per tutta la lunghezza dell'array inserito

        const char = array[i] //salvo in una variabile ogni elemento ciclato dell'aaray isnerito.
        firstChar.push(char[0]) //pusho nella variabile d'appoggio ogni primo carattere di ogni primo elemento ciclato dell'array inserito

    }

    return firstChar //la funzione restituisce l'array pushato



} */

// Invoca la funzione qui e stampa il risultato in console
const firstCharNames = getFirstChar(names) //salvo la funzione invocato con l'argomento in nuova variabile per differenziarmi dall'esercizio prima.
console.log(firstCharNames); //stampo la mia variabile che conterrà la funzione a cui è stata associato return fistChar






//Risultato atteso: ["A", "L", "M", "A", "G", "A"]