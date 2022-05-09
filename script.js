let menuMobile= document.getElementById("menu-list-mobile");
let menuNormal = document.getElementById("menu-list");
let buttonMobile = document.getElementById("button-mobile");

let stats = false; 
let menu = true;

function openMenu() {
    if(stats == false ) {
        menuMobile.style.visibility = "visible";
        menuMobile.style.top = "59px"
        stats = true;
    } else {
        menuMobile.style.visibility = "hidden";
        menuMobile.style.top = "-50%"
        stats = false;
    } 
}   

function updateImg() {
    if(menuMobile.style.visibility == "visible") {
        buttonMobile.src = "./img/fechar.png"
    } else {
        buttonMobile.src = "./img/abrir.png"
    }
}

buttonMobile.addEventListener("click", openMenu)
buttonMobile.addEventListener("click", updateImg)




