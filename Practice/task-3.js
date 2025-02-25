/**
 * Task-3:
Check whether a string contains all the vowels a, e, i, o, u
 */

const text3 = "education";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let hasAllVowels = true;

for (const vowel of vowels) {
    if (!text3.toLowerCase().includes(vowel)) {
        hasAllVowels = false;
        break;
    }
}

console.log(hasAllVowels); 