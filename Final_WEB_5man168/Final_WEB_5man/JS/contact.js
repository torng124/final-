// Mobile Menu

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

hamburgerBtn.addEventListener("click", () => {

    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }

});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    contactForm.reset();

});