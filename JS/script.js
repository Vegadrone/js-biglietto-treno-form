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
    moltiplicare per 0.26 (kmPrice) per ottenere il prezzo del biglietto base (baseTicketPrice)
        se l'età è < (minore) 18 allora applica il 15% di sconto a baseTicketPrice
        altrimenti, se l'età è >= (maggiore uguale) 65 allora applica il 35% a baseTicketPrice
        altrimenti mostra solo ticketPrice.
    Per applicare lo sconto basta fare (baseTicketPrice * 15/35)/100 = discount
    basePrice-discount= discountedPrice.
    Oppure posso fare (ticketPrice * 85/65)/100.

    usare .toFixed (2) per mostrare solo due cifre decimali.
*/


