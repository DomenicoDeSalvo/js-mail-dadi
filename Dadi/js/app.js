//Fare sì che, cliccando sul bottone "Genera", vengano selezionati due numeri casuali da 1 a 6, il primo verrrà assegnato all'utente, il secondo al computer. Chi avrà il numero più alto vincerà la partita.

//Acquisire il tasto "Genera".
const buttonElement = document.querySelector('button'); //Element | Null
//Renderlo responsive.
buttonElement.addEventListener('click', function() {

    //Dichiarare i giocatori e assegnazione dei numeri.
    let user = Math.floor(Math.random() * (6 - 1 + 1) + 1); //Number
    let computer = Math.floor(Math.random() * (6 - 1 + 1) + 1); //Number
    //Mostrare il risultato al giocatore.
    //Mostrare la tabella dei risultati.
    const resultElement = document.getElementById('result')
    resultElement.classList.remove('hide')
    resultElement.classList.add('show')
    //Mostrare i risultati attribuiti ai giocatori.
    const userElement = document.getElementById('number_user'); //Element | Null
    const computerElement = document.getElementById('number_computer'); //Element | Null
    userElement.innerHTML = user;
    computerElement.innerHTML = computer;







    
        

    //}


});

