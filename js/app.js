// JavaScript weekend REPS!

// I. VARIABLES & DATA TYPES
// A. Q + A
// 1
var x = "y";
// 2
x = "z";
// 3
var y = x;
// 4
// declare is is to create a variable using "var", "let", or "const".
// assign is to give a variable a certain value
// define is to give a variable a new value
// 5
// pseudocoding is writing out each step of a code, what it will
// be doing, in English. It is good to plan and keep things organized.
// 6
// whatever percent of time is necessary, so usuaslly about 60%-40%.

// B. Strings
// 1
let firstVariable = "hello world";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = 8;
// the value of firstVariable is 5.
// 2
const yourName = "Will";
const newStr = `Hello, my name is ${yourName}.`

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false === false && false === false && false === false && true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log((a === a) < d);
console.log(48 == '48');

// D. THE FARM
// 1-4
const animals = "cow";
const areYouACow = (animal) => {
  if (animal === "cow"){
    console.log("moooooo");
  } else {
    console.log("hey! you're not a cow!");
  }
  return animal
}
