/***
 * Task-5:
Capitalize Every first Letter of each word in a String
 */


const text5 = "hello world this is javascript";
const words = text5.split(" ");
let capitalizedText = "";

for (let i = 0; i < words.length; i++) {
    capitalizedText += words[i][0].toUpperCase() + words[i].slice(1);
    if (i < words.length - 1) {
        capitalizedText += " ";
    }
}

console.log(capitalizedText);
