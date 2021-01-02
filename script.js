let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()* 9)
}
const compareGuesses = (human , computer , secretTarget) => {
    if (Math.abs(secretTarget-human) <= Math.abs(secretTarget-computer)) {
        return true ;
    } else {
        return false ; 
    }

}
const updateScore = (string) => { 
    if (string === 'human') {
        humanScore ++ ;
        
    }else if (string === 'computer') {
        computerScore ++ ;
    }
}
const advanceRound = () => {
    currentRoundNumber ++ ; 
}
