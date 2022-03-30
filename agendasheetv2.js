/* Fonction dont il faut modifier les attributions qui a un a html, ajoute une classe en fonction de son pourcentage perc*/
function percColor(elem,perc){

    if (perc > 75) {
        elem.classList.add('worst');
            }
            
    else if (perc <= 75 && perc > 50){
        elem.classList.add('verybad')
    } 
    
    else if (perc <= 50 && perc > 25){
        elem.classList.add('bad');
    }

    else if (perc <= 25 && perc > 1){
        elem.classList.add('ok');
    }
    
    else if (perc < 0 && perc > -25){
        elem.classList.add('normal');
    }
    
    else if (perc <= -25 && perc > -50){
        elem.classList.add('good');
    }

    else if (perc <= -50 && perc > -75){
        elem.classList.add('great');
    }

    else if (perc <= -75) {
        elem.classList.add('verygreat'); 
    }   
}

function vaccColor(elem,perc){

    if (perc >= 0) {
        elem.classList.add('vaccplus');
            }
            
    else if (perc < 0) {
        elem.classList.add('vaccmoins')
    } 

}


var agenda = document.getElementsByTagName('tr');
var row = agenda.item(8).innerText.split(/\s/); /* prend la ligne de la phillipine et la transforme en liste de strings*/

for (let i = 1; i < agenda.length; i++){ /* Parcourt le tableau par les lignes */

    var row_string_list = agenda.item(i).innerText.split(/\s/); /* Transforme la ligne en liste de strings */

    //WEEKLY INC RATE 

    agenda.item(i).children.item(6).innerText = parseInt(agenda.item(i).children.item(6).innerText,10) /* Transforme le weekly inc rate en nombre entier*/

    //7 DAY INC CHANGE

    var perc1 = parseFloat(row_string_list[7].slice(0,-1)); /* Valeur de type number du pourcentage attribué */
    console.log(perc1);

    var row_htmlcollection = agenda.item(i).children; /* Attribue a row_htmlcollection la ligne de type HTML */

    percColor(row_htmlcollection.item(7),perc1);

    console.log(row_htmlcollection.item(7));

    //WEEKLY DEATH (PER 100M)
    
    agenda.item(i).children.item(8).innerText = parseInt(agenda.item(i).children.item(8).innerText,10) /* Transforme le weekly inc rate en nombre entier*/

    //DEATH CHANGE

    /* Parcourt le tableau par les lignes et prélève chaque élément et son pourcentage pour les weekly infection rates */
    
    var perc2 = parseFloat(row_string_list[9].slice(0,-1)); /* Valeur de type number du pourcentage attribué */
    console.log(perc2);

    var row_htmlcollection = agenda.item(i).children; /* Attribue a row_htmlcollection l'objet de type HTML */
    
    percColor(row_htmlcollection.item(9),perc2);

    console.log(row_htmlcollection.item(9));


    //VACCINATION CHANGE

    /* Parcourt le tableau par les lignes et prélève chaque élément et son pourcentage pour les weekly infection rates */

    var perc3 = parseFloat(row_string_list[10].slice(0,-1)); /* Valeur de type number du pourcentage attribué */
    console.log(perc3);

    var row_htmlcollection = agenda.item(i).children; /* Attribue a row_htmlcollection l'objet de type HTML */


    vaccColor(row_htmlcollection.item(10),perc3);

    console.log(row_htmlcollection.item(10));


    /*
    var a = row_string_list[7];
    var perc = row_string_list.innerText.split(/\s/)[7].slice(0, -1);
    percColor(a,perc)
    */
}

