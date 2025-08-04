
let ingredienti = {
 formaggi: [
    'fontina',
    'mozzarella',
    'scamorza',
    'taleggio',
    'grana',
    'provola',
    'brie',
    'pecorino',
    'gorgonzola'],  
 verdure: [ 
    'asparagi',
    'melanzane',
    'zucchine',
    'pomodori',
    'peperoni',
    'carciofi',
    'cipolle',
    'funghi',
    'capperi'],
 proteine: [
    'pancetta',
    'pollo',
    'wrustel',
    'prosciutto cotto',
    'prosciutto crudo',
    'speak',
    'bresaola',
    'lardo',
    'tonno'],
 aggiunte: [
    'nutella',
    'peperoni',
    'asparagi',
    'mozzarella di bufala',
    'provola',
    'pomodorino giallo'],
 impasti:[
    'normale',
    'integrale',
    'senza glutine',
    'ai cereali',
    'al carbone',
    'vegano']

};


function selezioneIngrediente(arrayIngredienti) {
    let ingredienteScelto = arrayIngredienti[ Math.floor(Math.random()*arrayIngredienti.length)];
    return ingredienteScelto;
}

 function generaIngredienti(){
    let formaggiRandom = selezioneIngrediente(ingredienti.formaggi);
    let verdureRandom = selezioneIngrediente(ingredienti.verdure);
    let proteineRandom = selezioneIngrediente(ingredienti.proteine);
    let aggiunta = document.getElementById('ingredienti');
    aggiunta.innerHTML= `${formaggiRandom}, ${verdureRandom} e ${proteineRandom}`
}


function generaAggiunta(){
    let aggiuntaRandom = selezioneIngrediente(ingredienti.aggiunte);
    let aggiunta = document.getElementById('aggiunta');
    aggiunta.innerHTML= aggiuntaRandom;
}


function generaImpasto(){
    let impastoRandom = selezioneIngrediente(ingredienti.impasti);
    let impasto = document.getElementById('impasto');
    impasto.innerHTML= impastoRandom;
}

function generaTutto() {
    generaIngredienti();
    generaAggiunta();
    generaImpasto();
}