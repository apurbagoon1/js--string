const first = 'Abid';
const last = 'Navid';

// const fullName = first + last;
// Concatenating with the plus operator
const fullName = first + ' ' + last; 

console.log(fullName); 

// Concatenating using concat() method
const fullName2 = first.concat(' ').concat(last);
console.log(fullName2); // "Abid Navid"

console.log(last.includes('x')); 
