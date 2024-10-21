//CORE MODULES
const readline = require('readline');
const fs = require('fs');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Please enter your naame: ", (name) => {
//     console.log("You entered: "+name);
//     rl.close();
// })

// rl.on('close', () => {
//     console.log("Interface closed");
//     process.exit(0);
// })


/*LECTURE 5: CODE EXAMPLE************
READING & WRITING TO A FILE
************************************* */
let textIn = fs.readFileSync('./Files/input.txt', 'utf-8'); //10min
console.log(textIn)

let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date().toDateString()}`
fs.writeFileSync('./Files/output.txt', content);