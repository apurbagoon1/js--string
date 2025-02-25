const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase()); // Converts to lowercase
console.log(school.toUpperCase()); // Converts to uppercase

const subject = 'Chemistry';
const book = 'ChemIsTry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading the book, for good result in the exam!');
} 
else {
    console.log("I don't need book, I won't have to study hard!");
}

const drink = ' water';
const liquid = 'water ';

if(drink.trim() === liquid.trim()){
    console.log('Water is the essence of life');
} 
else {
    console.log('Sea water is too salty for consumption!');
}
