console.log("Welcome to my webpage!");

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls, click thumbnail picture and fullscreen image will show underneath the gallery
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Shows selected image at the bottom of the thumbnail gallery
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");

  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 