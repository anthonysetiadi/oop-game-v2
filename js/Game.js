/* Treehouse FSJS Techdegree
* Game.js */

// Global Variables
const overlay = document.getElementById("overlay");

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

/**
 * Creates phrases for use in game
 * @return {array} An array of phrases that could be used in the game 
 */

    createPhrases(phrase) {
        const phrases = [
            new Phrase("You got mail"),
            new Phrase("Coding is fun"),
            new Phrase("Never give up"),
            new Phrase("Escape and create"),
            new Phrase("Masters of Scale")
        ]
        return phrases;
    }


/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)]
    };

/**
 * Begins game by selecting a random phrase and displaying it to user
 */
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        overlay.className = "start";
    };

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */
    checkForWin() {
        const hidden = document.querySelectorAll(".hide");
        return hidden.length === 0;
    };

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
    removeLife() {
        const tries = document.querySelectorAll('img')
        tries[this.missed].src = "images/lostHeart.png";
        this.missed++;
        if (this.missed >= 5) this.gameOver();  
    };

/**
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
    gameOver(gameWon) {
        overlay.style.display = '';
        let gameOverMessage = document.getElementById("game-over-message")
        const overlayStyle = document.querySelector(".start")
        if (gameWon) {
            gameOverMessage.innerHTML = "Well done. You have won the game."
            overlayStyle.className = "win";
        } else {
            gameOverMessage.innerHTML = "Sorry, you have run out of lives. Please try again." 
            overlayStyle.className = "lose";
        }
        this.resetGame();
    };

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
    handleInteraction(button) {
        button.disabled = true
        if (!this.activePhrase.checkLetter(button.textContent)) {
            button.setAttribute("class", "wrong")
            this.removeLife()
        } else if (this.activePhrase.checkLetter(button.textContent)) {
            button.setAttribute("class", "chosen")
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()){
                this.gameOver(this.checkForWin())
            }
        }
    };

/**
 * Resets the game to original display
 */
    resetGame(){
        document.querySelector('#phrase ul').innerHTML = "";
        const buttons = document.querySelectorAll("#qwerty button");
        buttons.forEach((button) => {
            button.className = "key";
            button.disabled = false;
        });
        const lives = document.querySelectorAll('.tries img')
            lives.forEach((heart) => {
            heart.src = "images/liveHeart.png";
        })
    };

};


