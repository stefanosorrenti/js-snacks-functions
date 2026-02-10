/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';




// Dichiara la funzione qui.
/**
 * ##Vowel count
 * Use this function to count the vowels in a word.
 * @param {string} string - Enter the word to test.
 * @returns {number} - Returns the number of vowels found.
 */
function getNumbOfVowels (string) {
   
    const numbVowels =[] //creo una variabile d'appoggio
    
    for(i = 0; i < string.length; i++) { //ciclo ogni elemento per tutta la lunghezza della stringa inserito
        const char = string[i] //salvo in una variabile ogni elemento ciclato dell'array inserito. (in questo caso saranno direttamente i caratteri)
        
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') { //SE char è ugale ad a O e O i ecc ecc
            numbVowels.push(char) //pusho l'elemento in iterazione all'array d'appoggio
        }  
        
    }

    return numbVowels.length //associo alla funzione il valore della lunghezza della nostra variabile d'appoggio in modo tale da avere un numero.
}




// Invoca la funzione qui e stampa il risultato in console
console.log(getNumbOfVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)//