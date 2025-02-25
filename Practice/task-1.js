/**
 * Task-1:
Count how many times a string has the letter a
 */

const text1 = "banana";
let count1 = 0;

for (const letter of text1) {
    if (letter === 'a') {
        count1++;
    }
}

console.log(count1); 
