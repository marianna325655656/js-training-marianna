const prompt=require("prompt-sync")({sigint:true});

const size = 4;
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '* ';
    }
    console.log(row.trim()); 
}