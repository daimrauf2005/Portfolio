//Project Navbar

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}



//Skill set design 


document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
  });

  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  });
});