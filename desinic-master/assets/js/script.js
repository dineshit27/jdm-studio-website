'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// You can add JavaScript for additional interactivity if needed
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.querySelector('.portfolio-overlay').style.opacity = '1';
      item.querySelector('.portfolio-image').style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseleave', () => {
      item.querySelector('.portfolio-overlay').style.opacity = '0';
      item.querySelector('.portfolio-image').style.transform = 'scale(1)';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.testimonial-slide');
  let currentIndex = 0;

  // Function to show the current slide
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  };

  // Next slide
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  // Previous slide
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  // Event listeners for the next and previous buttons
  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);

  // Initial slide display
  showSlide(currentIndex);
});
