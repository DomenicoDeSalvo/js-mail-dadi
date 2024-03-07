//Fare sì che, cliccando sul bottone "Genera", vengano selezionati due numeri casuali da 1 a 6, il primo verrrà assegnato all'utente, il secondo al computer. Chi avrà il numero più alto vincerà la partita.

//Acquisire il tasto "Genera".
const buttonElement = document.querySelector('button'); //Element | Null
//Renderlo responsive.
buttonElement.addEventListener('click', function() {

    //Dichiarare i giocatori e assegnazione dei numeri.
    let user = Math.floor(Math.random() * (6 - 1 + 1) + 1); //Number
    let computer = Math.floor(Math.random() * (6 - 1 + 1) + 1); //Number

    

    
        

    //}


});

