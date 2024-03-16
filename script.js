
const words = ["THE GAME IS ON.", "Alone is what I have, alone protects me...", "I'm not a PSYCHOPATH, I'm a high-functioning SOCIOPATH. Do your research"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const targetElement = document.getElementById("typewriter");

    if (isDeleting) {
        targetElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    } else {
        targetElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
        }
    }

    setTimeout(type, 150);
}

type();
