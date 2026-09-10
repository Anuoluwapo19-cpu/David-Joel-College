/* ================= HAMBURGER MENU ================= */

let hamburger = document.getElementById("hamburger");

let nav = document.getElementById("nav");


hamburger.addEventListener("click", function () {

    nav.classList.toggle("active");

});


/* ================= EVENT IMAGE SLIDER ================= */

let images = [

    "images/sport1.jpg",

    "images/sport2.jpg",

    "images/sport3.jpg",

    "images/sport4.jpg",

    "images/sport5.jpg",

    "images/sport6.jpg"

];


let currentImage = 0;


let eventImage =
    document.getElementById("eventImage");


let nextBtn =
    document.getElementById("nextBtn");


let prevBtn =
    document.getElementById("prevBtn");


let dots =
    document.querySelectorAll(".dot");


/* SHOW IMAGE */

function showImage(index) {

    currentImage = index;

    eventImage.src = images[currentImage];


    /* Remove active from all dots */

    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    /* Add active to current dot */

    dots[currentImage].classList.add("active");

}


/* NEXT IMAGE */

nextBtn.addEventListener("click", function () {

    currentImage++;

    if (currentImage >= images.length) {

        currentImage = 0;

    }

    showImage(currentImage);

});


/* PREVIOUS IMAGE */

prevBtn.addEventListener("click", function () {

    currentImage--;

    if (currentImage < 0) {

        currentImage = images.length - 1;

    }

    showImage(currentImage);

});


/* DOTS */

dots.forEach(function(dot, index) {

    dot.addEventListener("click", function () {

        showImage(index);

    });

});