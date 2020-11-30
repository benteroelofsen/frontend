// JavaScript Document

//achtegrondkleur laten veranderen


function bgChanger() {
    if (this.scrollY > this.innerHeight / .5 &&
        this.scrollY < this.innerHeight * 4) {
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll", bgChanger);

// https://www.youtube.com/watch?v=z_vvY7YX3so

var eerstedetails = document.querySelector("details:first-of-type");

//Dropdown details

eerstedetails.addEventListener("toggle", event => {
    if (eerstedetails.open) {
        alert("ik ben open");
    } else {
        alert("ik ben dicht");
    }
});


//Hamburgermenu

var menubutton =document.querySelector("button:first-of-type");

menubutton.addEventListener("click", openMenu);

function openMenu(){
    var hetmenu = document.querySelector("header nav");
    hetmenu.classList.toggle("open");
}

//van menu naar kruisje

//var menustrepen =document.querySelector("button:first-of-type");
//
//menustrepen.addEventListener("click", kruis);
//
//function kruis(){
//    var streepboven = document.querySelector("button::after");
//    var streeponder = document.querySelector("button::before");
//
//    streepboven.classList.toggle("gekruisd");
//    streeponder.classList.toggle("gekruisd");
//}
