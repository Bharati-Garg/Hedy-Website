document.addEventListener("DOMContentLoaded", function () {
  // Button hover animation
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.1)";
      btn.style.transition = "0.3s ease-in-out";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });

  // Image animation
  let images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.classList.add("img-zoom");
  });
});
