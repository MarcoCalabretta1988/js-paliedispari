// CHECK JS LINK
console.log('JS OK');


// ! ESERCIZIO 1
/*
Palidroma
Chiedere all’utente di inserire una parola tramite un form
Creare una funzione per capire se la parola inserita è palindroma

*/

//Recupero elmenti dal DOM


const formElement = document.getElementById('pali-form');
const board = document.getElementById('board');
const userWord = document.getElementById('word-to-check');
const resetButton = document.getElementById('reset');
const checkButton = document.getElementById('pal-button');

//Creo evento a pressione del bottone

formElement.addEventListener ('submit' , function(event){
event.preventDefault();

//recupero il valore inserito
const userWordElement = userWord.value.trim();

// Validazione
if(!isNaN(userWordElement)){
  board.innerText = 'I numeri non sono accetti';
  board.classList.add('bg-danger'); 
  return;
}

checkButton.classList.add('disabled');
//Inverto parola
const palindromeWord = reverseWord(userWordElement);

//le confronto E STAMPO IN PAGINA IL RISULTATO

board.innerText = palindromeWord === userWordElement ? 'PALINDROMO' : 'NON PALINDROMO';
});

resetButton.addEventListener ('click' , function(){
    userWord.value = '';
    board.innerText = '';
    board.classList.remove('bg-danger');
    checkButton.classList.remove('disabled');
});









// ? ESERCIZIO 2

/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

//Prendo elementi dal DOM

const oddEvenForm = document.getElementById('odd-even-form');
const userNumber = document.getElementById('user-number');
const userChoise = document.querySelector('select');
const playButton = document.getElementById('play');
const tryAgainButton = document.getElementById('try-again');
const cpuThrow = document.getElementById('cpu-throw');
const userThrow = document.getElementById('player-throw');
const winner = document.getElementById('winner');



oddEvenForm.addEventListener ('submit' , function(event){
    event.preventDefault();
   
//recupero valori

const userChoiseElement = userChoise.value.trim();
const userNumberElement = parseInt(userNumber.value);

//genero il tiro della cpu

const cpuNumber = getRandomNumber(1,5);

//sommo i valori 

const result = cpuNumber + userNumberElement;

const oddEvenResult = isEven(result) ? 'even' : 'odd';

let message = '';

if(userChoiseElement === oddEvenResult){
   message = 'PLAYER';
}
else{
    message = 'CPU';
}



cpuThrow.innerText = ` ${cpuNumber}`
userThrow.innerText = ` ${userNumberElement }`
winner.innerText = ` ${message} WINS!`
});