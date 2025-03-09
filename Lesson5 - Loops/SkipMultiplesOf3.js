const prompt=require("prompt-sync")({sigint:true});

for (let number = 1; number <= 20; number++) {
           if (number % 3 === 0){
             continue;
           }
           console.log(number);
         }