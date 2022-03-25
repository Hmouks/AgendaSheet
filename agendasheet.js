var agenda = document.getElementsByTagName('tr');
var row = agenda.item(8).innerText.split(/\s/);


for (let i = 0; i < agenda.length; i++){
    var line = agenda.item(i).innerText.split(/\s/);
    var element = agenda.item(i)[7];
    var perc = parseFloat(line[7].slice(0,-1));
    console.log(line);
    percColor(element,perc);
    /*var element = line[7];
    var perc = line.innerText.split(/\s/)[7].slice(0, -1);
    percColor(element,perc)*/
}

function percColor(element,perc){

    if (perc > 0.75) {
        element.classList.add('very-great');
            }
            
    else if (perc <= 0.75 && perc > 0.5) {
        element.classList.add('great')
    } 
    
    else if (perc <= 0.5 && perc > 0.25) {
        element.classList.add('good');
    }

    else if (perc <= 0.25 && perc > 0.01) {
        element.classList.add('normal');
    }
    
    else if (perc <= 0 && perc > -0.25) {
        element.classList.add('ok');
    }
    
    else if (perc <= -0.25 && perc > -0.5) {
        element.classList.add('bad');
    }

    else if (perc <= -0.5 && perc > -0.75) {
        element.classList.add('very-bad');
    }

    else if (perc <= -0.75) {
        element.classList.add('worst'); 
    }   
}

function dynamicPercentageColors(agenda){

    for (row in agenda){

        var element = row[8];
        console.log(element)
    }
    
}

