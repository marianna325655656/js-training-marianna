const prompt=require("prompt-sync")({sigint:true});

let number = 5;
for (let i = 1; i <= 10; i++) {
    let result = number * i;
     console.log(`${number} x ${i} = ${result}`);
    console.log(result);
}