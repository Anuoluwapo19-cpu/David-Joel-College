// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// Close menu when a navigation link is clicked

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// ================= FOOTER YEAR =================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});


// ================= EVENT SLIDER =================

const slides = document.querySelectorAll(".event-slide");

const previousBtn = document.getElementById("previous");

const nextBtn = document.getElementById("next");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


// ================= SHOW SLIDE =================

function showSlide(index) {

    // Hide all pictures

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    // Remove active from all dots

    dots.forEach(function (dot) {

        dot.classList.remove("active-dot");

    });


    // Show selected picture

    slides[index].classList.add("active");


    // Make selected dot active

    dots[index].classList.add("active-dot");

}


// ================= NEXT BUTTON =================

nextBtn.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

});


// ================= PREVIOUS BUTTON =================

previousBtn.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

});


// ================= DOTS =================

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


// =========================
// NEWS & UPCOMING EVENTS
// =========================

const newsTabs = document.querySelectorAll(".news-tab");
const newsContents = document.querySelectorAll(".news-content");

newsTabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        const newsId = tab.getAttribute("data-news");


        // Remove active class from all tabs

        newsTabs.forEach(function(item) {
            item.classList.remove("active");
        });


        // Remove active class from all news content

        newsContents.forEach(function(content) {
            content.classList.remove("active");
        });


        // Add active class to clicked tab

        tab.classList.add("active");


        // Show matching news

        const selectedNews = document.getElementById(newsId);

        selectedNews.classList.add("active");

    });

});