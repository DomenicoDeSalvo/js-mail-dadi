//Acquisire la mail dell'utente, confrontarla con una lista e restituire un messaggio di risposta.

//Acquisizione mail.
const inputMailElement = document.getElementById('mail'); //Element | Null

//Acquisizione bottone submit.
const submitElement = document.querySelector('.button'); //Element | Null

//Lista delle email autorizzate

const mailList = ['pincopallo@mail.com', 'tizio@mail.com', 'caio@mail.com', 'sempronio@mail.com', 'giorgio_mastrota@mail.com' ]//Array

//Cliccando il bottone si avvierà l'algoritmo. 
submitElement.addEventListener('click', function(){
    let userMail = inputMailElement.value; //string

    //Validazione della mail.
    if(userMail != ('')){
        
        //Creazione variabile di controllo.
        let authorized  = false;
        
        //Creazione ciclo di controllo della lista delle mail autorizzate.
        for (let i = 0; i < mailList.length; i++) {
            const authorizedMail = mailList[i];
            
            //Controllo della corrispondenza tra la mail dell'utente e le mail della lista.
            if(userMail === authorizedMail){
                authorized = true;
            }    
        }
        
        //Risposta all'utente.
        if(authorized === true){
            console.log('La mail è autorizzata ad accedere')
            alert("E-mail autorizzata all'accesso")
        } else {
            alert('E-mail non autorizzata / Errata')
            console.log('La mail non è autorizzata ad accedere')
        }
    } else {
        alert ('Inserire una E-mail')
    }
})