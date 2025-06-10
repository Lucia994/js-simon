console.log("Hello");
// Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"



// Seleziono gli elementi della DOM 
const numberList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputGroup = document.getElementById('input-group');
const message = document.getElementById('message');

let numbers = [];  // salvo i numeri generati

// Dichiaro la funzione per generare 5 numeri casuali  
// Dal momento che dobbiamo ripetere la stessa azione 5 volte
// utilizziamo un ciclo for con inizio a 0 e che termina dopo  5 iterazioni.

for (let i = 0; i < 5; i++) {
  const n = Math.floor(Math.random() * 50) + 1;
  numbers.push(n); // li memorizzo
  const li = document.createElement('li');
  li.textContent = n;
  numberList.appendChild(li);
}

// Dopo 30 secondi nasconde i numeri e mostra il form
setTimeout(() => {
  numberList.innerHTML = '';
  form.classList.remove('d-none');
}, 30000); //convertito 30sec in 30000 millesimi di secondo

