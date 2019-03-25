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
// 🔴 Commit. //DONE

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
// 🔴 Commit. // DONE

// E. Driver's Ed

// Make a variable that will hold a person's age. Be semantic.
    let personAge = 25;
    

// Write code that will print out "Here are the keys", if the age is 16 years or older.
    const printMsg = () => {
        if (personAge > 16) {
            return "Here are the keys"
        } else {
            return "Sorry, your too young"
    }};

    console.log(printMsg());

// If the age is younger than 16, a message should print "Sorry, you're too young."

personAge = 12;  //NOW PRINTS "SORRY..."
console.log(printMsg());

// 🔴 Commit. //DONE


// ## II. Loops
// Remember: **USE `let` when you initialize your for loops!**
// This is GOOD: `for(`**`let i = 0;`**` i < 100; i++)`
// This is NO GOOD: `for(i = 0; i < 100; i++)`

// ### A. The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
    
    for (let i = 0; i <= 10; i ++) {
        console.log(i);
    };

// 2. Write a loop that will print out all the numbers from 10 up to and including 400.
    for (let i = 10; i <= 400; i ++) {
        console.log(i);
    };

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
    for (let i = 12; i < 4000; i+= 3) {     //MUST add "= after "+ if incrementing by more than 1
        console.log(i);
    };

// :red_circle: Commit. //DONE

// ### B. Get even

// 1. Print out the even numbers that are within the range of 1 - 100.
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    };

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
    for (let i = 2; i <= 100; i += 2) {
        console.log(`${i} is the even number`);
    };

// :red_circle: Commit. //DONE


// ### C. Give me Five
// 1. For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.

    for (let i = 5; i <= 100; i ++) {
        if (i % 5 === 0){
            console.log(`I found a ${i}. High Five!`);
        }};

// 2. Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.
    for (let i = 3; i <= 100; i ++) {
        if (i % 3 === 0){
            console.log(`I found a ${i}. Three is a crowd`);
        }};


for (let i = 3; i <= 100; i ++) {
    if (i % 5 === 0){
        console.log(`I found a ${i}. High Five!`);
    } if (i % 3 === 0){
            console.log(`I found a ${i}. Three is a crowd`);
        }};

// :red_circle: Commit. //DONE


// ### D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    var bankAccount = 0;                        //DECLARE GLOBALLY
    let numberSum = () => {
        for (let i = 0; i < numbers.length; i++) {
            bankAccount = bankAccount += numbers[i];   //+= add to variable bankAccount which starts at zero
        };
        console.log(bankAccount);  //Will display info in console
    };
    numberSum();
   
// >Check your work! Your bank_account should have $55 in it.

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

    var bankAccount2 = 0;                        
    let numberSum2 = () => {
        for (let i = 0; i <= 100; i++) {
            bankAccount2 = (bankAccount2 += i);  
            bankAccount3 = bankAccount2 * 2; 
        };
        console.log(bankAccount3);  
    };
    numberSum2();


// >Check your work! Your banck_account should have $10,100 in it.

// :red_circle: Commit. //DONE


// ### E. Multiples of 3 and 5

// Find the sum of all the multiples of 3 or 5 below 1000.  
// If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.
const sum = [];
const multiples = () => {
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0){
            sum.push(i);
        } if (i % 5 === 0) {
            sum.push(i);
        }
    }
};

multiples();

let sum2 = 0;
let totalSum = () => {
    for (let i = 0; i < sum.length; i++) {
        sum2 = sum2 += sum[i];   
    };
    console.log(sum2);  
};
totalSum();

// :red_circle: Commit. //DONE


// ## III. Arrays & Control flow
// ### A. Talk about it:

// 1. What are the things in an array called?

                //AN ELEMENT

// 2. Do Arrays guarantee those things will be in order?
                //YES at least by Index Number

// 3. What real-life thing could you model with an array?
                // a List

// :red_circle: Commit. //DONE


// ### B. Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called `quotes`.

const quotes = ["Quick to speak, slow to listen", "YOLO", "one death is a tragedy, one million is a statistic"];

// :red_circle: Commit.

// ### C. Accessing elements

// Given the following array `const randomThings = [1, 10, "Hello", true]`

// 1. How do you access the 1st element in the array?

// 2. Change the value of `"Hello"` to `"World"`.

// 3. Check the value of the array to make sure it updated the array.  How?  Why, yes! `console.log()`;

// :red_circle: Commit.


// ### D. Change values

// Given the following array `const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]`

// 1. What would you write to access the 3rd element of the array?

// 2. Change the value of "Github" to "Octocat"

// 3. Add a new element, "Cloud City" to the array.

//:red_circle: Commit. //DONE


// ### E. Mix It Up

// Given the following array: 

const myArray = [5, 10, 500, 20];

// 1. Add the string `"Egon"` to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon");
myArray.push("Shadi");
// 2. Remove the `5` from the beginning of the array.

// 3. Add the string `"Bob Marley"` to the beginning of the array.

// 4. Remove the string of your choise from the end of the array.

// 5. Reverse this array using `Array.prototype.reverse()`.  Did you mutate the array? What does _mutate_ mean? Did the `.reverse()` method return anything?

// :red_circle: Commit.


// ### F. Biggie Smalls

// Create a variable that contains an integer.

// Write an `if ... else` statement that:

// 1. `console.log()`s "little number" if the number is entered is less than **100**

// 2. `console.log()`s `big number` if the number is greater than or equal to 100.

// :red_circle: Commit.


// ### G. Monkey in the Middle

// Write an `if ... else if ... else` statement:

// 1. `console.log()` `little number` if the number entered is less than **5**.<br>

// 2. If the number entered is more than 10, log `big number`.

// 3. Otherwise, log "monkey". <br>

// :red_circle: Commit.


// ### H. What's in Your Closet?

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// ```javascript
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// ```

// 1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.

// 2. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**

// 3. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.

// 4. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.

// 5. In the same way, access one item from Thom's pants array.

// 6. Access one item from Thom's accessories array.

// 7. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.

// :red_circle: Commit.




