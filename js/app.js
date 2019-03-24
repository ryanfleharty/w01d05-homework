console.log("RUNNING");
// I. Variables & Datatypes

// A. Q + A

// How do we assign a value to a variable?
    let variable = "value"; //CANNONT USE CONST....ONLY VAR OR LET

// How do we change the value of a variable?
    variable = "newValue";
// How do we assign an existing variable to a new variable?
    let newVariable = variable;
// Remind me, what are declare, assign, and define?
    var something; //declare
    var something = 12; //define
    something = variable; //assign NOW = newValue via variable

// What is pseudocoding and why should you do it?
    
    /*Pseudocoding is a detailed, yet readable description of what a computer program 
    or algorithm os trying to solve. No syntax is used and it is meant for descriping the 
    flow of the program while not getting into detail. It is necesary when planning out a complex problem`*/

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    /*According to prior lab on objects, "Timewise, programming is 
        75-90% planning, and 10-25% actually typing code.".*/

// 🔴 Commit.//DONE

// B. Strings

// Create a variable called firstVariable.
    let firstVariable;
// Assign it the value of the string "Hello World"
    firstVariable = "Hello World";
// Change the value of this variable to some number.
    firstVariable = 37;
// Store the value of firstVariable in a new variable called secondVariable
    let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
    secondVariable = "String";
// What is the value of firstVariable?
    //  37
// Create a variable called yourName and set it equal to your name as a string. 
    let yourName = "Shadi";
// Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
    let expression = "Hello, my name is " + yourName + "!";
// ex: Hello, my name is Jean Valjean

// 🔴 Commit. //DONE

// C. Booleans

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a != b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true != false);
  console.log(false || false || false|| false || false || false || true); // if ANY true, will return true
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b < c);
  console.log(a == a !== d);
  console.log(48 !== '48'); //strict equal w/ data type
// 🔴 Commit.

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else.
 let animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow.
 
let makeNoise = () => {
     if (animal === "cow") {
         console.log("mooooooo");
     }};

     makeNoise();

// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
makeNoise = () => {
    if (animal === "cow") {
        console.log("mooooooo");
    } else (console.log("Hey, you're not a cow!!"))
    };

    animal = "quack!";
    makeNoise(); //WILL ONLY SHOW NEW MESSAGE IF ANIMAL IS REDEFINED BEFORE
// Commit.
// 🔴 Commit.

// E. Driver's Ed

// Make a variable that will hold a person's age. Be semantic.

// Write code that will print out "Here are the keys", if the age is 16 years or older.

// If the age is younger than 16, a message should print "Sorry, you're too young."

// 🔴 Commit.


