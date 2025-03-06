const prompt=require("prompt-sync")({sigint:true}); 

let score = 10;

let startingScore = prompt("Your starting score is: " + score);

while (score > 0) {
    let answer = prompt("Did you answer correctly? (yes/no)");

    if (answer === 'yes') {
        score++;
        console.log("Your score is now: " + score);
    } else if (answer === 'no') {
        score--; 
        console.log("Your score is now: " + score);
    } else {
        console.log("Please type 'yes' or 'no'.");
    }

    if (score === 0) {
        console.log("Game Over");
    }
}


