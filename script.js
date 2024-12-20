window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".scroll-item");
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight / 1.2) {
      section.classList.add("show");
    }
  });
});

// Adding a dramatic fade-in effect for the header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.style.opacity = 0;
  header.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => {
    header.style.opacity = 1;
  }, 500);
});
