var information = document.querySelector(".information");
information.classList.remove("information--nojs");

function showSlide(slideIndex) {
  var slides = document.querySelectorAll(".information__item");
  var dots = document.querySelectorAll(".information__dot");

  if (slideIndex > slides.length || slideIndex < 0) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("information__item--visible");
    slides[i].classList.add("information__item--unvisible");
  }

  for (var i = 0; i < dots.length; i++){
    dots[i].classList.remove("information__dot--active");
  }

  slides[slideIndex].classList.add("information__item--visible");
  slides[slideIndex].classList.remove("information__item--unvisible");
  dots[slideIndex].classList.add("information__dot--active");
}
