console.log('Up and running');

//I. Variables & Datatypes
// A. Q + A
// 1. How do we assign a value to a variable?
// We assign a value to a variable by referencing its name and setting it = to the value.
// let newVar = 1;
// 2. How do we change the value of a variable?
// newVar =2;
// We can change the value of a variable again by setting it's name  = to the new value.
// 3. How do we assign an existing variable to a new variable?
// We declare a new const/let/var variable with a new name and set this = to the existing variable's name.
// let newVar = oldVar;
// 4. Remind me, what are declare, assign, and define?
// Declare is simply naming the variable and indicating whether it is let, const, or var which tells the program to allocate memory for it.
// const declaredVar;
// We can Define a variable at the same time as declaring it with the =, it sets the initial value.
// const definedVar = 10;
// Assign sets the previously declared var to a value, which can happen when defining or later when re-"assigned".
// assignedVar = 5;
// Define
// 5. What is pseudocoding and why should you do it?
// Pseudocoding is writing out in words (sometimes with code snippets for shorthand), the steps you plan to code to solve a problem.
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// A good rule of thumb is about 75% or more planning and 25% writing code.

// B. Strings
// 1. Create a variable called firstVariable.
let firstVariable;
// -Assign it the value of the string "Hello World"
firstVariable = 'Hello World';
// -Change the value of this variable to some number.
firstVariable = 9;
// -Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// -Change the value of secondVariable to any string.
secondVariable = 'Javascript is fun!';
// -What is the value of firstVariable?
// 9
// 2. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
const myName = 'Jake';
console.log('Hello, my name is ' + myName);
// or
const printGreeting = () => {
  return 'Hello, my name is ' + myName;
};
console.log(printGreeting());

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false || false || false || false || false || false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a === a !== d);
console.log(48 == '48');

// D. The farm
// 1. Declare a variable animal. Set it to be either "cow" or something else.
let animal = "cow";
// 2. Write code that will print out "mooooo" if the it is equal to cow.
if (animal === 'cow') {
  console.log('mooooo');
}
// 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
animal = 'duck';
if (animal === 'cow') {
  console.log('mooooo');
} else {
  console.log("Hey! You're not a cow.");
}
// 4. Commit.

// E. Driver's Ed
// 1. Make a variable that will hold a person's age. Be semantic.
let age = 21;
// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
if (age >= 16) {
  console.log('Here are the keys');
}
// 3. If the age is younger than 16, a message should print "Sorry, you're too young."
age = 15;
if (age >= 16) {
  console.log('Here are the keys');
} else {
  console.log("Sorry, you're too young.");
}

// // II. Loops
// // A. The basics
// // Write a loop that will print out all the numbers from 0 to 10, inclusive.
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400.
// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000.
// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }

// // B. Get Even
// // 1. Print out the even numbers that are within the range of 1 - 100.
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for (let i = 2; i <= 100; i += 2) {
  console.log(`${i} <-- is  an even number`);
}

// C. Give me Five
// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
for (let i = 0; i <= 100; i++) {
  if (i === 0) {
    // do nothing
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  }
  // else do nothing
}
// 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
for (let i = 0; i <= 100; i++) {
  if (i === 0) {
    // do nothing
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  }
  // else do nothing
}

// D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
let bank_account = 0; 
for (let i = 0; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);
// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0; 
for (let i = 0; i <= 100; i++) {
  bank_account += 2 * i;
}
console.log(bank_account);

// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Skipped as was already solved before in HW for Project Euler.

// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
// The things in an array are called its 'elements'.
// Do Arrays guarantee those things will be in order?
// No you would want to sort() an array if you want them in a specific order. However, they will all have sequential indices to access the elements.
// What real-life thing could you model with an array?
// A music player's playlist might be a good real-life thing to model in a simple array.

