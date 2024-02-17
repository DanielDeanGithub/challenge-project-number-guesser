let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Returns a random integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// Calculates absolute distance between two values
const getAbsoluteDistance = (a, b) => Math.abs(a -b);

// Compares guesses to see which player is closer
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if (humanGuess < 0 || humanGuess > 9) return alert('Please enter a number between 0 and 9.');
    const humanResult = getAbsoluteDistance(secretTarget, humanGuess);
    const computerResult = getAbsoluteDistance(secretTarget, computerGuess);
    return humanResult <= computerResult ? true : false;
};

// Updates score for winning player
const updateScore = winner => winner === 'computer' ? computerScore++ : humanScore++;

// Increases game round number
const advanceRound = () => currentRoundNumber++;