document.addEventListener("DOMContentLoaded", function () {
    const animatedWordsElement = document.getElementById("animated-words");
    const words = ["SQL Resolver","Data Engineer", "Data Analyst", "Problem Solver","Python Developer","SysDesign Enthu"];

    let currentWordIndex = 0;
    let currentLetterIndex = 0;

    function animateWords() {
        const currentWord = words[currentWordIndex];
        animatedWordsElement.textContent = currentWord.substring(0, currentLetterIndex);
        currentLetterIndex++;

        if (currentLetterIndex > currentWord.length) {
            currentLetterIndex = 0;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(animateWords, 1000); // Delay before starting the next word
        } else {
            setTimeout(animateWords, 100); // Delay between letter animations
        }
    }

    // Start the animation
    animateWords();
});
