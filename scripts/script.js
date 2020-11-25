// JavaScript Document

//
var tweedeLink = document.querySelector("section:first-of-type a");

tweedeLink.addEventListener("mouseOver", naarRechts);

function naarRechts () {
    var pijl = document.querySelector("section:first-of-type img");
    pijl.classList.toggle("beweeg");
}


function bgChanger() {
    if (this.scrollY > this.innerHeight / .6 &&
       this.scrollY < this.innerHeight * 3){
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
}


window.addEventListener("scroll", bgChanger);

//https://www.youtube.com/watch?v=z_vvY7YX3so
