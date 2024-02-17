let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Returns a random integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// Compares guesses to see which player is closer
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanResult = Math.abs(secretTarget - humanGuess);
    const computerResult = Math.abs(secretTarget - computerGuess);
    return humanResult <= computerResult ? true : false;
};

// Updates score for winning player
const updateScore = winner => winner === 'computer' ? computerScore++ : humanScore++;