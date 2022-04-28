let menuMobile= document.getElementById("menu-list-mobile");
let menuNormal = document.getElementById("menu-list");
let buttonNav = document.getElementById("button-navbar");
let buttonImg = document.getElementById("button-img")


let stats = false; 
let menu = true;

function AbrirJanela() {
    if(stats == false ) {
        menuMobile.style.visibility = "visible";
        stats = true;
    } else {
        menuMobile.style.visibility = "hidden";
        stats = false;
    } 
}   

function updateImg() {
    if(menuMobile.style.visibility == "visible") {
        buttonImg.src = "/_img/excluir.png"
    } else {
        buttonImg.src = "/_img/cardapio.png"
    }
}


buttonNav.addEventListener("click", AbrirJanela)
buttonNav.addEventListener("click", updateImg)




