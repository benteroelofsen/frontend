// JavaScript Document

//
var tweedeLink = document.querySelector("section:first-of-type a");

tweedeLink.addEventListener("mouseOver", naarRechts);

function naarRechts () {
    var pijl = document.querySelector("section:first-of-type img");
    pijl.classList.toggle("beweeg");
}
//
//

//$(fucntion (){
//    "use strict";
//    var view = $(window).height();
//    $(".part")
//    .height(view)
//    .scrollie({
//        scrolloffset:-50,
//        scrollingInView: function (elem){
//            var bgColor = elem.data('background');
//            $("body").css('background-color', bgColor)
//        }
//    });
//});



function bgChanger() {
    if (this.scrollY > this.innerHeight / 20); {
        document.body.classList.add("bg-active");}
//    } else { document.body.classList.remove("bg-active");
//    }
}

window.addEventListener("scroll", bgChanger);

//https://www.youtube.com/watch?v=z_vvY7YX3so
