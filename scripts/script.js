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

//Dropdown details

// var eerstedetails = document.querySelector("details:first-of-type");

// eerstedetails.addEventListener("toggle", event => {
//     if (eerstedetails.open) {
//         alert("ik ben open");
//     } else {
//         alert("ik ben dicht");
//     }
// });


//Hamburgermenu

var menubutton = document.querySelector("button:first-of-type");

menubutton.addEventListener("click", openMenu);

function openMenu(){
    var deheader = document.querySelector("header");
    deheader.classList.toggle("open");
}


// Slider quotes

var deButtons = document.querySelectorAll("section:nth-child(4) button");

for(i=0; i<deButtons.length; i++) {
  deButtons[i].addEventListener("click", scrollenMaar);
}

function scrollenMaar(event) {
  let deButtonWaaropGekliktIs = event.target;
  let deScrollRichting = deButtonWaaropGekliktIs.getAttribute("data-direction");
  let deSectionWaarinGescrolldGaatWorden = deButtonWaaropGekliktIs.parentNode;
  let deUlInDieSection = deSectionWaarinGescrolldGaatWorden.querySelector("ul");
  let eersteItem = deUlInDieSection.querySelector("li");
  let scrollAfstand = eersteItem.offsetWidth;
  if (deScrollRichting == "prev") {
    deUlInDieSection.scrollLeft -= scrollAfstand;
  }
  else if (deScrollRichting == "next") {
    deUlInDieSection.scrollLeft += scrollAfstand;
  }
}

// https://codepen.io/shooft/pen/zYqJLvZ