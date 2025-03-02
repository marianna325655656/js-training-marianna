const prompt=require("prompt-sync")({sigint:true}); 

let monthName = prompt("Enter a month name: ");


switch(monthName){
    case "December" :
    case  "January" :
    case "February" :
        console.log("Winter");
        break;
    case "March" :
    case "April" :
    case "May" :
        console.log("Spring");  
        break;
    case "June" :
    case "July" :
    case "August" :
        console.log("Summer");
        break;
    case "September" :
    case "October" :
    case "November" :
        console.log("Autumn");
        break;
    default : 
        console.log("An invalid month")
}