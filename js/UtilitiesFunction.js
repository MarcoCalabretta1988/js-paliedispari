// CHECK LINK OK

console.log('JS OK');

// ! MY UTILITIES FUNCTION :
/*

1- isEven -> Dice se un numero è pari o dispari 
2- getRandomNumber -> Restituisce un numero random tra min e max
3- isNUmber -> Dice se un input è un numero o no
4- capitalizeWord -> Rende la prima lettera di una parola maiuscola
5- capitalizeText -> Rende tutte le parole maiuscole in un testo
6- reverseWord -> Restituisce una parola al contrario

*/


function IsEven (num){

    if (isNaN(num) || !num){
        alert ('Valore non valido')
        return;
    }

    let result = num % 2 === 0 ? true : false;
    return result;
}

function getRandomNumber (min = 1,max = 100, maxIncluted = true , minIncluted = true){
    if (min >= max){
        alert('Il minimo non può essere maggiore o uguale al massimo')
        return;
    }
   if (maxIncluted) max++;
   if (minIncluted) min++;
    let num = Math.floor(Math.random()*(max - min)) + min;
    return num;
}

function isNumber (value){
    return !isNaN(value);
}

function capitalizeWord (word){
    const firstLetter = word.charAt(1);
    const restOfWord = word.subString(1);
    return firstLetter + restOfWord;
}

function capitalizeText ( words, capitalizeFunction){
    let result = '';
    for ( let i =0 ; i < words.length ; i++){
        result += capitalizeFunction(words[i]) + ' ';
    }
    return result.trim();
}

function reverseWord (word){
    let result = '';
    for (let i = word.length - 1; i >= 0 ; i--  ){
        result += word[i];
    }
    return result;
}

