// JavaScript Document

//achtegrondkleur laten veranderen


function bgChanger() {
    if (this.scrollY > this.innerHeight / .6 &&
        this.scrollY < this.innerHeight * 4.9) {
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

var menubutton = document.querySelector("button:first-of-type");

menubutton.addEventListener("click", openMenu);

function openMenu(){
    var hetmenu = document.querySelector("header nav");
    hetmenu.classList.toggle("open");
}


// Verandering pijltjes

// var beidepijlen = document.getElementById("beide-pijlen");

// beidepijlen.addEventListener("click", veranderPijlen);

// function veranderPijlen (){
//     var linkerpijl = document.getElementById("pijl-links");
//     linkerpijl.classList.toggle("huidige");
