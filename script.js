/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/


// Chiediamo a User quanti km dovrà percorrere

const inputKm = document.querySelector(".kmuser");

let kmUser = 0;

// Chiediamo a User la sua età

const inputEta = document.querySelector(".etauser");

let etaUser;

// Selezione button per inviare

const sendButton = document.getElementById("send");

// Creazione numero random carrozza

const inputCarrozza = document.querySelector(".carrozzauser");

let carrozzauser;

// Definiamo i 0.21 € al km

const prezzoOgniKm = 0.21;

const euro = " €";

sendButton.addEventListener ("click",

    function() {
        let nomeUserInput = document.querySelector(".nomeuser");
        console.log("nome: ", nomeUserInput);
        document.getElementById("passeggero-nome").innerHTML = nomeUserInput.value;

        kmUser = inputKm.value;
        console.log("km: ", kmUser)

        etaUser = inputEta.value;
        console.log("età: ",etaUser);

        const BigliettoNoSconto = kmUser * prezzoOgniKm;

        var randomNumber = Math.floor(Math.random() * 10) + 1;
            
        document.getElementById("carrozza").innerHTML = randomNumber;

        // Applichiamo sconto del 20% per i minorenni
        
        if (etaUser <= 18) {
            document.getElementById("mio_id").innerHTML = ((BigliettoNoSconto / 100) *80).toFixed(2) + euro;
        }

        // Applichiamo sconto del 40% per over 65

        else if (etaUser >= 65) {
            document.getElementById("mio_id").innerHTML = ((BigliettoNoSconto / 100) *60).toFixed(2) + euro;
        }

        // Prezzo senza sconti

        else {
            console.log("prezzo", BigliettoNoSconto)
            document.getElementById("mio_id").innerHTML = BigliettoNoSconto.toFixed(2) + euro;
        
        }

        }
    
)



