/**
 * Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
 */


let text4 = "eXample text Xylophone";
let replacedText = "";

for (const letter of text4) {
    if (letter === 'x') {
        replacedText += 'y';
    } else if (letter === 'X') {
        replacedText += 'Y';
    } else {
        replacedText += letter;
    }
}

console.log(replacedText); 


