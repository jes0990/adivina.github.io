let secretNumber = Math.floor(Math.random() * 101);
let attempts = 0;
let minGuess = 0;
let maxGuess = 100;

function guessNumber() {
    const guessInput = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const guess = parseInt(guessInput.value);
    const guessButton = document.querySelector("button");
    
    if (isNaN(guess) || guess < 0 || guess > 100) {
        feedback.textContent = "Por favor, ingresa un número válido entre 0 y 100.";
        return;
    }
    
    attempts++;
    
    if (guess < secretNumber) {
        minGuess = Math.max(minGuess, guess + 1); // El nuevo rango mínimo es el número ingresado + 1
        feedback.textContent = `El número es mayor. Inténtalo de nuevo.`;
    } else if (guess > secretNumber) {
        maxGuess = Math.min(maxGuess, guess - 1); // El nuevo rango máximo es el número ingresado - 1
        feedback.textContent = `El número es menor. Inténtalo de nuevo.`;
    } else {
        feedback.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        guessInput.disabled = true;
        guessButton.disabled = true;
        // Mostrar botón para reiniciar el juego
        const resetButton = document.createElement("button");
        resetButton.textContent = "Volver a jugar";
        resetButton.onclick = resetGame;
        document.body.appendChild(resetButton);
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 101);
    attempts = 0;
    minGuess = 0;
    maxGuess = 100;
    
    const guessInput = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const guessButton = document.querySelector("button");
    
    guessInput.disabled = false;
    guessButton.disabled = false;
    feedback.textContent = "";
    guessInput.value = "";
    
    // Eliminar el botón de reiniciar
    const resetButton = document.querySelector("button:last-of-type");
    resetButton.remove();
}
