const prompt=require("prompt-sync")({sigint:true});

let score = prompt("Enter the score: ");

if(score >= 50){
    console.log('Pass');
}else {
    console.log('Fail');
}