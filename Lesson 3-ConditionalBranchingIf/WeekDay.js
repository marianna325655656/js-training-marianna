const prompt=require("prompt-sync")({sigint:true}); 

let weekDay = prompt("Enter a day: ");

if(weekDay ==='Saturday' || weekDay=== 'Sunday'){
   console.log("It's the weekend!")
}else if(weekDay === 'Monday' ||
    weekDay === 'Thuesday' ||
    weekDay === 'Wednesday' ||
    weekDay === 'Thursday' ||
    weekDay === 'Friday' ){
        console.log("It's a weekday");
    }