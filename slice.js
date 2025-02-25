const address = 'andorKilla';
const part = address.slice(2, 5);
console.log(part); // "dor"

const sentence = 'I am a good and hardworking person.';
const words = sentence.split(' ');
console.log(words); // ['I', 'am', 'a', 'good', 'and', 'hardworking', 'person']
// console.log(sentence.split('a'));

const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendsStr.split(',');
console.log(friends); // ['Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim']

console.log(friends.join()); 
console.log(friends.join(' | ')); 
console.log(friends.join('-')); 
