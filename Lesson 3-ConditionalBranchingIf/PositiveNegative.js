const prompt=require("prompt-sync")({sigint:true}); 

let num = prompt("Enter a number: ")

if(num==0){
    console.log("Zero");
}else if (num >0){
    console.log("Positive");
}else if(num < 0){
    console.log("Negative");
}


