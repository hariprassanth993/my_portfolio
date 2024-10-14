
 const typingText = document.querySelector('.typing-text');
const words = ["Web Designer", "Developer", "Freelancer"];
let wordIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 1000;

function type() {
    const currentWord = words[wordIndex];
    const textContent = typingText.textContent;
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, textContent.length - 1);
    } else {
        typingText.textContent = currentWord.substring(0, textContent.length + 1);
    }

    if (!isDeleting && typingText.textContent === currentWord) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
    } else if (isDeleting && typingText.textContent === '') {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingText) {
        type();
    }
});
