const country = 'Bangladesh';
const division = "Newkhale";
const district = `B-Baria`;

// const thana = new String('Demra');
// console.log(thana);

const numbers = [54, 98, 78, 21, 65];
console.log(numbers);

// console.log(numbers.length);
// console.log(numbers[1])

numbers[1] = 11; // Changing an array element
console.log(numbers);


// string is immutable --> not changeable
// array is mutable --> you can change the array elements

const capital = 'Dhaka';
console.log(capital);
// console.log(capital.length);
// console.log(capital[3]);
capital[0] = 'F'; // String is immutable; this does not change the string
console.log(capital); // "Dhaka"
