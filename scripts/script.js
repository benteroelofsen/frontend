// JavaScript Document

//achtegrondkleur laten veranderen


function bgChanger() {
    if (this.scrollY > this.innerHeight / .6 &&
        this.scrollY < this.innerHeight * 4.9) {
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
    if (this.scrollY > this.innerHeight / 1.6) {
      document.body.classList.add("invliegen");
    }
}

window.addEventListener("scroll", bgChanger);

// https://www.youtube.com/watch?v=z_vvY7YX3so

//Dropdown details

var eerstedetails = document.querySelector("details:first-of-type");
var tweededetails = document.querySelector("details:nth-of-type(2)");
var derdedetails = document.querySelector("details:nth-of-type(3)");
var vierdedetails = document.querySelector("details:nth-of-type(4)");

eerstedetails.addEventListener("toggle", event => {
    tweededetails.removeAttribute("open");
    derdedetails.removeAttribute("open");
    vierdedetails.removeAttribute("open");
});

tweededetails.addEventListener("toggle", event => {
  eerstedetails.removeAttribute("open");
  derdedetails.removeAttribute("open");
  vierdedetails.removeAttribute("open");
});

derdedetails.addEventListener("toggle", event => {
  eerstedetails.removeAttribute("open");
  tweededetails.removeAttribute("open");
  vierdedetails.removeAttribute("open");
});

vierdedetails.addEventListener("toggle", event => {
  eerstedetails.removeAttribute("open");
  tweededetails.removeAttribute("open");
  derdedetails.removeAttribute("open");
});

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
  deButtons[i].addEventListener("click", horizontaalScrollen);
}

function horizontaalScrollen(event) {
  let geklikteButton = event.target;
  let scrollRichting = geklikteButton.getAttribute("data-direction");
  let sectionScrollen = geklikteButton.parentNode;
  let deUl = sectionScrollen.querySelector("ul");
  let eersteItem = deUl.querySelector("li");
  let scrollAfstand = eersteItem.offsetWidth;
  if (scrollRichting == "prev") {
    deUl.scrollLeft -= scrollAfstand;
  }
  else if (scrollRichting == "next") {
    deUl.scrollLeft += scrollAfstand;
  }
}

// https://codepen.io/shooft/pen/zYqJLvZ