document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".bg1, .bg2");
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.transform = "translateX(0)";
    }, index * 300); // Delay the animation for each element
  });
});
