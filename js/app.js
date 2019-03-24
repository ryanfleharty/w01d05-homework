//WEEKEND HOMEWORK: WEEK 1

//Part 1A
//1. First, we declare the variable with const or let followed by the variable name. Then we use the assignment operator to connect it to its value. Then we define the value.
//2. You can change the value of a variable by editing its original declaration or creating a new declaration with a new value.
//3. You place the existing variable inside the definition of the new variable.
//4. Declare is the first part, which contains the declarer, const or let, and the variable name. Assign is the work of the assignment operator. Define occurs after the assignment operator, declaring the value of the variable.
//5. It's the best, that's what it is. It helps you put your thoughts in writing so you know how to code before you start coding.
//6. 75% of coding should be spent in psuedocoding.

//Part 1B
/**
let firstVariable = "Hello World";
firstVariable = 36;
let secondVariable = firstVariable;
secondVariable = "This is a cat.";
console.log(firstVariable);


let yourName = "John Michael Oro";
let greeting = "Hello, my name is " + yourName + ".";
console.log(greeting);
**/

//Part 1C
/**
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false === false === false === false === false === false === true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a * a === d);
console.log(48 == '48');
**/

//Part 1D
//Declare a variable animal. Set it to be either "cow" or something else.
//Write code that will print out "mooooo" if the it is equal to cow.
//If not equal to cow, print "Hey! You're not a cow."
/**
let animal = "cow";
if(animal === "cow") {
  console.log("Mooooo!");
}
animal = "cat";
 if(animal != "cow") {
   console.log("Hey, you're not a cow!");
 }
 **/

//Part 1E
/**
let joesAge = 17;
if(joesAge > 15) {
  console.log("Here are the keys, Joe.");
}
if(joesAge < 16) {
  console.log("Sorry, you're too young, Joe.");
}
**/

//Part 2A
/**
for (let i = 1; i < 11; i++) {
  console.log(i);
}

for (let i = 10; i < 401; i++) {
  console.log(i);
}

for (let i = 12; i < 4001; i+=3) {
  console.log(i);
}
**/

//Part 2B

for (let i = 0; i < 101; i+=2) {
  console.log(i + " is an even number.");
}
