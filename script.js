let button = document.getElementById("menu-list-responsive");
let stats = false; 

function AbrirJanela() {
    if(stats == false ) {
        button.style.visibility = "visible";
        stats = true;
    }  else {
        button.style.visibility = "hidden";
        stats = false;

    } 
}   
