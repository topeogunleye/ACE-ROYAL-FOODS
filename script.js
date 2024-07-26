/* script.js */
function scrollLeft() {
  const carousel = document.querySelector(".carousel-items");
  carousel.scrollBy({ left: -200, behavior: "smooth" });
}

function scrollRight() {
  const carousel = document.querySelector(".carousel-items");
  carousel.scrollBy({ left: 200, behavior: "smooth" });
}
