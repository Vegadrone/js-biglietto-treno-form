/*
    Chiedere tramite input value i chilometri che il passeggero vuole percorrere (userKm)
    Chiedere tramite input value l'età del passeggero (userAge)
        Per prendere il valore (value) dagli elementi input devo usare:
            document.getElementById (id di ciò di cui voglio prendere il valore).value
            questa cosa deve accadere una volta che ho premuto il bottone (sendBtn) quindi devo aggiungere
            un sendBtn.addEventListner ('click', function () {
                document.getElementById (user-km).value
                document.getElementById (user-age).value
            })
    moltiplicare per 0.26 (kmPrice) userKm per ottenere il prezzo del biglietto base (baseTicketPrice)
        se l'età è < (minore) 18 allora applica il 15% di sconto a baseTicketPrice
        altrimenti, se l'età è >= (maggiore uguale) 65 allora applica il 35% a baseTicketPrice
        altrimenti mostra solo ticketPrice.
    Per applicare lo sconto basta fare (baseTicketPrice * 15/35)/100 = discount
    basePrice-discount= discountedPrice.
    Oppure posso fare (ticketPrice * 85/65)/100.

    usare .toFixed (2) per mostrare solo due cifre decimali.
*/

let kmPrice = 0.26;
const sendBtn = document.querySelector('#send-btn');
const finalPrice = document.querySelector('div pre');
const message = 'Il prezzo del tuo biglietto è:'

sendBtn.addEventListener ('click', function(){
    const userKm = parseInt(document.getElementById ('user-km').value);
    const userAge = parseInt(document.getElementById ('user-age').value);
    let basePrice = userKm * kmPrice;
    let under18 = ((basePrice * 85) / 100);
    let over65 = ((basePrice * 65) / 100);
    // console.log(userKm, userAge, basePrice)

    if (userAge < 18) {
        finalPrice.innerHTML = message + " " + under18.toFixed(2) + "€";
    } else if (userAge >= 65) {
        finalPrice.innerHTML = message + " " + over65.toFixed(2) + "€";
    } else (
        finalPrice.innerHTML = message + " " + basePrice.toFixed(2) + "€"
    )
    // console.log (under18, over65, basePrice);
        
})




