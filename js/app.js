/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/**
 * Listen for click on Start Game Button
 */
document.getElementById("btn__reset")
    .addEventListener("click", () => {
        game = new Game();
        game.startGame();
});

/**
 * Listen for keyup on the 'Enter' key on physical keyboard to Start Game
 */
document.addEventListener("keyup", (e) => {
        if (e.key === "Enter" && overlay.style.display === "") {
            e.preventDefault();
            document.getElementById("btn__reset").click();
        }
});
/**
 * Listen for click on onscreen keyboard buttons
 */
document.getElementById("qwerty")
    .addEventListener("click", e => {
        if (e.target.className === 'key') {
            game.handleInteraction(e.target)
        }
    });

/**
 * Listen for keyboard keyup events for physical keyboard functionality
 */
document.addEventListener("keyup", e => {
    const keys = document.querySelectorAll('.key');
    const keyboardInput = e.key;
    if (overlay.style.display === 'none') {
        keys.forEach((key) => {
            if(keyboardInput === key.textContent) {
                game.handleInteraction(key)
            }
        })
    }
    
});