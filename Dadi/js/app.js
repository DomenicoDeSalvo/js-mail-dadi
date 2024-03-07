//Fare sì che, cliccando sul bottone "Genera", vengano selezionati due numeri casuali da 1 a 6, il primo verrrà assegnato all'utente, il secondo al computer. Chi avrà il numero più alto vincerà la partita.

//Acquisire il tasto "Genera".
const buttonElement = document.querySelector('button'); //Element | Null
//Renderlo responsive.
buttonElement.addEventListener('click', function() {

    //Dichiarare i giocatori e assegnazione dei numeri.
    let user = Math.floor(Math.random() * (6 - 1 + 1) + 1); //Number
    let computer = Math.floor(Math.random() * (6 - 1 + 1) + 1); //Number

    // Generare una risposta per l'utente.
    // Acquisire elemento nel DOM in cui generare la risposta.
    let resultSectionElement = document.querySelector('result'); //Element | Null
    // Mostrare il risultato.
    // Creare elemento nella sezione risultato.
    let divResultElement = document.createElement('div'); //Element | Null
    //Mostrare risultato
    resultSectionElement.innerHTML = $[divResultElement]
    divResultElement.innerHTML = 'Tu' + user + 'Computer' + computer;
    //resultElement
    //if(user > computer) {
        

    //}


});

