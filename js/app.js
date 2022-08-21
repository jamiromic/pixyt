// RECUPERO ELEMENTO BUTTON START DAL DOM
let buttonStart = document.querySelector('button[type="submit"]');

// RECUPERO ELEMENTO BUTTON RESET DAL DOM
let buttonReset = document.querySelector('button[type="reset"]');

// RECUPERO ELEMENTO GRID DAL DOM
let elementGrid = document.querySelector('.container');

// DICHIARO VARIABILE GRIGLIA LARGHEZZA DI DEFAULT
let inputWidth = 0;

// DICHIARO VARIABILE GRIGLIA ALTEZZA DI DEFAULT
let inputHeight = 0;

// DICHIARO ARRAY IN CUI SALVO I SINGOLI ELEMENTI PIXEL
let arrayPixel = [];


// CREO EVENT LISTENER SUL BUTTON SUBMIT
buttonStart.addEventListener('click', function() {


    // SVUOTO IL CONTENUTO DELLA GRIGLIA AD OGNI CLICK
    resetGame();

    // RECUPERO IL VALORE DELL'ELEMENTO INPUT WIDTH
    inputWidth = document.querySelector('.width').value;

    // TRASFORMO VALORE IN UN NUMERO
    inputWidth = parseInt(inputWidth);
    

    // RECUPERO IL VALORE DELL'ELEMENTO INPUT HEIGHT
    inputHeight = document.querySelector('.height').value;
    
    // TRASFORMO VALORE IN UN NUMERO
    inputHeight = parseInt(inputHeight);

    

    // INSERISCO CONTROLLO SE I NUMERI INSERITI SONO UGUALI A ZERO CREO LA GRIGLIA DI DEFAULT
    if(inputHeight + inputWidth === 0) {

        alert('Creata Griglia Default 60 x 30');
        inputHeight = 30;
        inputWidth = 60;

        
    }


    // INSERISCO CONTROLLO SE I VALORI INSERITI SONO DEI NAN CREO LA GRIGLIA DI DEFAULT
    if(isNaN(inputHeight + inputWidth)) {

        alert('Creata Griglia Default 60 x 30');
        inputHeight = 30;
        inputWidth = 60;
        
       
    } 




    // EFFETTUO UN CICLO IN CUI CREO LE RIGHE IN BASE ALLA LARGHEZZA SCELTA DALL'UTENTE
    for (let i = 0; i < inputHeight; i++) {


        // CREO ELEMENTO ROW
        let elementRow = document.createElement('div');
        // ASSEGNO CLASSE AD ELEMENTO ROW
        elementRow.className = 'row';
        // APPENDO ELEMENTO ROW AL CONTAINER
        elementGrid.append(elementRow);

    
    }


    // RECUPERO DAL DOM GLI ELEMENTI ROW
    elementsRow = document.querySelectorAll('.row');


    // EFFETTUO UN CICLO IN CUI PER OGNI ELEMENTO ROW VERRANNO CREATI n ELEMENTI PIXEL
    elementsRow.forEach(element => {


        for (let i = 0; i < inputWidth; i++) {

            // CREO ELEMENTO PIXEL
            let elementCol = document.createElement('div');
            // ASSEGNO CLASSE AD ELEMENTO PIXEL
            elementCol.className = 'pixel';
            // APPENDO ELEMENTO PIXEL ALLA ROW
            element.append(elementCol);
            // PUSHO ELEMENTO PIXEL DENTRO ARRAY PIXEL 
            arrayPixel.push(elementCol);
        
    
        }

    
    
    });


    // RECUPERO DAL DOM TUTTI GLI ELEMENTI PIXEL
    let elPixel = document.querySelectorAll('.pixel');


    elementGrid.addEventListener('click', function(EVENT)  {

        let clickedPixel = EVENT.path[0];

        clickedPixel.classList.add('bg_green');

        
     
     
        
    })


});


// RECUPERO ELEMENTO LISTA DOVE INSERIRO' I COLORI
ulColors = document.querySelector('.color_table');


// CREO ARRAY CON NOMI CLASSI COLORI PALETTE
const arrayColors = ['bg_black','bg_white','bg_rose','bg_red','bg_marron','bg_yellow','bg_orange','bg_marron1','bg_yellow1','bg_orange1','bg_marron2','bg_yellow2','bg_yellow3','bg_marron3','bg_green','bg_green2','bg_green3','bg_green4','bg_green5','bg_green6','bg_green7','bg_green8','bg_green9'];


// CREO ELENCO CON I 55 ELEMENTI PER PALETTE COLORS
for (let i = 0; i < 55; i++) {


    elColors = document.createElement('li');

    elColors.className = 'table_colors';

    elColors.classList.add(arrayColors[i]);

    ulColors.append(elColors);


    
}


// AGGIUNGO EVENT LISTENER A BOTTONE RESET
buttonReset.addEventListener('click', function() {

    resetGame();
        
});








// RECUPERO ELEMENTI CREATI PRECEDENTEMENTE
let liColors = document.querySelectorAll('.table_colors');


liColors = addEventListener('click', function(EVENT)  {

    let clickedColor = EVENT.path[0];

    console.log(Event.);

    
 
 
    
})




// FUNZIONE RESET
function resetGame() {

    elementGrid.innerHTML = '';

}

function clickedElement() {

    const clickedElement = '';
}

