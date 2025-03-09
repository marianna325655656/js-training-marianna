const prompt=require("prompt-sync")({sigint:true}); // in all of your files you have prompt-sync imported but you don't use it, if you don't use it you shouldn't import it

const size = 4;
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '* ';
    }
    console.log(row.trim()); 
}
