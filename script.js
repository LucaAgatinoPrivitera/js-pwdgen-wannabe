//Variabili
let NomeUtente = prompt ("Inserisci il tuo nome:");
let CognomeUtente = prompt ("Inserisci il tuo cognome:");
let ColorePreferito = prompt ("Inserisci il tuo colore preferito:");

//Variabile password
let password24 = "La tua password è: " + NomeUtente + CognomeUtente + ColorePreferito + "#24";

document.getElementById("titolo").innerHTML = ("La tua password è: " + NomeUtente + CognomeUtente + ColorePreferito + "#24"); //primo caso che ho fatto

alert(password24); //nel caso dell'alert (l'ho fatto al contrario rispetto all'ordine che ha dato Luca)