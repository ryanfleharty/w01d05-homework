// A. Q + A
// How do we assign a value to a variable?
//const variableName = variableValue

// How do we change the value of a variable?
//variable needs to start as let variableName = versus const
//then we write let variableName = newValue

// How do we assign an existing variable to a new variable?
// let existingVariable = newVariable

// Remind me, what are declare, assign, and define?
//declare is the first time you tell the program to create a 
//variable or function
//assign is when you give a variable a new value
//define is the first time you give a variable a value

// What is pseudocoding and why should you do it?
//Pseudocoding is writing out in plain English the steps you 
//want to take to achieve a goal. It is useful because it allows
//you to think through a problem before jumping into code. That
//way you can double check that each of your steps is being 
//accomplished when you test your code.

// What percentage of time should be spent thinking about how 
//you're going to solve a problem vs actually typing in code 
//to solve it?
//75% - 90% of your time should be planning and 10%-25% should
//be typing code.



//B. Strings
// Create a variable called firstVariable.
// let firstVariable

// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";

// Change the value of this variable to some number.
firstVariable = 3;

// Store the value of firstVariable in a new variable called 
//secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = 'Here is something';

// What is the value of firstVariable?
'Here is something'

// Create a variable called yourName and set it equal to your 
//name as a string. Then, write an expression that takes the 
//string "Hello, my name is " and the variable yourName so that 
//it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

let yourName = 'Destiny Hillis';
'Hello my name is ' + yourName + '.';




//C. Booleans
//Using the provided variable definitions, replace the blanks 
//so that all log statements print true in the console. Answers 
//should be all be valid JS syntax and not weird things that 
//don't make sense but happen to print true to the console.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false === false === false === false === false === false === true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a < b < c);
console.log(a * a === d);
console.log(48 == '48');




// D. The farm
// Declare a variable animal. Set it to be either "cow" or 
//something else.
let animal = 'cow';

// Write code that will print out "mooooo" if the it is equal 
//to cow.
if (animal = 'cow') {
    console.log('mooooo');
}

// Change your code so that if the variable animal is anything 
//other than a cow, it will print "Hey! You're not a cow."
animal = 'pig';
if (animal !== 'cow') {
    console.log("Hey! You're not a cow.");
}




// E. Driver's Ed
// Make a variable that will hold a person's age. Be semantic.
let personsAge = {};

// Write code that will print out "Here are the keys", if the 
//age is 16 years or older.
if (personsAge >= 16) {
    console.log('Here are the keys.');
}

// If the age is younger than 16, a message should print 
//"Sorry, you're too young."
if (personsAge < 16) {
    console.log("Sorry, you're too young.")
}




