# Esercizio Simon says


- Selezione e manipolazione degli elementi del DOM attraverso **document.getElementById()** e **querySelectorAll()**;
- Utilizzo metodo **Math.random**  per generare numeri casuali;
- Utilizzo **ciclo for** per le operazione ripetute più volte;;
- Utilizzo metodo **addEventListener** per la gestione degli eventi;
- Utilizzo metodo **createElement()** per creazione dinamica di elementi HTML e aggiunta alla pagina tramite metodo **appendChild**;
- Utilizzo proprietà  **textContent** che restituisce il contenuto testuale di un elemento;

## Svolgimento esercizio

Per prima cosa, si sono selezionati  attraverso il metodo **document.getElementById('')** gli elementi utili nel DOM
 
``` js
const numberList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputGroup = document.getElementById('input-group');
const message = document.getElementById('message'); 
```

### Visualizzazione 5 numeri casuali

L'esercizio richiede di visualizzare 5 numeri casuali, per farlo si è pensato fin da subito al metodo  **math.random** e di includere numeri da 1 a 50, come specificato dal codice
``` html <input type="number" class="form-control" min="1" max="50" required> ```

Per visualizzare 5 numeri casuali, devo selezionare la lista numeri che si trova nel codice HTML, dopodichè assegnarle una funzione per eseguire la visualizzazione; ma prima bisogna far in modo di  salvare i numeri che altrimenti sparirebbero dal DOM dopo 30 secondi (numberList.innerHTML = '') per fare ciò occorre dichiarare una variabile. 

``` js 
let numbers = [];
```

Dal momento che dobbiamo ripetere la stessa azione 5 volte si è scelto di utilizzare un **ciclo for** che termina dopo  5 iterazioni.

``` js 
for (let i = 0; i < 5; i++) {
  const n = Math.floor(Math.random() * 50) + 1;
  numbers.push(n); // li memorizzo
  const li = document.createElement('li');
  li.textContent = n;
  numberList.appendChild(li);
}
```




### La scomparsa dei numeri e la visualizzazione del form 










