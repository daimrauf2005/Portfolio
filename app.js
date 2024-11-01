//Project Navbar

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}



//Animated text

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("animated-text");
  const phrases = [
    "MERN Stack Developer",
    "Mobile Application Developer",
  ];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
      textElement.innerHTML = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      if (currentCharIndex == 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 500); // Pause before typing new phrase
      } else {
        setTimeout(type, 100);
      }
    } else {
      textElement.innerHTML = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      if (currentCharIndex == currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause before deleting
      } else {
        setTimeout(type, 150);
      }
    }
  }
  type();
});


