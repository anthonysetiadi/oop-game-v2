/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        const phraseSection = document.getElementById("phrase");
        const phraseList = phraseSection.firstElementChild;
        const phraseLetters = this.phrase.split('');
        phraseLetters.forEach(letter => {
            if (letter === ' ') {
                let spaceHTML = `<li class="space"> </li>`;
                phraseList.insertAdjacentHTML('beforeend', spaceHTML)
            } else {
                let letterHTML = `<li class="hide letter ${letter}">${letter}</li>`
                phraseList.insertAdjacentHTML('beforeend', letterHTML)
            }
        })

    };

/**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */
    checkLetter(letter) {
       return this.phrase.includes(letter) 
    };

/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.letter')
        letters.forEach((li) => {
            if (li.textContent === letter)
            li.className = "show";
        })        
    };

}