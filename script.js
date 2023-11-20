/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/


// Chiediamo a User il suo nome e cognome

const inputNome = document.querySelector(".nomeuser");

const sendButton = document.getElementById("send");

let nomeUser;

console.log(inputNome);

console.log(inputNome.value);

// Chiediamo a User quanti km dovrà percorrere

const inputKm = document.querySelector(".kmuser");

const sendButton = document.getElementById("send");

let kmUser;

console.log(inputKm);

console.log(inputKm.value);


// Chiediamo a User la sua età





// Selezione button per inviare



sendButton.addEventListener ("click",

    function() {
        let nomeUser = inputNome.value;
        console.log(nomeUser);

        let kmUser = inputKm.value;
        console.log(kmUser)
    }

)

console.log(userKm, userAge);

// Definiamo i 0.21 € al km

const prezzoOgniKm = 0.21;

// Indichiamo come si calcola il prezzo, la frase pre costo e l'euro post costo

const BigliettoNoSconto = userKm * prezzoOgniKm;

const frase = "Il prezzo del tuo biglietto è ";
const euro = " €";

// Applichiamo sconto del 20% per i minorenni

if (userAge <= 18) {
    document.getElementById("mio_id").innerHTML = ((BigliettoNoSconto / 100) *80).toFixed(2) + euro;
}

// Applichiamo sconto del 40% per over 65

else if (userAge >= 65) {
    document.getElementById("mio_id").innerHTML = ((BigliettoNoSconto / 100) *60).toFixed(2) + euro;
}

// Prezzo senza sconti

else {
    document.getElementById("mio_id").innerHTML = BigliettoNoSconto.toFixed(2) + euro;
}

