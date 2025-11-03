// Temperature converter
let celsius = 37;
let farenhit = (celsius * 9 / 5) + 32;

console.log(`${celsius} C =  ${farenhit} F`);

// Simple Interest Calculator
let p = 13000;
let r = 9.5;
let t = 2;

let SI = (p * r * t) / 100;
console.log("SI = ", SI);

// Number operation
let a = 25;
let b = 5;

console.log(a + b, a - b, a * b, a / b);

// Age calculator
let birthYear = 1995;
let currAge = new Date().getFullYear() - birthYear;
console.log(currAge);

// String manipulation
let name = 'Anshuman Padhi';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.split(' ', 1));

// boolean logic
let age = 30;
if (age > 18) {
    console.log('eligible to vote');
} else {
    console.log('not eligible to vote');
} 