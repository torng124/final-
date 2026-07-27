document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  const siteHeader = document.querySelector(".site-header");

  function updateHeaderOnScroll() {
    if (window.scrollY > 20) {
      siteHeader.classList.add("is-scrolled");
    } else {
      siteHeader.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", updateHeaderOnScroll);
  updateHeaderOnScroll(); 

 
  hamburgerBtn.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("is-open");
    hamburgerBtn.classList.toggle("is-open", isOpen);

 
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamburgerBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

 
  const mobileLinks = mobileNav.querySelectorAll("a");
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("is-open");
      hamburgerBtn.classList.remove("is-open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      hamburgerBtn.setAttribute("aria-label", "Open menu");
    });
  });


  window.addEventListener("resize", function () {
    if (window.innerWidth > 860 && mobileNav.classList.contains("is-open")) {
      mobileNav.classList.remove("is-open");
      hamburgerBtn.classList.remove("is-open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      hamburgerBtn.setAttribute("aria-label", "Open menu");
    }
  });
});





const ticker = document.getElementById("ticker");
const tickerTrack = document.getElementById("tickerTrack");

let position = 0;
let speed = 1.5;
const tickerItems = Array.from(tickerTrack.children);

tickerItems.forEach(function (item) {
    const clone = item.cloneNode(true);
    tickerTrack.appendChild(clone);
});

function moveTicker() {
    position -= speed;
    const originalWidth = tickerTrack.scrollWidth / 2;
    if (Math.abs(position) >= originalWidth) {
        position += originalWidth;
    }

    tickerTrack.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(moveTicker);
}

moveTicker();