const prompt=require("prompt-sync")({sigint:true});

for (let number = 1; number <= 50; number++) {
    if (number % 7 === 0) {
        console.log(`The first multiple of 7 is: ${number}`);
        break;
    }
}