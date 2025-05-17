// togleBT
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// scroll-up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

// scroll header
const scrollHeader = () => {
  const header = document.getElementById("navbar");
  if (scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};

window.addEventListener("scroll", scrollHeader);

// scroll section
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaeBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// scroll reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data , .about__top , .popular__top , .review__top , .review__swiper");
sr.reveal(".home__image", {delay: 500 , scale: 0.5});

sr.reveal(".service__card , .popular__card" , {interval: 100})

sr.reveal(".about__life" , {origin: 'right'})
sr.reveal(".review__life" , {delay:1000 , origin: 'left'})

sr.reveal(".about__item__1-img , .about__item__2-content" , {origin: 'right'})
sr.reveal(".about__item__1-content , .about__item__2-img" , {origin: 'left'})
