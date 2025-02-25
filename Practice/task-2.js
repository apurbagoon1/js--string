/**
 * Task-2:
Count how many times a string has the letter a or A
 */

const text2 = "Apple and banana";
let count2 = 0;

for (const letter of text2) {
    if (letter === 'a' || letter === 'A') {
        count2++;
    }
}

console.log(count2); 
