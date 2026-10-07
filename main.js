const nome = "Emanuele";
const cognome = "Lupo"
const eta = 30
const lavoro = "Impiegato"
const anno = 2026
const annoDiNascita = (anno - eta)
//messaggio da stampare
const messaggio = "Ciao a tutti! Mi presento, mi chiamo " + nome + " " + cognome + " ho " + eta + " anni e lavoro come  " + lavoro + ". Sono nato nel " + annoDiNascita

console.log(messaggio);

document.getElementById("messaggio").innerHTML = messaggio;


const amico = "Matteo"
const etaAmico = 34
const differenzaEta = (etaAmico - eta)
//messaggio da stampare
const messaggio1 = "Il mio amico si chiama " + amico + " ha " + etaAmico + " anni. Lui infatti è più grande di me di " + differenzaEta + " anni"

console.log(messaggio1);

document.getElementById("messaggio1").innerHTML = messaggio1;


const annoInizioLavoro = 2018
const annoDiLavoro = (anno - annoInizioLavoro)
//messaggio da stampare
const messaggio2 = "Il mio impiego lavorativo è " + lavoro + " presso un azienda di telecomunicazioni in provincia di Roma. Ho iniziato a lavorare nel " + annoInizioLavoro + " quindi sono " + annoDiLavoro + " anni che sono nel mondo del lavoro!"

console.log(messaggio2);

document.getElementById("messaggio2").innerHTML = messaggio2;